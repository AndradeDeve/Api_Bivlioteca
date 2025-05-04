import express from "express";
import autorController from "./controllers/autorController.js";
import userController from "./controllers/userController.js";
import categoriaController from "./controllers/categoriaController.js"
import editoraController from "./controllers/editoraController.js"

const routes = express();

routes.use("/editoras", editoraController);
routes.use("/autor", autorController);
routes.use("/user", userController);
routes.use("/categorias", categoriaController);

export default routes;