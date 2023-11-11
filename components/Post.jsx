import Posts from "@/app/posts/page";
import { Suspense } from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Post;
