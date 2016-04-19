function Game(size, InputManager) {
  this.size = size; // Defaults to 4x4
  this.inputManager = new InputManager;

  this.setup();
}

Game.prototype.setup = function() {
  // find all tiles that are unoccupied
  // pick random empty space
  // give it a 2 or 4

  var $openTiles = $(".open");
  var numUnoccupiedTiles = $openTiles.length;

  var $randomTile = $openTiles[Math.floor(Math.random() * numUnoccupiedTiles)];

  $randomTile.textContent = 2;
  $randomTile.className = "grid-cell two-tile"
};

module.exports = Game;
