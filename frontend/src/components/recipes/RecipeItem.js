import { Link, useSubmit } from "react-router-dom";
import Button from "../button/Button";

import styles from "./RecipeItem.module.css";

const RecipeItem = ({ recipe }) => {
  const submit = useSubmit();
  function deleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete this?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <>
      <article className={styles.recipe}>
        <h1 className={styles.recipeTitle}>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <p>Filed under: {recipe.label}</p>
        <Link className={styles.itemLink} to={recipe.path}>
          <figure className={styles.imageWraps}>
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.title}
            />
          </figure>
        </Link>
        <menu>
          <Link to="edit">
            <Button>Edit</Button>
          </Link>
          <Button onClick={deleteHandler}>Delete</Button>
        </menu>
      </article>
    </>
  );
};

export default RecipeItem;
