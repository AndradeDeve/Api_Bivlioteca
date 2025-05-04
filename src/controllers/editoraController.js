import express from "express";
import editoras from "../entities/editoras.js";
import { Like } from "typeorm";
import { AppDataSource } from "../database/data-souce.js";

const routes = express.Router();
const editoraRepository = AppDataSource.getRepository(editoras);

routes.get("/:nameFound", async(request, response) =>{
    const {nameFound} = request.params;
    const editoraFound = await editoraRepository.findBy({cnpj: Like
        (`%${nameFound}`)
    });
    return response.status(201).send({"response": editoraFound})
});


routes.get("/", async (request,response) =>{
    const nomesEditoras = await editoraRepository.find({
        select: ["nome_editora"]
    });
    return response.status(201).send({"response": nomesEditoras});
});

routes.post("/", async(request, response) => {
    const {nome_editora, cnpj, email} = request.body;

    if(nome_editora.length < 1){
        return response.status(400).send({"response":"O campo 'Nome' deve conter no minimo 1 caracter"});
    };
    if(cnpj.length < 14){
        return response.status(400).send({"response": "O campo 'Cnpj' deve conter 14 caractes"});
    };
    if(!email.toLowerCase().includes("@")){
        return response.status(400).send({"response":"O email esta incorreto"});
   };
    const NewEditora = editoraRepository.create({nome_editora, cnpj, email});
    await editoraRepository.save(NewEditora);
    return response.status(201).send("Editora cadastrada com sucesso")
});

export default routes;