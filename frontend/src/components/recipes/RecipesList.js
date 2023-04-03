import CardItem from "../card/CardItem";
import styles from "./RecipesList.module.css";

const RecipesList = ({ recipes }) => {
  return (
    <div className={styles.recipes}>
      <h1 className={styles.recipesTitle}>My recipes</h1>
      {recipes.map((recipe) => (
        <CardItem
          key={recipe.id}
          className={styles.item}
          src={recipe.image}
          alt={recipe.title}
          text={recipe.title}
          path={`/recipes/${recipe.id}`}
          label={recipe.label}
        />
      ))}
    </div>
  );
};

export default RecipesList;
