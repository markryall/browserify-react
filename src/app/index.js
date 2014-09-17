/** @jsx React.DOM */
"use strict";

var React   = require('react');
var actions = require('./actions');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    }
  },

  _submitted: function(e) {
    e.preventDefault();
    actions.retrieveTracks(this.state.name);
  },

  _nameChanged: function(e) {
    this.setState({ name: e.target.value });
  },

  render: function() {
    return (
      <form onSubmit={ this._submitted }>
        <input type="text" id="username" name="username" onChange={ this._nameChanged } />
        <input type="submit" value="search" />
      </form>
    );
  }
});
