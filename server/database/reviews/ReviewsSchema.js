import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema(
  {
    food: {
      type: mongoose.Types.ObjectId,
      ref: "Foods",
    },
    restaurents: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurents",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    isFoodReview: Boolean,
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Images",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ReviewsModel = mongoose.model("Reviews", ReviewsSchema);
