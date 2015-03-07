var store = require('./store'),
    utils = require('./utils'),
    path = require('path');

module.exports = function() {
  var directory = path.join(process.argv[2], '*/');
  console.log('Finding folders that match '+directory);

  return utils.glob(directory).then(function(dirpaths) {
    var names = dirpaths.map(utils.nameFor);
    return store.findBy({ name: { $nin: names }});
  });
};