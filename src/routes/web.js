import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

const initWebRoutes = (app) => {
  //path handler
  router.get("/", homeController.hanleHelloWorld);
  router.get("/user", homeController.handleUserPage);
  return app.use("/", router);
};
export default initWebRoutes;
