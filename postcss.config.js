console.log('READ');
module.exports = {
  plugins: [
    require('postcss-partial-import')({ extension: '.pcss' }),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-color-mod-function'),
    require('postcss-font-smoothing'),
  ],
};
