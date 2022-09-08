import { Model, Column } from '@athenna/database'

export class Exchange extends Model {
  /**
   * The attributes that could be persisted in database.
   *
   *  @return {string[]}
   */
  static get persistOnly() {
    return ['id', 'price', 'from_currency_id', 'to_currency_id', 'spread']
  }

  /**
   * Set the table name of this model instance.
   *
   * @return {string}
   */
  static get table() {
    return 'exchanges'
  }

  /**
   * The default schema for model instances.
   *
   * @return {any}
   */
  static schema() {
    return {
      id: Column.autoIncrementedInt(),
      price: Column.type('decimal').get(),
      from_currency_id: Column.type('int').get(),
      to_currency_id: Column.type('int').get(),
      spread: Column.type('tinyint').get(),
      created_at: Column.createdAt(),
      updated_at: Column.updatedAt(),
      deleted_at: Column.deletedAt(),
    }
  }

  /**
   * The definition method used by factories.
   *
   * @return {any}
   */
  static async definition() {
    return {
      price: this.faker.finance.amount(),
      from_currency_id: this.faker.random.numeric(),
      to_currency_id: this.faker.random.numeric(),
      spread: this.faker.random.numeric(),
      created_at: this.faker.date.recent(),
      updated_at: this.faker.date.recent(),
      deleted_at: null,
    }
  }
}
