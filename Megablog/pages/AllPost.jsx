import React, { useEffect, useState } from "react";
import { Container } from "../src/components/Index";
import PostCard from "../src/components/PostCard";
import appwriteService from "../src/appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await appwriteService.getposts();
        if (res && res.documents) {
          setPosts(res.documents);
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPost;
