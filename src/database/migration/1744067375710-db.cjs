module.exports = class Db1744067375710 {
    name = 'Db1744067375710'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`editoras\` (\`codigo_editora\` int NOT NULL AUTO_INCREMENT, \`nome_editora\` varchar(100) NOT NULL, \`cnpj\` varchar(45) NOT NULL, \`email\` varchar(100) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`codigo_editora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`autores\` (\`codigo_autor\` int NOT NULL AUTO_INCREMENT, \`nome_auto\` varchar(45) NOT NULL, \`nasc_autor\` date NOT NULL, \`nacionalidade\` varchar(45) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`codigo_autor\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createAt\` \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createAt\` \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`DROP TABLE \`autores\``);
        await queryRunner.query(`DROP TABLE \`editoras\``);
    }
}
