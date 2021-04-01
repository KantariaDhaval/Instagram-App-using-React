import SiteInfoListItem from "./SiteInfoListItem";

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

export default SiteInfoList;
