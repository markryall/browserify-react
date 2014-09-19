/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    console.log(data);
    return <tr>
      <td><img src={ data.image[0]["#text"] } /></td>
      <td>{ data.name }</td>
      <td>{ data.artist["#text"] }</td>
      <td>{ data.album["#text"] }</td>
    </tr>
  }
});
