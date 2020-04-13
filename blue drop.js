class Drop2 {
    constructor(){
        this.x = random(3,400);
        this.y = random(0,400);
    }

    update(){
        this.y = this.y+5

        if(this.y>400){
            this.y= random(0,100);
            this.x = random(3,400)
        }
    }

    show(){
        push();
        strokeWeight(1);
        stroke("cyan");
        line(this.x,this.y,this.x,this.y+15);
        pop();
    }
}