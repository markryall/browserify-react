var events = require('events');
var eventEmitter = new events.EventEmitter();
global.eventEmitter = eventEmitter;
module.exports = eventEmitter
