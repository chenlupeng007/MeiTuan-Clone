import Router from 'koa-router'
import {serverInstance as axios} from '@common/utils'

let router = new Router({prefix: '/geo'})

router.get('/getPosition', async (ctx) => {
  const { status, data: {
    province, city
  } } = await axios.get('/geo/getPosition')

  if (status != 200) ctx.body = { province: '', city: '' }
  else {
    ctx.body = {
      province,
      city
    }
  }
})

router.get('/province', async (ctx) => {
  let { status, data: {
    province
  } } = await axios.get('/geo/province')

  ctx.body = {
    province: status === 200
      ? province
      : []
  }
})

router.get('/province/:id', async (ctx) => {
  let { status, data: {
    city
  } } = await axios.get(`/geo/province/${ctx.params.id}`)

  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

router.get('/city', async (ctx) => {
  let { status, data: {
    city
  } } = await axios.get('/geo/city');

  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

router.get('/hotCity', async (ctx) => {
  let { status, data: {
    hots
  } } = await axios.get('/geo/hotCity');

  if (status === 200) {
    ctx.body = {
      hots
    }
  } else {
    ctx.body = {
      hots: []
    }
  }
})

router.get('/menu', async (ctx) => {
  let { status, data: {
    menu
  } } = await axios.get('/geo/menu');

  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

export default router;