var Game = require('./game.js');
var InputManager = require('./input_manager.js'); 

window.addEventListener('DOMContentLoaded', function() {
  new Game(4, InputManager);
})
