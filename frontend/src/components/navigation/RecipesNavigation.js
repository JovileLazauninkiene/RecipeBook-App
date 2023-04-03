import { NavLink } from "react-router-dom";
import Button from "../button/Button";

import styles from "./RecipesNavigation.module.css";

const RecipesNavigation = () => {
  const activeStyle = ({ isActive }) => (isActive ? styles.active : undefined);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/recipes" className={activeStyle} end>
              <Button>All Recipes</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes/new" className={activeStyle}>
              <Button>New Recipe</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RecipesNavigation;
