import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovieTable1682712411059 implements MigrationInterface {
    name = 'CreateMovieTable1682712411059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
