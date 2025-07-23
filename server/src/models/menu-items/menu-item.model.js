import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    image: { type: String, required: false },
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const MenuItemModel = mongoose.model("MenuItemModel", menuItemSchema);
