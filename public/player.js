function Player(pno){
	
       // this.name=pname;
       //this.roomno=proom;
	this.playerno=pno;
	
this.initposition = function(){
 $("#arena").append("<div id="+this.playerno+">aw</div>");
}
this.move = function(direction){
    if(direction == 40)
         $("#"+this.playerno).animate({"bottom": "-=50px"}, "fast");
    else if(direction == 38)
         $("#"+this.playerno).animate({"bottom": "+=50px"}, "fast");
    else if(direction == 37)
         $("#"+this.playerno).animate({"left": "-=50px"}, "fast");
    else if(direction == 39)
         $("#"+this.playerno).animate({"left": "+=50px"}, "fast");
 
}

}
