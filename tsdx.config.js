const svgr = require('@svgr/rollup').default;

module.exports = {
  rollup(config) {
    config.plugins.push(svgr());
    return config; 
  },
};