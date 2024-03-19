class Boundary {
  constructor(x, y, w, h) {
    let options = {
      friction: 0.3,
      restitution: 0.6,
      isStatic: true,
//      angle: PI / 4
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke();
    fill(255,0,0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}