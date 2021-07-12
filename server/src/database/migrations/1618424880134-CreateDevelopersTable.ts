import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDevelopersTable1618424880134 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(new Table({
      name: 'developers',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'gender',
          type: 'char',
          length: '1',
        },
        {
          name: 'age',
          type: 'integer'
        },
        {
          name: 'hobby',
          type: 'varchar',
        },
        {
          name: 'birthday',
          type: 'date'
        },
        {
          name: 'created_at',
          type: 'timestamptz',
          isNullable: true,
        },
        {
          name: 'updated_at',
          type: 'timestamptz',
          isNullable: true,
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('developers');
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
