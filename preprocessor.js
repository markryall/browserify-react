var ReactTools = require('react-tools');
var coffee = require('coffee-script');

module.exports = {
  process: function(src) {
    if (path.match(/\.coffee$/)) {
      return coffee.compile(src, {'bare': true});
    }
    return ReactTools.transform(src);
  }
};
