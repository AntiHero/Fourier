let time = 0;
const wave = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  translate(200, 200);

  let [x, y] = [0, 0];

  for (let i = 0; i < 2; i++) {
    let prevX = x;
    let prevY = y;
    let n = i * 2 + 1;
    let radius = (50 * 4) / (n * PI);
    x -= radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255);
    noFill();
    ellipse(prevX, prevY, radius * 2);

    fill(255);
    line(prevX, prevY, x, y);
    ellipse(x, y, 6);
  }

  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();

  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }

  endShape();

  time += 0.05;
}
