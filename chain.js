class chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:20,
            stiffness:1.0,
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(5);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}