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

  describe('when state owner is stored', function() {
    var state;

    beforeEach(function () {
      state = {};
      stateManager.remember({
        setState: function(newState) { state = newState; }
      });
    });

    it('should set name when nameChanged', function() {
      stateManager.nameChanged({
        target: { value: 'new name' }
      });
      expect(state.name).toEqual('new name');
    });

    it('should set name when nameChanged', function() {
      stateManager.nameChanged({
        target: { value: 'new name' }
      });
      expect(state.name).toEqual('new name');
    });
  });
});
