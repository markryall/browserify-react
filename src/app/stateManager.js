"use strict";

var actions = require('./actions');

var nullComponent = { setState: function () {} },
 hasState = nullComponent,
 stateManager;

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
    actions.retrieveTracks(hasState.state.name, stateManager);
  },

  started: function() {
    hasState.setState({
      waiting: true,
      error: null,
      tracks: null
    });
  },

  success: function(data) {
    hasState.setState({
      waiting: false,
      tracks: data.recenttracks.track
    });
  },

  failure: function(data) {
    hasState.setState({
      waiting: false,
      error: data
    });
  }
}

module.exports = stateManager
