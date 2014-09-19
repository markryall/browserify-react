/** @jsx React.DOM */
"use strict";

var React   = require('react');
var actions = require('./actions');
var Tracks  = require('./tracks');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      error: null,
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

  failure: function(data) {
    this.setState({
      error: data
    });
  },

  render: function() {
    var component = false;

    if (this.state.tracks.length > 0) {
      component = <Tracks data={ this.state.tracks } />
    }

    if (this.state.error) {
      component = <span>{ this.state.error }</span>
    }

    return (
      <div>
        <form onSubmit={ this._submitted }>
          <input type="text" id="username" name="username" onChange={ this._nameChanged } />
          <input type="submit" value="search" />
        </form>
        { component }
      </div>
    );
  }
});
