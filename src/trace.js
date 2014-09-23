"use strict";

var emitter = require('./emitter');

function traceEvent(name) {
  emitter.on(name, function(data) {
    console.log('TRACE', name, data);
  });
}

traceEvent('retrieveTracks');
traceEvent('retrieveTracksStart');
traceEvent('retrieveTracksSuccess');
traceEvent('retrieveTracksFailure');
