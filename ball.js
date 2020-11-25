class ball
{
	constructor(x,y,r){
        var options={
            isStatic: false,
            friction:0.4,
            density:5,
		    restitution:1,
		   
        }
        this.x = x;
        this.y = y;
		this.r = r;
        
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle);
        fill ("red");
        ellipseMode(CENTER);
        ellipse(0,0,35,35);
        pop ()
    }
}
