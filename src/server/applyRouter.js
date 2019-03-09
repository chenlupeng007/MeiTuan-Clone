import geometry from './api/geo'
import search from './api/search'
import category from './api/category'

export default (app) => {
  app.use(geometry.routes()).use(geometry.allowedMethods());
  app.use(search.routes()).use(search.allowedMethods());
  app.use(category.routes()).use(category.allowedMethods());
}