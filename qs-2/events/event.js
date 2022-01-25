const evets = require('events');
const eventEmitter = new evets.EventEmitter();

//Create an event handler:
const myEventhandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventhandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');