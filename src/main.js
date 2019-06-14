const game = new Game();
const player = new Player(0, 0, "down", [], "red");
const player_enemy = new Player(900, 900, "down", [], "blue");

let img_down = "../assets/character-down.png";
let img_up = "../assets/character-up.png";
let img_left = "../assets/character-left.png";
let img_right = "../assets/character-right.png";

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  img_down = loadImage(img_down); // Load the image
  img_up = loadImage(img_up); // Load the image
  img_left = loadImage(img_left); // Load the image
  img_right = loadImage(img_right); // Load the image
}

function draw() {
  game.drawGrid();
  player.draw();
  player_enemy.draw();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  } else if (keyCode === UP_ARROW) {
    player.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  } else if (keyCode === 87) {
    player_enemy.moveUp();
  } else if (keyCode === 83) {
    player_enemy.moveDown();
  } else if (keyCode === 65) {
    player_enemy.moveLeft();
  } else if (keyCode === 68) {
    player_enemy.moveRight();
  }
}
