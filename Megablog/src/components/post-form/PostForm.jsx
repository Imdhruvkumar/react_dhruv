import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../Index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      let fileId = null;

      // ✅ Upload file agar diya ho to
      if (data.image && data.image[0]) {
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) fileId = file.$id;

        // ✅ Agar update hai aur purana image hai to delete kar
        if (post && post.featuredimage) {
          await appwriteService.deleteFile(post.featuredimage);
        }
      }

      // ✅ Payload banaya (userid, featuredimage lowercase me)
      const payload = {
        ...data,
        userid: userData.$id,
        featuredimage: fileId || post?.featuredimage || null,
      };
      delete payload.image; // file input DB me save nahi hoga

      let dbPost;
      if (post) {
        // ✅ Update
        dbPost = await appwriteService.updatePost(post.$id, payload);
      } else {
        // ✅ Create
        dbPost = await appwriteService.createPost(payload);
      }

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } catch (error) {
      console.error("Post submit error:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/\s+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post?.featuredimage && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFileview(post.featuredimage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
