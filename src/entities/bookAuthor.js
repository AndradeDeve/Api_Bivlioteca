import { EntitySchema } from "typeorm";

const bookauthor =new EntitySchema({
    name: "bookAuthor",
    tableName: "bookAuthor",
    columns: {
        autor_id: {primary: true, type: Number, nullable: false},
        livor_id: {primary: true, type: Number, nullable:false},
        createAt: {type: "datetime", nullable: false, default: () => "CURRENT_TIMESTAMP"},
        deletedAt:{type: "datetime", nullable: true}
    },
    relations:{
        autores: {type: "many-to-one", target: "autores", nullable: false},
        livros: {type: "many-to-one", target: "livros", nullable: false}
    },
});

export default bookauthor;