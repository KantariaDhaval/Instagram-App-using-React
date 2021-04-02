import PropTypes from "prop-types";
import withToggleHandler from "../withToggleHandler";
import BaseButton from "../BaseButton";

function CommentButton(props) {
  const { id, dataType, isToggled, numberOfCounts, handleClick } = props;
  return (
    <BaseButton
      classes="photoHoverBtn commentBtn"
      id={`commentBtn` + dataType + id}
      onClick={handleClick}
      innerText={
        <>
          <i
            className={
              isToggled
                ? "photoHoverIcon fas fa-comment activeCommentIcon"
                : "photoHoverIcon fas fa-comment"
            }
            data-btntype="commentIcon"
          ></i>
          <span className="numberOfCounts">{numberOfCounts}</span>
        </>
      }
    />
  );
}

CommentButton.propTypes = {
  isCommented: PropTypes.bool,
  numberOfComments: PropTypes.number,
  id: PropTypes.string,
  dataType: PropTypes.string,
};

CommentButton.defaultProps = {
  isCommented: false,
  numberOfComments: 0,
  id: "",
  dataType: "",
};

export default withToggleHandler(CommentButton, (props) => {
  return {
    isToggled: props.isCommented,
    numberOfCounts: props.numberOfComments,
  };
});
