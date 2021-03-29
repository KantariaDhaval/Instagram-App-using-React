import AddPost from "./AddPost";

function PostsContainer(props) {
  const postElements = props.data.map((post) => {
    return <AddPost key={post.id} post={post} />;
  });

  return (
    <div
      className={props.currentTab === props.name ? "photos" : "photos hidden"}
    >
      <div className="photosContainer">{postElements}</div>
    </div>
  );
}

export default PostsContainer;
