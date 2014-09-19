/** @jsx React.DOM */
"use strict";

var React  = require('react');
var Track  = require('../track');
var lodash = require('lodash');

module.exports = React.createClass({
  render: function() {
    var tracks = this.props.data;

    function buildTrack(data) {
      var time = new Date().getTime();
      if (data.date) {
        time = parseInt(data.date.uts) * 1000;
      }
      return <Track key={ time } data={ data } time={ time } />
    }

    return <div>
      <span>{ tracks.length } tracks</span>
      <table>
        <tbody>
          { lodash.map(tracks, buildTrack) }
        </tbody>
      </table>
    </div>
  }
});
