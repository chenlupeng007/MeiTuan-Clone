import geometry from './api/geo'
import search from './api/search'

export default (app) => {
  app.use(geometry.routes()).use(geometry.allowedMethods());
  app.use(search.routes()).use(search.allowedMethods());
}