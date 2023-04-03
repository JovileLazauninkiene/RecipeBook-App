const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/recipe");
const {
  isValidText,
  isValidLabel,
  isValidImageUrl,
} = require("../util/validation");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await getAll();
    res.json({ recipes: recipes });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const recipe = await get(req.params.id);
    res.json({ recipe: recipe });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidLabel(data.label)) {
    errors.label = "Invalid label.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the recipe failed due to validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "Recipe saved.", recipe: data });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidLabel(data.label)) {
    errors.label = "Invalid label.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Updating the recipe failed due to validation errors.",
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: "Recipe updated.", recipe: data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: "Recipe deleted." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
