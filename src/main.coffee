React = require 'react'
App = require './app'

require './trace'
require './actions'

global.React = React

React.renderComponent App(), document.body
