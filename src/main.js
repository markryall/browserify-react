/** @jsx React.DOM */
"use strict";

var React = require('react');
var App = require('./app');
require('./trace');
require('./actions');

global.React = React;

React.renderComponent(
  <App />,
  document.body
)
