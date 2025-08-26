import { Router } from "express";
import {
  createMenuItem,
  fetchMenuHighlights,
} from "../controllers/menu-highlights.controller.js";
import { upload } from "../middlewares/item-image.middleware.js";

const router = Router();

router.get("/api/menu-highlights", fetchMenuHighlights);
router.post("/admin/menu/create-item", upload.single("image"), createMenuItem);
// router.get("/admin", fetchAdminPage);

export const menuHighlightsRoutes = router;
