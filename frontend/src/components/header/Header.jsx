import { useEffect, useState } from "react";

import NavigationLink from "../NavigationLink/NavigationLink";

import HamburgerButton from "../button/HamburgerButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import Sidebar from "../Sidebar/Sidebar";
import NewsletterSignup from "../newsletter/NewsletterSignup";
import styles from "./Header.module.css";

const Header = () => {
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: "(min-width: 968px" });

  useEffect(() => {
    if (matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <>
        {!matches ? (
          <HamburgerButton
            className={styles.hamburgerBtn}
            isActive={sideBarVisible}
            onClick={handleButtonClick}
          />
        ) : (
          <div className={styles.navigation}>
            <NavigationLink name="Home" to={"/"} />
            <NavigationLink name="Recipes" to={"/recipes"} />
            <NavigationLink name="Newsletter" to={"/newsletter"} />
            <NavigationLink name="Login" to={"/login"} />
            <NewsletterSignup />
          </div>
        )}
        {sideBarVisible && (
          <Sidebar onBackDropClick={closeSidebar}>
            <NavigationLink name="Home" to={"/"} />
            <NavigationLink name="Recipes" to={"/recipes"} />
            <NavigationLink name="Newsletter" to={"/newsletter"} />
            <NavigationLink name="Login" to={"/login"} />
          </Sidebar>
        )}
      </>
    </header>
  );
};
export default Header;
