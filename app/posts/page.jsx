import Link from "next/link";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
const Posts = async () => {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link href={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
