import PostsContainer from "./PostsContainer";

function Posts(props) {
  const { postsData, igtvData, savedData, taggedData, currentTab } = props;
  return (
    <div id="postsWrapper">
      <PostsContainer data={postsData} name="POSTS" currentTab={currentTab} />
      <PostsContainer data={igtvData} name="IGTV" currentTab={currentTab} />
      <PostsContainer data={savedData} name="SAVED" currentTab={currentTab} />
      <PostsContainer data={taggedData} name="TAGGED" currentTab={currentTab} />
    </div>
  );
}

export default Posts;
