import express from "express";
import { home } from "nodemon/lib/utils";
import homeController from "../controller/homeController";
const router = express.Router();

const initWebRoutes = (app) => {
  //path handler
  router.get("/", homeController.hanleHelloWorld);
  router.get("/user", homeController.handleUserPage);
  router.post("/user/create-user", homeController.handleCreateNewUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/update-user/:id", homeController.getUpdateUserPage);
  router.post("/user/update-user", homeController.handleUpdateUser);
  return app.use("/", router);
};
export default initWebRoutes;
