import { MenuItemModel } from "../../models/menu-items/menu-item.model.js";

export const createMenuItem = async (req, res) => {
  try {
    const { title, price, description, category } = req.body;
    const image = `${process.env.IMAGE_BASE_URL}/uploads/${req.file.filename}`;

    const newItem = new MenuItemModel({
      image,
      title,
      price,
      description,
      category,
    });
    const menuItem = await newItem.save();

    res.status(201).json({
      message: "Item created successfully.",
      success: true,
      data: menuItem,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const fetchMenu = async (req, res) => {
  try {
    const menuItems = await MenuItemModel.find();

    res.status(200).json({
      message: "Menu fetched successfully.",
      success: true,
      data: { menuItems },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: null,
    });
  }
};
