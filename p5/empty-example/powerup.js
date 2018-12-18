function Powerup(x,y){
    this. x = x;
    this.y = y;
    this.show = function(){
        image(powerImg,this.x,this.y);       
    }
}