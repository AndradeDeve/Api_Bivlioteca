import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
    response.status(200).send("Deu certo");
});

routes.post("/", (request, response) =>{
    response.status(200).send("Agora é o métudo POST");

    // const name =request.body.name;
    // const email = request.body.email;
    // const password = request.body.password;

    //é o mesmo código do que o de cima só q mais simplificado
    const {name, email, password} = request.body;

    console.log(name);
    console.log(email)
    console.log(password);
});

export default routes;