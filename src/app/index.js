/** @jsx React.DOM */
"use strict";

var React         = require('react');
var Tracks        = require('./tracks');
var SubmitButton  = require('./submitButton/index.coffee');
var stateManager  = require('./stateManager');

module.exports = React.createClass({
  getInitialState: function() {
    return stateManager.getInitialState();
  },

  componentDidMount: function() {
    stateManager.remember(this);
  },

  componentWillUnmount: function() {
    stateManager.forget();
  },

  render: function() {
    return (
      <div>
        <form onSubmit={ stateManager.submitted }>
          <input type="text" id="username" name="username" onChange={ stateManager.nameChanged } />
          <SubmitButton waiting={ this.state.waiting } />
        </form>
        <span>{ this.state.error }</span>
        <Tracks data={ this.state.tracks } />
      </div>
    );
  }
});
