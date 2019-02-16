import Koa from 'koa'
import applyDevMids from './applyDevMids'
import applyProdMids from './applyProdMids'

const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa()

if (isProduction) {
  applyProdMids(app)
} else {
  applyDevMids(app)
}

app.listen(3000, () => console.log('listen on port: 3000')
)