const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  experimental: {
    styledComponents: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif|svg|webp|jp2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `/_next/static/assets/images/`,
              outputPath: `${isServer ? '../' : ''}static/assets/images/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: `/_next/static/assets/fonts/`,
              outputPath: `${isServer ? '../' : ''}static/assets/fonts/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      }
    );

    return config;
  },
  // assetPrefix: isProd ? 'https://boonsuen.com/process-scheduling-solver' : '',
  env: {
    ASSET_PREFIX: isProd
      ? 'https://boonsuen.com/process-scheduling-solver'
      : '',
    BASE: isProd ? '/process-scheduling-solver' : '',
  },
  basePath: isProd ? '/process-scheduling-solver' : '',
};