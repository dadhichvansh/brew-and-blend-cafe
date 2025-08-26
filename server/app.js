import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { connectDB } from "./src/db/db.js";
import { PORT } from "./src/validations/port.validation.js";
import { menuHighlightsRoutes } from "./src/routes/menu-highlights.route.js";

const app = express();
const staticPath = path.join(import.meta.dirname, "public", "images");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET"],
  })
);

// menu highlights routes
app.use("/", menuHighlightsRoutes);

app.listen(PORT, () => {
  console.log(`Listening to server at http://localhost:${PORT}`);
});
