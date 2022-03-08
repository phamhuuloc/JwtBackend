import express from "express";
import initWebRoutes from "./routes/web";
import configViewEngine from "./configs/viewEngine";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;
// require("dotenv").config();
// const PORT = process.env.PORT || 8080;
// config view engine
configViewEngine(app);
// init web rotes
initWebRoutes(app);
// config body  parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(">> JWT backend is runing on the port " + PORT);
});
