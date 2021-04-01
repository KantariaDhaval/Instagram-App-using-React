import PropTypes from "prop-types";

function SiteInfoListItem(props) {
  const { name, infoLink } = props;
  return (
    <li id={name} className="infoPage">
      <a href={infoLink} className="infoPageLink">
        {name}
      </a>
    </li>
  );
}

SiteInfoListItem.propTypes = {
  name: PropTypes.string,
  infoLink: PropTypes.string,
};

SiteInfoListItem.defaultProps = {
  name: "Home",
  infoLink: "/",
};

export default SiteInfoListItem;
