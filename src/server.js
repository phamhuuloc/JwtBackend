import express from "express";
import initWebRoutes from "./routes/web";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
// config view engine
configViewEngine(app);
// init web rotes
initWebRoutes(app);
app.listen(PORT, () => {
  console.log(">> JWT backend is runing on the port " + PORT);
});
