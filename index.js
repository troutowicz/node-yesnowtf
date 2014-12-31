'use strict';

var http = require('q-io/http'),
    q = require('q'),
    apiEndpoint = 'http://yesno.wtf/api';

function decide(decision, cb) {
  var deferred = q.defer(),
      url = apiEndpoint + (decision ? '?force=' + decision : '');

  http.read(url).then(
    function (data) {
      try {
        var result = JSON.parse(data);
        deferred.resolve(result);
      } catch (e) {
        deferred.reject(new Error('JSON parse failed'));
      }
    },
    function (err) {
      deferred.reject(err);
    }
  );

  return deferred.promise.nodeify(cb);
}

module.exports.decide = decide;