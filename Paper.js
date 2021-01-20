class Paper {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body= Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        this.image = loadImage("paper.png")
       

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //fill("white")
        //noStroke();
        image(this.image,pos.x,pos.y,this.width,this.height);

    }
}