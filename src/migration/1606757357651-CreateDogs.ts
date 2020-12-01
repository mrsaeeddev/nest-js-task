import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDogs1606757357651 implements MigrationInterface {
    name = 'CreateDogs1606757357651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job" ("id" SERIAL NOT NULL, "title" character varying(50), "companyName" character varying(50) NOT NULL, "description" character varying(300) NOT NULL, "status" integer NOT NULL, "locationCoords" integer NOT NULL, CONSTRAINT "UQ_6aeb001768830964e9d0dd9ebdb" UNIQUE ("companyName"), CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(50), "password" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "job"`);
    }

}
