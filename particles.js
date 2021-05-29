class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4,
            density:1.2,
        }  
    this.r = r;
    //creating circular bodies
    this.body = Bodies.circle(x, y, this.r, options);
    //random colors
    this.color = color(random(0,255), random(0,255), random(0,255))   ;
    World.add(world, this.body); 
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        //filling random colors
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
  
  
    
}