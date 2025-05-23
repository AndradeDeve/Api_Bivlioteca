import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root", 
    port: 3306,
    password: "",
    database: "livraria2025_1",
    entities: ["src/entities/*.js"],
    migrations: ["src/database/migration/*.cjs"]
});

export {AppDataSource};