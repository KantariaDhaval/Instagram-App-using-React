function SiteInfoListItem(props) {
  return (
    <li id={props.item.name} className="infoPage">
      <a href={props.item.infoLink} className="infoPageLink">
        {props.item.name}
      </a>
    </li>
  );
}

export default SiteInfoListItem;
