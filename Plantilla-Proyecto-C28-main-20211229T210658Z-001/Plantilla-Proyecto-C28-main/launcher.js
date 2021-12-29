class launcher{
  constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
    line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+10);
  }
}