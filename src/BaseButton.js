function BaseButton(props) {
  const { classes, id, onClick, innerText, menuTabName, menuTab } = props;
  return (
    <button
      className={classes}
      id={id}
      onClick={onClick}
      data-menu_tab_name={menuTabName}
      data-menu_tab={menuTab}
    >
      {innerText}
    </button>
  );
}

export default BaseButton;
