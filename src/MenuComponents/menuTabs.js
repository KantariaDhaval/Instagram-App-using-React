import { tabNames } from "./../registry";

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

export { menuTabs };
