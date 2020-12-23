class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("walking_1.png");
        this.r = 50;
        this.umbrella = Bodies.circle(x,y,50,options);
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,300,300);
    }
}