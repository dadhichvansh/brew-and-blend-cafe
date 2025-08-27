import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/db/db.js";
import { PORT } from "./src/validations/port.validation.js";
import { menuRoutes } from "./src/routes/menu.route.js";

// initializing express app instance and connecting to the database
const app = express();
connectDB();

// built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve public images and uploads
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// CORS - allow credentials for session cookies & allow methods we need
app.use(
  cors({
    origin: ["http://localhost:5173"], // frontend origin(s)
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api", menuRoutes);

app.listen(PORT, () => {
  console.log(`Listening to server at http://localhost:${PORT}`);
});
