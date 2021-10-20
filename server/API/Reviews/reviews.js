// Libraries
import express from "express";

// Database Model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route       /new
Des         Add new review
Params      NONE
Body        Review Object
Access      Public
Method      POST
*/

Router.get("/:id", async (req, res) => {
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData)

        return res.json({review: "Successfully created review"})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 });

 /*
Route       /delete
Des         Delete a review
Params      _id
Access      Public
Method      DELETE
*/

Router.delete("/delete/:id", async (req, res) => {
    try {
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id)

        return res.json({review: "Successfully deleted review"})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 });

 export default Router;