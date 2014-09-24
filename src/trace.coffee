emitter = require './emitter'

traceEvent = (name) ->
  emitter.on name, (data)->
    console.log 'TRACE', name, data

traceEvent 'retrieveTracks'
traceEvent 'retrieveTracksStart'
traceEvent 'retrieveTracksSuccess'
traceEvent 'retrieveTracksFailure'
