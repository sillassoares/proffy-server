import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionController();

routes.post("/classes", classesController.store);
routes.get("/classes", classesController.index);

routes.post("/connections", connectionController.store);
routes.get("/connections", connectionController.index);

export default routes;
