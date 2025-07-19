import "dotenv/config";
import express from "express";
import cors from "cors";
import { PORT } from "./src/validations/port.validation.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET"],
  })
);

app.listen(PORT, () =>
  console.log(`Listening to server on http://localhost:${PORT}`)
);
