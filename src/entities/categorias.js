import { EntitySchema } from "typeorm";

const categorias = new EntitySchema({
    name:"categorias",
    tableName:"categoria",
    columns: {
        codigo_categoria: {primary:true, type: "int", generated: "increment"},
        nome_categoria: {type: "varchar", length: 45, nullable: false},
        createAt: {type: "datetime", nullable:false, default: () =>
            "CURRENT_TIMESTAMP"},
        deletedAt:{type:"datetime", nullable:true}
    }
});

export default categorias;