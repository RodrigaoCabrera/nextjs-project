import Posts from "@/components/Post";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
const Post = async (props) => {
  const {
    params: { id },
  } = props;
  const post = await loadPost(id);
  console.log(post);
  return (
    <div>
      <Posts post={post} key={id} />
    </div>
  );
};

export default Post;
