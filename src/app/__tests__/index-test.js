/** @jsx react.DOM */
"use strict";

jest.autoMockOff();

describe('App', function() {
  it('should render', function() {
    var App = require('../');
    var TestUtils = require('react/addons').addons.TestUtils;
    var findByType = TestUtils.findRenderedComponentWithType;
    var component = TestUtils.renderIntoDocument(<App />);
    expect(component).not.toBeNull();
  });
});
