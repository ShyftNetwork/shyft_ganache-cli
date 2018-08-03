// make sourcemaps work!
require('source-map-support/register')

var Provider = require("@shyftnetwork/shyft_ganache-core/lib/provider");
var Server = require("@shyftnetwork/shyft_ganache-core/lib/server");

// This interface exists so as not to cause breaking changes.
module.exports = {
  server: function(options) {
    return Server.create(options);
  },
  provider: function(options) {
    return new Provider(options);
  }
};
