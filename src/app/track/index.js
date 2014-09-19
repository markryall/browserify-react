/** @jsx React.DOM */
"use strict";

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data,
     time = this.props.time;

    return <tr>
      <td>{ moment(time).fromNow() }</td>
      <td><img src={ data.image[0]["#text"] } /></td>
      <td>{ data.name }</td>
      <td>{ data.artist["#text"] }</td>
      <td>{ data.album["#text"] }</td>
    </tr>
  }
});
