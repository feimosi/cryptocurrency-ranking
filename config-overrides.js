const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewirePostCss = require('react-app-rewire-postcss');
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
} = require('react-app-rewire-typescript-babel-preset');

module.exports = {
  webpack(config, env) {
    config = rewireReactHotLoader(config, env);
    config = rewireTypescript(config);
    config = rewirePostCss(config, {
      plugins: loader => [
        require('postcss-each')(),
        require('postcss-css-variables')(),
        require('postcss-preset-env')({ stage: 3 }),
        require('postcss-mixins')(),
        require('postcss-nested')(),
        require('postcss-conditionals')(),
        // NOTE: Although postcss-preset-env supports color-mod, it doesn't handle custom properties
        // so we include it manually at the end
        require('postcss-color-mod-function')(),
     ]
   });

    return config;
  },
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
