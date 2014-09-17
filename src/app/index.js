/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({
  _submit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <form onSubmit={ this._submit }>
        <input type="text" id="username" name="username" />
        <input type="submit" value="search" />
      </form>
    );
  }
});
