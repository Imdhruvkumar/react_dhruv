import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredimage }) {
  const [imgUrl, setImgUrl] = useState("/placeholder.png"); // default placeholder

useEffect(() => {
  if (featuredimage) {
    try {
      const url = appwriteService.getFileView(featuredimage);
      console.log("👉 Preview URL:", url);  // 👈 yaha add kar
      setImgUrl(url);
    } catch (error) {
      console.error("Image load error:", error);
      setImgUrl("/placeholder.png");
    }
  }
}, [featuredimage]);


  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
            onError={(e) => {
              e.target.src = "/placeholder.png";
            }}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
