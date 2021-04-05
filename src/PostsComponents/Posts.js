import PostsContainer from "./PostsContainer";
import { tabNames } from "./../registry";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Posts(props) {
  const { postsData, igtvData, savedData, taggedData } = props;

  const dataArray = [
    {
      key: 1,
      data: postsData,
      name: tabNames.POSTS,
    },
    {
      key: 2,
      data: igtvData,
      name: tabNames.IGTV,
    },
    {
      key: 3,
      data: savedData,
      name: tabNames.SAVED,
    },
    {
      key: 4,
      data: taggedData,
      name: tabNames.TAGGED,
    },
  ];

  const dataArrayElements = dataArray.map((currentData) => {
    return (
      <PostsContainer
        key={currentData.key}
        data={currentData.data}
        name={currentData.name}
      />
    );
  });

  return <div id="postsWrapper">{dataArrayElements}</div>;
}

Posts.propTypes = {
  postsData: PropTypes.array,
  igtvData: PropTypes.array,
  savedData: PropTypes.array,
  taggedData: PropTypes.array,
  currentTab: PropTypes.string,
};

Posts.defaultProps = {
  postsData: [],
  igtvData: [],
  savedData: [],
  taggedData: [],
  currentTab: "POSTS",
};

function mapStateToProps(state) {
  const { postsData, igtvData, savedData, taggedData } = state.postReducer;
  return {
    postsData: postsData,
    igtvData: igtvData,
    savedData: savedData,
    taggedData: taggedData,
  };
}

export default connect(mapStateToProps)(Posts);
