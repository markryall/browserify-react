superagent = require 'superagent'

lastfmRequest = (method, params, onSuccess, onError)->
  superagent('GET', "http://ws.audioscrobbler.com/2.0/")
    .query(method: method)
    .query('api_key=21f8c75ad38637220b20a03ad61219a4')
    .query('format=json')
    .query(params)
    .end((err, res) ->
      if (err)
        onError 'network error occurred'
      if (res && res.text)
        data = JSON.parse res.text
        if (data.error)
          onError data.message
        else
          onSuccess data
    )

module.exports =
  recentTracks: (user, onSuccess, onError) ->
    lastfmRequest('user.getrecenttracks', {user}, onSuccess, onError);
