import { NavLink } from "react-router-dom";
import NewsletterSignup from "../newsletter/NewsletterSignup";

import classnames from "classnames";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const activeLink = ({ isActive }) => (isActive ? styles.active : undefined);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={classnames(activeLink, styles.navLink)}
                end
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/recipes"
                className={classnames(activeLink, styles.navLink)}
              >
                Recipes
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/newsletter"
                className={classnames(activeLink, styles.navLink)}
              >
                Newsletter
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/login"
                className={classnames(activeLink, styles.navLink)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <NewsletterSignup />
      </nav>
    </header>
  );
};

export default MainNavigation;
