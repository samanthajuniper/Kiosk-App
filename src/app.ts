import express from "express";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes";
import { errorHandler } from "./middleware/errors/errorHandler";

dotenv.config();
const app = express();
const port = process.env.PORT;

//middleware

// parse data from client
app.use(express.json());
// routes
app.use("/api/menu", menuRoutes);
// error handling
app.use(errorHandler);

app.listen(port);
