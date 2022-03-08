import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

const initWebRoutes = (app) => {
  //path handler
  router.get("/", homeController.hanleHelloWorld);
  router.get("/users", homeController.handleUserPage);
  router.post("/user/create-user", homeController.handleCreateNewUser);
  return app.use("/", router);
};
export default initWebRoutes;
