import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    image: { type: String, required: false },
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    isHighlight: { type: Boolean, default: false, required: false },
  },
  { timestamps: true }
);

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);
