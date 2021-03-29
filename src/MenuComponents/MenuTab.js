function MenuTab(props) {
  return (
    <button
      className={
        props.currentTab === props.tabName ? "menuPage active" : "menuPage"
      }
      data-btntype={props.btnType}
      data-menutab="true"
    >
      <i className={props.iconClasses}></i>
      {props.tabName}
    </button>
  );
}

export default MenuTab;
