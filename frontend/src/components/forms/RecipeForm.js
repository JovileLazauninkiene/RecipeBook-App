import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";
import Button from "../button/Button";

import styles from "./RecipeForm.module.css";

const RecipeForm = ({ method, recipe }) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }
  return (
    <Form method={method} className={styles.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={recipe ? recipe.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={recipe ? recipe.image : ""}
        />
      </p>
      <p>
        <label htmlFor="label">Label</label>
        <input
          id="label"
          type="text"
          name="label"
          required
          defaultValue={recipe ? recipe.label : ""}
        />
      </p>

      <p>
        <label htmlFor="description">Description</label>
        <input
          className={styles.description}
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={recipe ? recipe.description : ""}
        />
      </p>
      <div className={styles.actions}>
        <Button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </Button>
      </div>
    </Form>
  );
};

export default RecipeForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const recipeData = {
    title: data.get("title"),
    image: data.get("image"),
    label: data.get("label"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/recipes";

  if (method === "PATCH") {
    const recipeId = params.recipeId;
    url = "http://localhost:8080/recipes/" + recipeId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save recipe." }, { status: 500 });
  }
  return redirect("/recipes");
}
