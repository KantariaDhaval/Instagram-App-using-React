import AddPost from "./AddPost";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function PostsContainer(props) {
  const { data, name } = props;
  const { currentTab } = useSelector((state) => state.menu);

  const postElements = data.map((post) => {
    return <AddPost key={post.id} post={post} />;
  });

  return (
    <div className={currentTab === name ? "photos" : "photos hidden"}>
      <div className="photosContainer">{postElements}</div>
    </div>
  );
}

PostsContainer.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
};

PostsContainer.defaultProps = {
  data: [],
  name: "",
};

export default PostsContainer;
