import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;
const reviewSchema = new mongoose.Schema({
  reviewBy: {
    type: ObjectId,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: String,
  },
  size: {
    type: String,
  },
  style: {
    color: String,
    image: String,
  },
  fit: {
    color: String,
  },
  images: [],
  likes: [],
});

let productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: ObjectId,
      required: true,
      ref: "Category",
    },
    subCategories: {
      type: [
        {
          type: ObjectId,
          ref: "subCategory",
        },
      ],
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },

    images: [
      {
        image: String,
      },
    ],

    price: {
      type: String,
      required: true,
    },
    sale: {
      type: String,
      required: true,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
    popularity: {
      type: String,
      required: true,
      default: 0,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    details: [
      {
        name: String,
        value: String,
      },
    ],
    questions: [
      {
        questions: String,
        answers: String,
      },
    ],
    reviews: [reviewSchema],
    numReviews: [
      {
        type: Number,
        required: true,
        default: 0,
      },
    ],
    shipping: {
      type: Number,
      required: true,
      default: 0,
    },
    subProducts: [
      {
        images: [],
        descriptionImages: [],
        color: { color: { type: String }, image: { type: String } },
        sizes: [
          {
            size: String,
            qty: Number,
            price: Number,
          },
        ],
      },
    ],

    sold: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
