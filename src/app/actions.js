"use strict";

var superagent = require('superagent');

global.superagent = superagent;

module.exports = {
  retrieveTracks: function(username, handler) {
    handler.started();
    var url, agent;
    url = "http://ws.audioscrobbler.com/2.0/";
    superagent('GET', url)
      .query('method=user.getrecenttracks')
      .query('api_key=21f8c75ad38637220b20a03ad61219a4')
      .query('format=json')
      .query({ user: username })
      .end(function(err, res) {
        if (err) {
          handler.failure('network error occurred');
        }
        if (res && res.text) {
          var data = JSON.parse(res.text);
          if (data.error) {
            handler.failure(data.message);
          } else {
            handler.success(data);
          }
        }
      });
  }
}
