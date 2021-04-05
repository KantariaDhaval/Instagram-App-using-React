import AddPost from "./AddPost";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

PostsContainer.propTypes = {
  data: PropTypes.array,
  currentTab: PropTypes.string,
  name: PropTypes.string,
};

PostsContainer.defaultProps = {
  data: [],
  currentTab: "POSTS",
  name: "",
};

function mapStateToProps(state) {
  return {
    currentTab: state.currentTab,
  };
}

export default connect(mapStateToProps)(PostsContainer);
