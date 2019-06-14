class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    //background(220);
    //For (var BEGIN; END; INTERVAL){
    //DO SOMETHING }
    for (let x = 0; x < WIDTH; x += WIDTH / 10) {
      line(x, 0, x, WIDTH);

      for (let y = 0; y < WIDTH; y += WIDTH / 10) {
        line(0, y, WIDTH, y);
      }
    }
  }
}

class Player {
  constructor(col, row, ori, arrOfCoordinates, color) {
    this.col = col;
    this.row = row;
    this.ori = ori;
    this.arrOfCoordinates = arrOfCoordinates;
    this.color = color;
  }

  moveUp() {
    this.col -= 100;
    this.ori = "up";
    this.arrOfCoordinates.push(this.col, this.row);
    clear();
  }

  moveDown() {
    this.col += 100;
    this.ori = "down";
    this.arrOfCoordinates.push(this.col, this.row);
    clear();
  }

  moveLeft() {
    this.row -= 100;
    this.ori = "left";
    this.arrOfCoordinates.push(this.col, this.row);
    clear();
  }

  moveRight() {
    this.row += 100;
    this.ori = "right";
    this.arrOfCoordinates.push(this.col, this.row);
    clear();
  }

  draw() {
    for (let i = 0; i < this.arrOfCoordinates.length; i += 2) {
      rect(this.arrOfCoordinates[i + 1], this.arrOfCoordinates[i], 100, 100);
      fill(this.color);
    }

    if (this.ori === "down") {
      image(img_down, this.row, this.col);
      img_down.resize(100, 100);
    } else if (this.ori === "up") {
      image(img_up, this.row, this.col);
      img_up.resize(100, 100);
    } else if (this.ori === "left") {
      image(img_left, this.row, this.col);
      img_left.resize(100, 100);
    } else if (this.ori === "right") {
      image(img_right, this.row, this.col);
      img_right.resize(100, 100);
    }
  }
}
