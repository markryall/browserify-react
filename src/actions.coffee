lastfm  = require './lastfm'
emitter = require './emitter'

emitter.on 'retrieveTracks', (username) ->
  emitter.emit 'retrieveTracksStart', username
  lastfm.recentTracks username,
    (data)-> emitter.emit('retrieveTracksSuccess', data),
    (data)-> emitter.emit('retrieveTracksFailure', data)
