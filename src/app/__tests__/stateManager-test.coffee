jest.autoMockOff()

stateManager  = require '../stateManager'

describe 'stateManager', ()->
  it 'should set initial state', ()->
    expect(stateManager.getInitialState()).toEqual
      name: '',
      waiting: false,
      error: null,
      tracks: null

  describe 'when state owner is stored', ()->
    state = null

    beforeEach () ->
      state = {}
      stateManager.remember
        setState: (newState) -> state = newState

    it 'should set name when nameChanged', ()->
      stateManager.nameChanged
        target: value: 'new name'
      expect(state.name).toEqual 'new name'

    it 'should set name when nameChanged', ()->
      stateManager.nameChanged
        target: value: 'new name'
      expect(state.name).toEqual 'new name'
