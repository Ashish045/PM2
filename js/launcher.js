class launcher{
    constructor(body, Anchor){
        var options = {
            bodyA: body,
            pointB: Anchor,
            stiffness: 0.004,
            length: 10
        }
        this.pointA = body;
        this.pointB = Anchor;
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
    }
     fly(){
         this.launcher.bodyA = null;
     }
    display(){
        if(this.launcher.bodyA){

        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
}