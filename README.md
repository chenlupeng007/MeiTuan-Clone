## MeiTuan Clone
This is a tiny React server side rendering project that clones [meituan website](https://www.meituan.com/), which contains just a few pages. To see demos, click [here](https://github.com/chenlupeng007/MeiTuan-Clone#demos).

### Task List
- [x] Home Page
- [x] ChangeCity Page
- [x] Product Page
- [x] Detail Page

### Demos
- Home Page
  <p align="left">
    <img  src="https://media.giphy.com/media/60ryUgQqujYQBSOkDf/giphy.gif">
  </p>
- ChangeCity Page
  <p align="left">
    <img  src="https://media.giphy.com/media/g0sEEhpPHjP0qj3mkZ/giphy.gif">
  </p>
- Product & Detail Page
  <p align="left">
    <img  src="https://media.giphy.com/media/8YplML8ao1X9NaBkKU/giphy.gif">
  </p>

### Dependencies
- Webpack 4.x
- Babel 7.x
- React 16.x
- React-router-dom 4.x/React-router-config
- Redux 4.x/Redux-thunk
- Ant Design 3.x
- React Hot Loader 4.x
- Koa-webpack 5.x
- Koa 2.x

### Features
- written using ES6, both client and server side.
- SCSS and CSS in modules
- Ant Design(you had to import css files on your own)
- HMR(client&server)

### Requirement
- System: Unix Like
- Node 10+
- Yarn 1.3

### Begin
```
$ git clone https://github.com/chenlupeng007/MeiTuan-Clone.git
$ cd MeiTuan-Clone
$ yarn
$ yarn start-prod
```

### After Installation
yout had better change the line

```javascript
const hotClient = await getClient(compiler, options);
```

in `koa-webpack/lib/index.js` to

```javascript
const hotClient = await getClient(compiler.compilers.find(compiler => compiler.name === 'client'), options);
```
