import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin'

const isDevelopment = process.env.NODE_ENV !== 'production';

const isAnalyzer = process.env.ANALYZER === 'true';

const plugins = [];

if (!isDevelopment) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.jsx|\.html$/,
      minRatio: 0.8
    })
  );
} else if (isAnalyzer) {
  plugins.push(
    new BundleAnalyzerPlugin()
  );
}

export default plugins
