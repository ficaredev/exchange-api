export class ExchangeService {
  /** @type {import('#app/Repositories/ExchangeRepository').ExchangeRepository} */
  #exchangeRepository

  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor(exchangeRepository) {
    this.#exchangeRepository = exchangeRepository
  }

  /**
   * Index method
   *
   */
  async index() {
    return this.#exchangeRepository.index()
  }

  /**
   * Store method
   *
   */
  async store(data) {
    return this.#exchangeRepository.store(data)
  }

  /**
   * Show method
   *
   */
  async show(id) {
    return this.#exchangeRepository.show(id)
  }

  /**
   * Update method
   *
   */
  async update(id, data) {
    return this.#exchangeRepository.update(id, data)
  }

  /**
   * Delete method
   *
   */
  async delete(id) {
    return this.#exchangeRepository.delete(id)
  }
}
