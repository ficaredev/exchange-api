import { Test } from '@athenna/test'

export class WelcomeTest extends Test {
  /**
   * Run your test.
   *
   * @param {import('@athenna/test').HttpTestContext} ctx
   */
  async shouldReturnWelcomePayloadFromApi({ request }) {
    const response = await request.get('/')

    response.assertStatusCode(200)
  }
}
