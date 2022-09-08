import { Exchange } from '#app/Models/Exchange'

export class ExchangeRepository {
  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor() {}

  /**
   * Index method
   *
   */
  async index() {
    return Exchange.findMany()
  }

  /**
   * Store method
   *
   */
  async store(data) {
    return Exchange.createOrUpdate(
      { code: data.code, symbol: data.symbol },
      data,
    )
  }

  /**
   * Show method
   *
   */
  async show(id) {
    return Exchange.findOrFail({ id })
  }

  /**
   * Update method
   *
   */
  async update(id, data) {
    return Exchange.update({ id }, data)
  }

  /**
   * Delete method
   *
   */
  async delete(id, force = false) {
    return Exchange.delete({ id }, force)
  }
}
