function InputManager() {
  // setup game to have listeners for keypressing arrows
  this.listen();
}

InputManager.prototype.listen = function() {
  // need to map the arrow keys accordingly
  var keys = {
    37: 0, // left
    38: 1, // up
    39: 2, // right
    40: 3  // down
  }

  $(document).keydown(function(e) {
    switch(e.keyCode) {
      case 37:
        alert("You pressed left")
        break;
      case 38:
        alert("You pressed up")
        break;
      case 39:
        alert("You pressed right")
        break;
      case 40:
        alert("You pressed down")
        break;

      default: return;
    }
    e.preventDefault();
  })
}


module.exports = InputManager
