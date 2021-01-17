class Stone{
    constructor(x, y, radius){
        var options = {
            density : 1.2,
            restitution :0,
            friction : 1
        }
        this.stone_img = loadImage ("plucking mangoes/stone.png")
        this.body = Bodies.circle (x,y,radius,options)
        World.add(world, this.body);
    }

    display(){

        
            var pointA = this.body.position;
            imageMode (CENTER)

            image (this.stone_img,pointA.x,pointA.y,20,20);
       } 
    
    
    
}