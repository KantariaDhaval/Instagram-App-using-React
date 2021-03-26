import SiteInfoListItem from "./SiteInfoListItem";

function SiteInfoList(props) {
  const list = props.list;
  const listItems = list.map((item) => {
    return <SiteInfoListItem key={item.id} item={item} />;
  });

  return <ul id="listsOfInfo">{listItems}</ul>;
}

export default SiteInfoList;
