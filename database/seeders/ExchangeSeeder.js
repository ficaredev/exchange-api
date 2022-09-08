import { Seeder } from '@athenna/database'
import { Exchange } from '#app/Models/Exchange'

export class ExchangeSeeder extends Seeder {
  /**
   * Run the database seeders.
   *
   * @return {Promise<void>}
   */
  async run() {
    await Exchange.factory().count(3).create()
  }
}
