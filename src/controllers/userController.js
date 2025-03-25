import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
    response.status(200).send("Deu certo");
});

export default routes;