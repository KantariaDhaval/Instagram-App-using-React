import SiteInfoListItem from "./SiteInfoListItem";
import PropTypes from "prop-types";

function SiteInfoList(props) {
  const { list } = props;

  const listItems = list.map((item) => {
    return (
      <SiteInfoListItem
        key={item.id}
        name={item.name}
        infoLink={item.infoLink}
      />
    );
  });

  return <ul id="listsOfInfo">{listItems}</ul>;
}

SiteInfoList.propTypes = {
  list: PropTypes.array,
};

SiteInfoList.defaultProps = {
  list: [],
};

export default SiteInfoList;
