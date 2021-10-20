// Libraries
import express from "express";
import passport from "passport";

// Database Model
import { FoodModel } from "../../database/allModels";

// Validation
import {ValidateRestarentId, ValidateCategory} from "../../Validation/food"

const Router = express.Router();

/*
Router      /
Des         Get all foods based on particular restaurent
Params      _id
Access      Public
Method      GET
*/

Router.get("/:_id", async (req, res) => {
  try {

    await ValidateRestarentId(req.params)

    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurent: _id });

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
Router      /r
Des         Get all foods based on particular category
Params      category
Access      Public
Method      GET
*/

Router.get("/r/:category", async (req, res) => {
  try {

    await ValidateCategory(req.params)

    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
