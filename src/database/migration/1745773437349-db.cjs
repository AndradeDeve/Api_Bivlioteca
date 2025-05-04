module.exports = class Db1745773437349 {
    name = 'Db1745773437349'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`boolivros\` (\`id\` int NOT NULL AUTO_INCREMENT, \`book_nama\` varchar(45) NOT NULL, \`publication\` date NOT NULL, \`pages\` int NOT NULL, \`price\` decimal(6,2) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, \`categoryCodigoCategoria\` int NOT NULL, \`editorCodigoEditora\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createAt\` \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`boolivros\` ADD CONSTRAINT \`FK_a01a52af25154bef3923dcbdd67\` FOREIGN KEY (\`categoryCodigoCategoria\`) REFERENCES \`categoria\`(\`codigo_categoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`boolivros\` ADD CONSTRAINT \`FK_8aa42406a3da3eb220ff5423e26\` FOREIGN KEY (\`editorCodigoEditora\`) REFERENCES \`editoras\`(\`codigo_editora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`boolivros\` DROP FOREIGN KEY \`FK_8aa42406a3da3eb220ff5423e26\``);
        await queryRunner.query(`ALTER TABLE \`boolivros\` DROP FOREIGN KEY \`FK_a01a52af25154bef3923dcbdd67\``);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`autores\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createAt\` \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`editoras\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`DROP TABLE \`boolivros\``);
    }
}
