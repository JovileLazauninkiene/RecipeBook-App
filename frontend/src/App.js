import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RecipesPage, { loader as recipesLoader } from "./pages/Recipes";
import RootLayout from "./pages/Root";
import RecipeDetailPage, {
  loader as recipeDetailLoader,
  action as deleteRecipeAction,
} from "./pages/RecipeDetail";
import Login from "./pages/Login";
import RecipesRootLayout from "./pages/RecipesRoot";
import EditRecipePage from "./pages/EditRecipe";
import NewRecipePage from "./pages/NewRecipe";
import { action as manipulateRecipeAction } from "./components/forms/RecipeForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "recipes",
        element: <RecipesRootLayout />,
        children: [
          {
            index: true,
            element: <RecipesPage />,
            loader: recipesLoader,
          },
          {
            path: ":recipeId",
            id: "recipe-detail",
            loader: recipeDetailLoader,
            children: [
              {
                index: true,
                element: <RecipeDetailPage />,
                action: deleteRecipeAction,
              },
              {
                path: "edit",
                element: <EditRecipePage />,
                action: manipulateRecipeAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewRecipePage />,
            action: manipulateRecipeAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
