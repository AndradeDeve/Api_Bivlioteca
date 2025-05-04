module.exports = class Db1745773726409 {
    name = 'Db1745773726409'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`bookAuthor\` (\`authorId\` int NOT NULL, \`bookId\` int NOT NULL, \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, \`authorCodigoAutor\` int NOT NULL, PRIMARY KEY (\`authorId\`, \`bookId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`livros\` (\`id\` int NOT NULL AUTO_INCREMENT, \`book_nama\` varchar(45) NOT NULL, \`publication\` date NOT NULL, \`pages\` int NOT NULL, \`price\` decimal(6,2) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, \`categoryCodigoCategoria\` int NOT NULL, \`editorCodigoEditora\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createAt\` \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`bookAuthor\` ADD CONSTRAINT \`FK_b6517d27367873b7047bcb46809\` FOREIGN KEY (\`authorCodigoAutor\`) REFERENCES \`autores\`(\`codigo_autor\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bookAuthor\` ADD CONSTRAINT \`FK_2ab45f67735aaabd975d5767606\` FOREIGN KEY (\`bookId\`) REFERENCES \`livros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`livros\` ADD CONSTRAINT \`FK_61c7b61e7f7590a419a5bdd1f3f\` FOREIGN KEY (\`categoryCodigoCategoria\`) REFERENCES \`categoria\`(\`codigo_categoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`livros\` ADD CONSTRAINT \`FK_26d9d41cdae3e223482ea14818d\` FOREIGN KEY (\`editorCodigoEditora\`) REFERENCES \`editoras\`(\`codigo_editora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`livros\` DROP FOREIGN KEY \`FK_26d9d41cdae3e223482ea14818d\``);
        await queryRunner.query(`ALTER TABLE \`livros\` DROP FOREIGN KEY \`FK_61c7b61e7f7590a419a5bdd1f3f\``);
        await queryRunner.query(`ALTER TABLE \`bookAuthor\` DROP FOREIGN KEY \`FK_2ab45f67735aaabd975d5767606\``);
        await queryRunner.query(`ALTER TABLE \`bookAuthor\` DROP FOREIGN KEY \`FK_b6517d27367873b7047bcb46809\``);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createAt\` \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`DROP TABLE \`livros\``);
        await queryRunner.query(`DROP TABLE \`bookAuthor\``);
    }
}
