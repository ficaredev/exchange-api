import { Route } from '@athenna/http'

/*
|--------------------------------------------------------------------------
| Http Routes
|--------------------------------------------------------------------------
|
| Here is where you can register http routes for your application. These
| routes are loaded by the HttpRouteProvider.
|
*/

Route.group(() => {
  Route.get('/', ({ response }) => {
    const data = {
      name: Config.get('app.name'),
      domain: Config.get('http.domain'),
      version: Config.get('app.version'),
      description: Config.get('app.description'),
      source: Config.get('app.source'),
    }

    return response.status(200).send(data)
  })

  Route.group(() => {
    Route.resource('exchanges', 'ExchangeController')
  }).prefix('/api/v1')
})
