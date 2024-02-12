import express from "express";
import dotenv from "dotenv";
import path from "path";
// import { Pool } from "pg";
import menuRoutes from "./routes/menuRoutes";
import { errorHandler } from "./middleware/errors/errorHandler";

dotenv.config({
  override: true,
  path: path.join(__dirname, ".env.development.local"),
});
const app = express();
const port = process.env.PORT;

// Database configuration
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

//middleware

// parse data from client
app.use(express.json());
// routes
app.use("/api/menu", menuRoutes);
// error handling
app.use(errorHandler);

app.listen(port);
