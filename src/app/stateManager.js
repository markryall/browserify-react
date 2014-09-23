"use strict";

var emitter = require('../emitter');

var nullComponent = { setState: function () {} },
 hasState = nullComponent,
 stateManager;

emitter.on('retrieveTracksStart', function() {
  hasState.setState({
    waiting: true,
    error: null,
    tracks: null
  });
});

emitter.on('retrieveTracksSuccess', function(data) {
  hasState.setState({
    waiting: false,
    tracks: data.recenttracks.track
  });
});

emitter.on('retrieveTracksFailure', function(data) {
  hasState.setState({
    waiting: false,
    error: data
  });
});

stateManager = {
  getInitialState: function () {
    return {
      name: '',
      waiting: false,
      error: null,
      tracks: null
    }
  },

  remember: function(component) {
    hasState = component;
  },

  forget: function() {
    hasState = nullComponent;
  },

  nameChanged: function(e) {
    hasState.setState({ name: e.target.value });
  },

  submitted: function(e) {
    e.preventDefault();
    emitter.emit('retrieveTracks', hasState.state.name);
  }
}

module.exports = stateManager
