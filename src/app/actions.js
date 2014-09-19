"use strict";

var lastfm = require('../lastfm');

module.exports = {
  retrieveTracks: function(username, handler) {
    handler.started();
    lastfm.recentTracks(username, handler.success, handler.failure);
  }
}
