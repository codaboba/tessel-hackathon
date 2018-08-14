// 'use strict';

// // Import the interface to Tessel hardware
// const tessel = require('tessel');

// // Turn one of the LEDs on to start.
// tessel.led[2].on();

// // Blink!
// setInterval(() => {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);

// console.log("I'm blinking! (Press CTRL + C to stop)");

// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

let lastMovement = 0;
let lastTime = Date.now();

// Initialize the accelerometer.
accel.on('ready', function() {
  // Stream accelerometer data
  accel.on('data', function(xyz) {
    if (xyz[0].toFixed(2) !== lastMovement) {
      lastMovement = xyz[0].toFixed(2);
      let timeBetween = Date.now() - lastTime;
      if (timeBetween > 3000) {
        // output sound through speakers
      }

      lastTime = Date.now();
    }
  });
});

accel.on('error', function(err) {
  console.log('Error:', err);
});
