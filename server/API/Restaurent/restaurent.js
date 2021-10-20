// Libraries
import express from "express"

// Database models
import { RestaurentModel } from "../../database/allModels";
import { ValidateRestaurentId } from "../../Validation/food";

// Validation
import { ValidateRestaurentCity, ValidateRestaurentSearchString } from "../../Validation/restaurent";

const Router = express.Router();

/*
Route       /
Des         Get all restaurents details
Params      None
Access      Publc
Method      GET
*/

Router.get("/", async (req, res) => {
  try {

    await ValidateRestaurentCity(req.query);

    const { city } = req.query;
    const restaurents = await RestaurentModel.find({ city });
    return res.json({ restaurents });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /
Des         Get particular Restaurant details on id
Params      _id
Access      Publc
Method      GET
*/

Router.get("/:id", async (req, res) => {
  try {

    await ValidateRestaurentId(req.params);

    const { id } = req.params;
    const restaurent = await RestaurentModel.findOne(_id);

    if (!restaurent) {
      return res.status(404).json({ error: "Restaurent not found" });

      return res.json({ restaurent });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /
Des         Get Restaurant details on search
Params      NONE
Body        searchString
Access      Publc
Method      GET
*/

Router.get("/search", async (req, res) => {
  try {

    await ValidateRestaurentSearchString(req.body)

    const { searchString } = req.body;

    const restaurents = await RestaurentModel.find({
      name: { $regex: searchString, $options: "i" },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
