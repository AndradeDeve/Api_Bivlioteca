import { EntitySchema} from "typeorm";

const autor = new EntitySchema({
    name: "Autores",
    tableName: "autores",
    columns: {
        codigo_autor: {primary: true,type:"int", generated: "increment"},
        nome_auto: {type: "varchar", length: 45, nullable: false},
        nasc_autor: {type: "date", nullable: false},
        nacionalidade: {type: "varchar", length: 45, nullable:false},
        createdAt: {type: "datetime", nullable: false, default: () =>
            "CURRENT_TIMESTAMP"},
        deletedAt: {type: "datetime", nullable: true}
    }
});

export default autor;