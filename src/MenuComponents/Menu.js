import MenuTab from "./MenuTab";
import { tabNames } from "./../registry.js";

function Menu(props) {
  const { changeCurrentTab, currentTab } = props;

  const menuTabs = [
    {
      key: 1,
      innerText: tabNames.POSTS,
      iconClasses: "fas fa-th menuIcon",
      menuTabName: tabNames.POSTS,
    },
    {
      key: 2,
      innerText: tabNames.IGTV,
      iconClasses: "fas fa-tv menuIcon",
      menuTabName: tabNames.IGTV,
    },
    {
      key: 3,
      innerText: tabNames.SAVED,
      iconClasses: "far fa-bookmark  menuIcon",
      menuTabName: tabNames.SAVED,
    },
    {
      key: 4,
      innerText: tabNames.TAGGED,
      iconClasses: "far fa-id-badge  menuIcon",
      menuTabName: tabNames.TAGGED,
    },
  ];

  const menuTabElements = menuTabs.map((menuTab) => {
    return (
      <MenuTab
        key={menuTab.key}
        currentTab={currentTab}
        innerText={menuTab.innerText}
        iconClasses={menuTab.iconClasses}
        menuTabName={menuTab.menuTabName}
      />
    );
  });

  return (
    <div id="menu">
      <div id="menuContainer" onClick={changeCurrentTab}>
        {menuTabElements}
      </div>
    </div>
  );
}

export default Menu;
