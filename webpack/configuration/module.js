import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const isDevelopment = process.env.NODE_ENV !== 'production';

const loader = type => {
  if (type == 'server') return 'isomorphic-style-loader';
  else if(isDevelopment) return 'style-loader';
  else return MiniCssExtractPlugin.loader
}

export default type => ({
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: loader(type)
        },
        {
          loader: 'css-loader',
          options: {
            modules: 'global',
            sourceMap: isDevelopment
          }
        },
      ]
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: loader(type)
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: isDevelopment
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
  ]
});