/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var button = <input type="submit" value="search" />;
    if (this.props.waiting) {
      button = <img id="loader" src="loader.gif" />
    }
    return button;
  }
});
