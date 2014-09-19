/** @jsx React.DOM */
"use strict";

var React = require('react');
var Track = require('../track');
var _     = require('lodash');

module.exports = React.createClass({
  render: function() {
    var tracks = this.props.data;

    function buildTrack(data) {
      return <Track data={ data } />
    }

    return <div>
      <span>{tracks.length} tracks</span>
      { _.map(tracks, buildTrack) }
    </div>
  }
});
