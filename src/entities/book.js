import { EntitySchema } from "typeorm";

const author = new EntitySchema({
    name: "livro",
    tableName:  "livros",
    columns:{
        id: {primary: true, type: "int", generated: true},
        book_nama: {type: "varchar", length: 45, nullable: false},
        publication: {type: "date", nullable: false},
        pages: {type: "int", nullable: false},
        price: {type: "decimal", precision: 6, scale: 2, nullable: false},
        createdAt: {type: "datetime", nullable: false, default: () => " CURRENT_TIMESTAMP"},
        deletedAt: {type: "datetime", nullable: true}
    },
    relations: {
        category: {type: "many-to-one", target: "categoria", nullable: false},
        editor: {type: "many-to-one", target: "editoras", nullable: false}
    },
});

export default author;