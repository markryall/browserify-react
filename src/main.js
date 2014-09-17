/** @jsx React.DOM */
"use strict";

var React = require('react');
var app = require('./app');

global.React = React;

React.renderComponent(
  <app />,
  document.body
)
