/** @jsx React.DOM */
"use strict";

var React   = require('react');
var actions = require('./actions');
var Tracks  = require('./tracks');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      waiting: false,
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

  started: function() {
    this.setState({
      waiting: true
    });
  },

  success: function(data) {
    this.setState({
      waiting: false,
      tracks: data.recenttracks.track
    });
  },

  failure: function(data) {
    this.setState({
      waiting: false,
      error: data
    });
  },

  render: function() {
    var component = false,
      button;

    if (this.state.tracks.length > 0) {
      component = <Tracks data={ this.state.tracks } />
    }

    if (this.state.error) {
      component = <span>{ this.state.error }</span>
    }

    if (this.state.waiting) {
      button = <img id="loader" src="loader.gif" />
    } else {
      button = <input type="submit" value="search" />
    }

    return (
      <div>
        <form onSubmit={ this._submitted }>
          <input type="text" id="username" name="username" onChange={ this._nameChanged } />
          { button }
        </form>
        { component }
      </div>
    );
  }
});
