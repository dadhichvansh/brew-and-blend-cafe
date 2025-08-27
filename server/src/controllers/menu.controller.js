import { MenuItem } from "../models/menu-item.model.js";

// POST /api/menu
export const createMenuItem = async (req, res) => {
  try {
    const { title, price, description, category, isHighlight } = req.body;
    let image = null; // set the image to null initially

    // check if user input is valid or not
    if (!title || !price || !description || !category) {
      return res.status(400).json({
        message: "Item details are required.",
        success: false,
      });
    }

    // check if price is a valid number
    if (isNaN(price) || Number(price) <= 0) {
      return res.status(400).json({
        message: "Price must be a valid positive number.",
        success: false,
      });
    }

    // handle image upload (use default/null if no file is provided)
    if (req.file) {
      image = `${process.env.IMAGE_BASE_URL}/uploads/${req.file.filename}`;
    }

    // check if an item already exists in the database
    const itemExists = await MenuItem.findOne({ title });

    if (itemExists) {
      return res.status(409).json({
        message: "Menu item already exists.",
        success: false,
      });
    }

    // create new item
    const newItem = new MenuItem({
      image,
      title,
      price,
      description,
      category,
      isHighlight,
    });

    // save the item to the database
    const savedItem = await newItem.save();

    res.status(201).json({
      message: "Item created successfully.",
      success: true,
      data: { menu_item: savedItem },
    });
  } catch (error) {
    console.error("Error creating menu item:", error);

    res.status(500).json({
      message: "Failed to create menu item. Please try again later.",
      success: false,
      data: null,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// GET /api/menu
export const fetchMenu = async (req, res) => {
  try {
    const menu = await MenuItem.find();

    if (!menu || menu.length === 0) {
      return res.status(404).json({
        message: "No menu items found.",
        success: false,
        data: null,
      });
    }

    res.status(200).json({
      message: "Menu fetched successfully.",
      success: true,
      data: { menu_items: menu },
    });
  } catch (error) {
    console.error("Error fetching menu items:", error);

    res.status(500).json({
      message: "Failed to fetch menu items. Please try again later.",
      success: false,
      data: null,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// GET /api/menu-highlights
export const fetchMenuHighlights = async (req, res) => {
  try {
    const menuHighlights = await MenuItem.find({ isHighlight: true }).limit(6);

    if (!menuHighlights.length) {
      return res.status(404).json({
        message: "No menu highlights found.",
        success: false,
        data: null,
      });
    }

    res.status(200).json({
      message: "Menu highlights fetched successfully.",
      success: true,
      data: { menu_highlights: menuHighlights },
    });
  } catch (error) {
    console.error("Error fetching menu highlights:", error);

    res.status(500).json({
      message: "Failed to fetch menu highlights. Please try again later.",
      success: false,
      data: null,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// PUT /api/menu/:id
export const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;

    // build update object dynamically
    const updateData = {};
    const allowedFields = [
      "title",
      "price",
      "description",
      "category",
      "isHighlight",
    ];

    // only include fields that are present in req.body
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    }

    // handle image upload
    if (req.file) {
      updateData.image = `${process.env.IMAGE_BASE_URL}/uploads/${req.file.filename}`;
    }

    const updatedItem = await MenuItem.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Menu item not found.",
        success: false,
        data: null,
      });
    }

    res.status(200).json({
      message: "Menu item updated successfully.",
      success: true,
      data: { menu_item: updatedItem },
    });
  } catch (error) {
    console.error("Error updating menu item:", error);

    res.status(500).json({
      message: "Failed to update menu item. Please try again later.",
      success: false,
      data: null,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// DELETE /api/menu/:id
export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await MenuItem.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Menu item not found.",
        success: false,
        data: null,
      });
    }

    res.status(200).json({
      message: "Menu item deleted successfully.",
      success: true,
      data: { menu_item: deletedItem },
    });
  } catch (error) {
    console.error("Error deleting menu item:", error);

    res.status(500).json({
      message: "Failed to delete menu item. Please try again later.",
      success: false,
      data: null,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
