React = require 'react'
R = React.DOM

module.exports = React.createClass
  render: ()->
    if (this.props.waiting)
      R.img id: "loader", src:"loader.gif"
    else
      R.input type: 'submit', value: 'search'
