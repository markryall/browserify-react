/** @jsx React.DOM */
"use strict";

var React = require('react');
var _     = require('lodash');

module.exports = React.createClass({
  render: function() {
    var tracks = this.props.data;

    function buildTrack(data) {
      return <div>{ data.name }</div>
    }

    return <div>
      <span>{tracks.length} tracks</span>
      { _.map(tracks, buildTrack) }
    </div>
  }
});
