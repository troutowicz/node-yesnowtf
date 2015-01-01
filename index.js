'use strict';

var http = require('q-io/http'),
    apiEndpoint = 'http://yesno.wtf/api';

function decide(decision, cb) {
  var url = apiEndpoint + (decision ? '?force=' + decision : '');

  return http.read(url)
    .then(function (body) {
      try {
        return JSON.parse(body);
      } catch (e) {
        throw new SyntaxError('JSON parse failed');
      }
    }).nodeify(cb);
}

module.exports.decide = decide;