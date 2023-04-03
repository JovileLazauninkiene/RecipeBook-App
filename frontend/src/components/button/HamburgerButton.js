import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./HamburgerButton.module.css";

const HamburgerButton = ({ isActive, onClick }) => {
  return (
    <div className={styles.hamburgerBtn} onClick={onClick}>
      {isActive ? (
        <CloseIcon className={styles.icon} />
      ) : (
        <MenuIcon className={styles.icon} />
      )}
    </div>
  );
};

export default HamburgerButton;
