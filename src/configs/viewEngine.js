import express from "express";
const configViewEngine = (app) => {
  app.use(express.static("./srx/public"));
  app.set("view engine", "ejs");
  app.set("view", "./src/views");
};
export default configViewEngine;
