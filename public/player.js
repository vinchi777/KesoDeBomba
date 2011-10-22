function Player(pno){
	
       // this.name=pname;
       //this.roomno=proom;
  this.playerno=pno;
  this.onrow = 12;
  this.oncolumn = 0;
	
this.initposition = function(){
 $("#arena").append("<div id="+this.playerno+">aw</div>");
}
this.move = function(direction){
    if(direction == 40)
    {
           if(this.onrow < 12)
	   {	  
		   $("#"+this.playerno).animate({"bottom": "-=50px"}, "fast");
		   this.onrow+=1;
	   }
    }
    else if(direction == 38)
    {
	    
	    if(this.onrow >0)
	    {
		    $("#"+this.playerno).animate({"bottom": "+=50px"}, "fast");
		    this.onrow-=1;
	    }
    }   
    else if(direction == 37)
    {
	    
	    if(this.oncolumn > 0)
	    {
		    $("#"+this.playerno).animate({"left": "-=50px"}, "fast");
		    this.oncolumn-=1;
	    }
    }
    else if(direction == 39)
    {
	    if(this.oncolumn <12)
	    {    
		    $("#"+this.playerno).animate({"left": "+=50px"}, "fast");
		    this.oncolumn+=1;
	    }
    } 
}

this.canmove = function(){

}


}
