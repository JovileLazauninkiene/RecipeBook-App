import { Outlet } from "react-router-dom";

import RecipesNavigation from "../components/navigation/RecipesNavigation";

const RecipesRootLayout = () => {
  return (
    <>
      <RecipesNavigation />
      <Outlet />
    </>
  );
};

export default RecipesRootLayout;
