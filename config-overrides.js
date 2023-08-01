module.exports = function override(config, env) {
  const babelLoader = config.module.rules
    .find(rule => 'oneOf' in rule)
    .oneOf.find(
      rule => rule.loader && rule.loader.includes('babel-loader'),
    );

  if (babelLoader && babelLoader.options) {
    babelLoader.options.plugins.push(['@babel/plugin-proposal-private-property-in-object', { "loose": true }]);
  }

  return config;
};
