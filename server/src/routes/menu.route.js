import { Router } from "express";
import {
  createMenuItem,
  deleteMenuItem,
  fetchMenu,
  fetchMenuHighlights,
  updateMenuItem,
} from "../controllers/menu.controller.js";
import { upload } from "../middlewares/item-image.middleware.js";

const router = Router();

router.post("/menu", upload.single("image"), createMenuItem);
router.get("/menu", fetchMenu);
router.get("/menu-highlights", fetchMenuHighlights);
router.put("/menu/:id", upload.single("image"), updateMenuItem);
router.delete("/menu/:id", deleteMenuItem);

export const menuRoutes = router;
