jest.autoMockOff()

App = require '../'
TestUtils = require('react/addons').addons.TestUtils

describe 'App', ()->
  it 'should render', ()->
    component = TestUtils.renderIntoDocument App()
    expect(component).not.toBeNull()
