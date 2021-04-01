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

export default SiteInfoListItem;
