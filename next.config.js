const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  compiler: {
    styledComponents: true,
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
