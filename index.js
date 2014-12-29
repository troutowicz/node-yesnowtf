(function() {
  'use strict';

  var http = require('http'),
      Q = require('q'),
      API_ENDPOINT = 'http://yesno.wtf/api';

  function decide(decision, cb) {
    var deferred = Q.defer(),
        url = API_ENDPOINT + (decision ? '?force=' + decision : '');

    http.get(url, function (res) {
      res.setEncoding('utf8');

      var data = '';
      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        Q.fcall(function () {
          return JSON.parse(data);
        })
        .then(function (result) {
          deferred.resolve(result);
        }, function (exception) {
          deferred.reject(new Error('JSON parse failed'));
        });
      });
    }).on('error', function(err) {
      deferred.reject(err);
    });

    return deferred.promise.nodeify(cb);
  }

  module.exports = {
    decide: decide
  };
}());