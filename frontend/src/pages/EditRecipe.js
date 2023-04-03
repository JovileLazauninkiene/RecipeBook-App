import { useRouteLoaderData } from "react-router-dom";

import RecipeForm from "../components/forms/RecipeForm";

const EditRecipePage = () => {
  const data = useRouteLoaderData("recipe-detail");

  return <RecipeForm method="patch" recipe={data.recipe} />;
};

export default EditRecipePage;
