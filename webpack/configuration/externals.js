import nodeExternals from 'webpack-node-externals';

export default () => [
  nodeExternals({ whitelist: [/\.css$/]})
];