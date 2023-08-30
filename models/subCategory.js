import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },

    parent: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const subCategory =
  mongoose.models.subCategory ||
  mongoose.model("subCategory", subCategorySchema);

export default subCategory;
