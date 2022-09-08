import { Table } from 'typeorm'

export class ExchangeMigration1662176756127 {
  /**
   * Return the table name.
   *
   * @return {string}
   */
  get tableName() {
    return 'exchanges'
  }

  /**
   * Run migration.
   *
   * @param queryRunner {import('typeorm').QueryRunner}
   * @return {Promise<void>}
   */
  async up(queryRunner) {
    console.log('Creating table exchanges');
    const table = new Table({ name: this.tableName })

    table.addColumn({
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    })

    table.addColumn({
      name: 'price',
      type: 'decimal',
      precision: 22,
      scale: 8,
      default: 0.0,
    })

    table.addColumn({
      name: 'from_currency_id',
      type: 'int',
    })

    table.addColumn({
      name: 'to_currency_id',
      type: 'int',
    })

    table.addColumn({
      name: 'spread',
      type: 'tinyint',
      default: 1,
    })

    table.addColumn({
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    })

    table.addColumn({
      name: 'updated_at',
      type: 'timestamp',
      default: 'now()',
    })

    table.addColumn({
      name: 'deleted_at',
      type: 'timestamp',
      default: null,
      isNullable: true,
    })

    await queryRunner.createTable(table)
  }

  /**
   * Rollback migration.
   *
   * @param queryRunner {import('typeorm').QueryRunner}
   * @return {Promise<void>}
   */
  async down(queryRunner) {
    await queryRunner.dropTable(this.tableName)
  }
}
