import { NavLink } from "react-router-dom";
import { parseMultipleClassNames } from "../../utils/theme/styleUtils";

import styles from "./NavigationLink.module.css";

const NavigationLink = ({ additionalStyles = [], name, to }) => {
  const activeLink = ({ isActive }) =>
    isActive
      ? parseMultipleClassNames([styles.active, styles.navLink])
      : styles.navLink;

  return (
    <span>
      <NavLink className={activeLink} to={to}>
        {name}
      </NavLink>
    </span>
  );
};

export default NavigationLink;
