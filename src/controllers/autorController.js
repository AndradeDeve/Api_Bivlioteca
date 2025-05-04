import express from "express";
import autor from "../entities/autor.js";
import { Like } from "typeorm";
import { AppDataSource } from "../database/data-souce.js";

const routes = express.Router();
const autorRepository = AppDataSource.getRepository(autor);

routes.get("/", async (request, reponse) => {
    const nomesAutores = await autorRepository.find({
        select: ["nome_auto"]
    });
    return reponse.status(201).send({"response": nomesAutores});
});

routes.get("/:nameFound", async (request, response) => {
    const {nameFound} = request.params;
    const autorFound = await autorRepository.findBy({nome_auto: Like
        (`%${nameFound}%`)
    });
    return response.status(200).send({"response": autorFound});
});

routes.post("/", async (request, reponse) => {
    const { nome_auto, nasc_autor, nacionalidade} = request.body;

    if (nome_auto.length < 1 ){
        return reponse.status(400).send({"response":"O campo 'Nome Autor' deve ter no minimo 1 caracter"});
    };
    const newAutor = autorRepository.create({nome_auto, nasc_autor, nacionalidade});
    await autorRepository.save(newAutor);
    return reponse.status(201).send("Autor cadastrado com sucesso");
});

export default routes;