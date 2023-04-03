import styles from "./Sidebar.module.css";

const Sidebar = ({ children, onBackDropClick }) => {
  const onSideBarClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.takeOverSidebarWrapper} onClick={onBackDropClick}>
      <div className={styles.takeOverSidebar} onClick={onSideBarClick}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
