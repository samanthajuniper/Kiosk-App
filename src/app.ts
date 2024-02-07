import express from "express";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT;

//middleware
app.use("/api/menu", menuRoutes);

app.listen(port);
