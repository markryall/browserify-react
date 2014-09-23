/** @jsx react.DOM */
"use strict";

jest.autoMockOff();

var stateManager  = require('../stateManager');

describe('stateManager', function() {
  it('should set initial state', function() {
    expect(stateManager.getInitialState()).toEqual({
      name: '',
      waiting: false,
      error: null,
      tracks: null
    });
  });

  it('should set name when nameChanged', function() {
    var state = {};
    stateManager.remember({
      setState: function(newState) { state = newState; }
    });
    stateManager.nameChanged({
      target: { value: 'new name' }
    });
    expect(state.name).toEqual('new name');
  });
});
