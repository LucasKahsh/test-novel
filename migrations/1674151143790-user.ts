import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1674151143790 implements MigrationInterface {
  name = 'user1674151143790';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "User" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "name" character varying NOT NULL, "gender" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "age" integer NOT NULL, "weight" integer NOT NULL, "height" integer NOT NULL, "cpf" character varying NOT NULL, "birthdate" character varying NOT NULL, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "User"`);
  }
}
