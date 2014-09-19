/** @jsx React.DOM */
"use strict";

var React   = require('react');
var actions = require('./actions');
var tracks  = require('./tracks');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      tracks: []
    }
  },

  _submitted: function(e) {
    e.preventDefault();
    actions.retrieveTracks(this.state.name, this);
  },

  _nameChanged: function(e) {
    this.setState({ name: e.target.value });
  },

  success: function(data) {
    this.setState({
      tracks: data.recenttracks.track
    });
  },

  render: function() {
    var tracksComponent = false;

    if (this.state.tracks.length > 0) {
      tracksComponent = <tracks data={ this.state.tracks } />
    }

    return (
      <div>
        <form onSubmit={ this._submitted }>
          <input type="text" id="username" name="username" onChange={ this._nameChanged } />
          <input type="submit" value="search" />
        </form>
        { tracksComponent }
      </div>
    );
  }
});
