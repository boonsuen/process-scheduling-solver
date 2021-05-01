module.exports = {
  future: {
    webpack5: true,
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
};