import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import RecipesList from "../components/recipes/RecipesList";

const RecipesPage = () => {
  const { recipes } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={recipes}>
        {(loadedRecipes) => <RecipesList recipes={loadedRecipes} />}
      </Await>
    </Suspense>
  );
};

export default RecipesPage;

async function loadRecipes() {
  const response = await fetch("http://localhost:8080/recipes");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch recipes" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.recipes;
  }
}

export function loader() {
  return defer({ recipes: loadRecipes() });
}
