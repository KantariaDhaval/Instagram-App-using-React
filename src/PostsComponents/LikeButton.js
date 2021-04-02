import PropTypes from "prop-types";
import withToggleHandler from "../withToggleHandler";
import BaseButton from "./../BaseButton";

function LikeButton(props) {
  const { id, dataType, isToggled, numberOfCounts, handleClick } = props;
  return (
    <BaseButton
      classes="photoHoverBtn likeBtn"
      id={`likeBtn` + dataType + id}
      onClick={handleClick}
      innerText={
        <>
          <i
            className={
              isToggled
                ? "photoHoverIcon fas fa-heart activeLikeIcon"
                : "photoHoverIcon fas fa-heart"
            }
            data-btntype="likeIcon"
          ></i>
          <span className="numberOfCounts">{numberOfCounts}</span>
        </>
      }
    />
  );
}

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
  numberOfLikes: PropTypes.number,
  id: PropTypes.string,
  dataType: PropTypes.string,
};

LikeButton.defaultProps = {
  isLiked: false,
  numberOfLikes: 0,
  id: "",
  dataType: "",
};

export default withToggleHandler(LikeButton, (props) => {
  return {
    isToggled: props.isLiked,
    numberOfCounts: props.numberOfLikes,
  };
});
