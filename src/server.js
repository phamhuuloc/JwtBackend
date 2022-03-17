import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import checkConnection from "./config/connectDb";
// require("dotenv").config();
import bodyParser from "body-parser";
const app = express();
// const PORT = process.env.PORT || 8080;
// config view engine
configViewEngine(app);
// config body  parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// check connection Db
checkConnection();
// init web rotes
initWebRoutes(app);
const PORT = 8080;
app.listen(PORT, () => {
  console.log(">> JWT backend is runing on the port " + PORT);
});
