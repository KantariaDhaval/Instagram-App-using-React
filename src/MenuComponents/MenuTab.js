import BaseButton from "./../BaseButton";

function MenuTab(props) {
  const { currentTab, innerText, iconClasses, menuTabName } = props;
  return (
    // <button
    //   className={currentTab === menuTabName ? "menuPage active" : "menuPage"}
    //   data-menu_tab_name={menuTabName}
    //   data-menutab={true}
    // >
    //   <i className={iconClasses}></i>
    //   {innerText}
    // </button>
    <BaseButton
      classes={currentTab === menuTabName ? "menuPage active" : "menuPage"}
      menuTabName={menuTabName}
      menuTab={true}
      innerText={
        <>
          <i className={iconClasses}></i> {innerText}
        </>
      }
    />
  );
}

export default MenuTab;
