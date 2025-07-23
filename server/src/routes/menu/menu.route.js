import { Router } from "express";
import {
  createMenuItem,
  fetchMenu,
} from "../../controllers/menu/menu.controller.js";
import { upload } from "../../middlewares/item-images/item-image.middleware.js";

export const menuRoute = Router();

menuRoute.get("/", fetchMenu);
menuRoute.post("/menu-item/create", upload.single("image"), createMenuItem);
