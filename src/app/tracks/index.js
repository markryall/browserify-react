/** @jsx React.DOM */
"use strict";

var React   = require('react');

module.exports = React.createClass({
  render: function() {
    var tracks = this.props.data;
    return <div>{tracks.length} tracks</div>
  }
});
