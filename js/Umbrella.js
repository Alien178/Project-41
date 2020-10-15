class Umbrella{
    constructor(){
        var options = {
            'isStatic': true,
            'density': 0.7
        }

        this.body = Bodies.circle(200, 385, 35, options);
        //this.image = loadImage("manSprites/walking_1.png", "manSprites/walking_2.png", "manSprites/walking_3.png", "manSprites/walking_4.png", "manSprites/walking_5.png", "manSprites/walking_6.png", "manSprites/walking_7.png", "manSprites/walking_8.png");
        this.image = loadImage("manSprites/walking_1.png");
        //scale(0.5);
        //this.image.debug = true;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        //imageMode(CENTER);
        scale(0.5);
        image(this.image, 0, 670);
    }
}