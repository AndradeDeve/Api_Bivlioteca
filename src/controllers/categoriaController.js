import express from "express";
import categorias from "../entities/categorias.js";
import { Like } from "typeorm";
import { AppDataSource } from "../database/data-souce.js";

const routes = express.Router();
const categoriaRepository = AppDataSource.getRepository(categorias);

routes.get("/", async (request, response) => {
      const nomeCategorias = await categoriaRepository.find({
        select: ["nome_categoria"]
      });
      return response.status(201).json({"response":nomeCategorias });
  });
  

routes.get("/:nameFound", async(request, response) =>{
    const {nameFound} = request.params;
    const categoriaFound = await categoriaRepository.findBy({nome_categoria: Like
        (`%${nameFound}`)
    });
    return response.status(201).send({"response": categoriaFound})
});

routes.post("/", async(request, response) => {
    const nome_categoria = request.body;

    if (nome_categoria.length < 1){
        return response.status(400).send({"response":"O campo 'Categoria' deve conter no minimo 1 caracter"})
    };
    const newCategoria = categoriaRepository.create(nome_categoria);
    await categoriaRepository.save(newCategoria);
    return response.status(201).send("Categoria cadastrada com sucesso");
});

export default routes;