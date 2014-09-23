"use strict";

var lastfm  = require('./lastfm');
var emitter = require('./emitter');

emitter.on('retrieveTracks', function(username) {
  emitter.emit('retrieveTracksStart', username);
  lastfm.recentTracks(username,
    function(data) { emitter.emit('retrieveTracksSuccess', data); },
    function(data) { emitter.emit('retrieveTracksFailure', data); }
  );
});
