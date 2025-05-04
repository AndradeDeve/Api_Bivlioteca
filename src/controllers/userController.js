import express from "express";
import User from "../entities/user.js"
import { AppDataSource } from "../database/data-souce.js";
import { Like } from "typeorm";

const routes = express.Router();
const userRepository = AppDataSource.getRepository(User);

routes.get("/", async (request, response) => {
    const users = await userRepository.findBy({typeUser:"admin"});
    return response.status(200).send({"response": users});
});

routes.get("/:nameFound", async (request, response) => {
    const {nameFound} = request.params;
    const userFound = await userRepository.findBy({name: Like
        (`%${nameFound}%`)
    });
    return response.status(200).send({"response": userFound})
});

routes.post("/",async (request, response) =>{
    // const name =request.body.name;
    // const email = request.body.email;
    // const password = request.body.password;

    //é o mesmo código do que o de cima só q mais simplificado
    const {name, email, password, typeUser} = request.body;

   if(!email.toLowerCase().includes("@")){
        return response.status(400).send({"response":"O email esta incorreto"})
   };

   if(password.length < 6){
    return response.status(400).send({"response":"Campo 'password' deve ter no minimo 6 caractere"});
   };

    if(name.length < 1){
        return response.status(400).send({"response":"Campo 'name' deve ter no minimo 1 caractere"});
    
    };
    if(typeUser.toLowerCase() !== "admin" && typeUser.toLowerCase() !== "comum"){
        return response.status(400).send({"response": 'O tipo de usuário deve ser "admin" ou "comum"'})
    };

    const newUser = userRepository.create({name, email, password, typeUser});
    await userRepository.save(newUser);
    return response.status(201).send("Usuário cadastrado com sucesso");
});

export default routes;