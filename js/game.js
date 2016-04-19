function Game(size, InputManager) {
  this.size = size; // Defaults to 4x4
  this.inputManager = new InputManager;

  this.setup();
}

Game.prototype.setup = function() {

};

module.exports = Game;
