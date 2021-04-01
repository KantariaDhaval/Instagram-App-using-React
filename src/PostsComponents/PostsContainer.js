import AddPost from "./AddPost";

function PostsContainer(props) {
  const { data, currentTab, name } = props;

  const postElements = data.map((post) => {
    return <AddPost key={post.id} post={post} />;
  });

  return (
    <div className={currentTab === name ? "photos" : "photos hidden"}>
      <div className="photosContainer">{postElements}</div>
    </div>
  );
}

export default PostsContainer;
