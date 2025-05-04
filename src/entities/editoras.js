import { EntitySchema } from "typeorm";

const editoras = new EntitySchema({
    name: "editoras",
    tableName: "editoras",
    columns: {
        codigo_editora: {primary: true, type: "int", generated:"increment"},
        nome_editora: {type: "varchar", length: 100, nullable: false},
        cnpj: {type: "varchar", length: 45, nullable: false},
        email: {type: "varchar", length:100, nullable: false},
        createdAt: {type: "datetime", nullable: false, default: () =>
            "CURRENT_TIMESTAMP"},
        deletedAt: {type: "datetime", nullable: true}
    }
});

export default editoras;