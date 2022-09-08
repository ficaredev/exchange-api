import { ExchangeResource } from '#app/Resources/ExchangeResource'

export class ExchangeController {
  /** @type {import('#app/Services/ExchangeService').ExchangeService} */
  #exchangeService

  /**
   * Use the constructor to resolve any dependency of the Ioc container.
   */
  constructor(exchangeService) {
    this.#exchangeService = exchangeService
  }

  /**
   * Index method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async index({ response, data }) {
    const exchanges = await this.#exchangeService.index(data)

    return response.status(200).send(ExchangeResource.toArray(exchanges))
  }

  /**
   * Store method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async store({ request, response }) {
    const exchange = await this.#exchangeService.store(request.body)

    return response.status(201).send(ExchangeResource.toJson(exchange))
  }

  /**
   * Show method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async show({ response, params }) {
    const exchange = await this.#exchangeService.show(params.id)

    return response.status(200).send(ExchangeResource.toJson(exchange))
  }

  /**
   * Update method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async update({ request, response, params }) {
    const exchange = await this.#exchangeService.show(params.id, request.body)

    return response.status(200).send(ExchangeResource.toJson(exchange))
  }

  /**
   * Delete method
   *
   * @param {import('@athenna/http').ContextContract} ctx
   */
  async delete({ response, params }) {
    await this.#exchangeService.delete(params.id)

    return response.status(204)
  }
}
