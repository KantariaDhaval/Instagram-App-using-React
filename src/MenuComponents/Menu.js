import MenuTab from "./MenuTab";
import { useSelector, useDispatch } from "react-redux";
import { menuTabs } from "./menuTabs";
import { setCurrentTab } from "../Redux/Reducers/menu";

const Menu = () => {
  const dispatch = useDispatch();
  const { currentTab } = useSelector((state) => state.menu);

  function changeCurrentTab(event) {
    if (event.target.dataset.menu_tab) {
      dispatch(setCurrentTab(event.target.dataset.menu_tab_name));
    }
  }

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
};

export default Menu;
