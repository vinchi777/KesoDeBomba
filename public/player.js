function Player(pno){
/*
onrow = in what row the player is located
oncolumn = in what column the player is located
*/	
  this.playerno=pno;
  this.onrow;
  this.oncolumn;
// sets position of player	
this.initposition = function(){
 $("#arena").append("<div id="+this.playerno+">"+this.playerno+"</div>");
	 if(this.playerno == "pone")
	 {
 		this.onrow = 12;
                this.oncolumn = 0; 
                $('#pone')
			  .sprite({fps: 7, no_of_frames: 3})
			  .active();

	 }
	 else if(this.playerno == "ptwo")
	 {
		 this.onrow = 12;
		 this.oncolumn =12;
		$('#ptwo')
			  .sprite({fps: 7, no_of_frames: 3})
			  .active();
	 }
}
//to move or animate a player to a specific direction 40 for down 38 for up 37 for left 39 for right. if im not mistaken.
this.move = function(direction){
    if(direction == 40)
    {
		   $("#"+this.playerno).animate({"bottom": "-=50px"}, "fast");
		   this.onrow+=1;
    }
    else if(direction == 38)
    {
		    $("#"+this.playerno).animate({"bottom": "+=50px"}, "fast");
		    this.onrow-=1;
    }   
    else if(direction == 37)
    {
		    $("#"+this.playerno).animate({"left": "-=50px"}, "fast");
		    this.oncolumn-=1;
    }
    else if(direction == 39)
    {
		    $("#"+this.playerno).animate({"left": "+=50px"}, "fast");
		    this.oncolumn+=1;
    } 
}
//checks if a player can move. cant move if colides in a block or in the border.
this.canmove = function(direction){
   if(direction == 40)
    {
           if(this.onrow >= 12 || playground.index[this.onrow+1][this.oncolumn] == "block" )
                return 0;
	   else
  		return 1;
    }
    else if(direction == 38)
    {
	    if( this.onrow <= 0 || playground.index[this.onrow-1][this.oncolumn] == "block"  )
	        return 0;
	    else
 		return 1;
    }   
    else if(direction == 37 )
    {
	    if( this.oncolumn <= 0 || playground.index[this.onrow][this.oncolumn-1] == "block" )
	        return 0;
	    else 
 		return 1;
    }
    else if(direction == 39)
    {
	    if( this.oncolumn >= 12 ||  playground.index[this.onrow][this.oncolumn+1] == "block")
	        return 0;
	    else
		return 1;
    }   
}
//plant the bomb
this.plantbomb = function(x,y){
  var row;
  var col;
 row = x * 50;
 col = y * 50;
  $('#arena').append("<div id='B"+x+y+"' class='bomb' style='left:"+col+"px; top:"+row+"px;'>" +x+y+" </div> ");
 var t = setTimeout("explode("+x+","+y+")",2000);
	
} 

 
}
// end of Player class

//function outside Player class
function explode(x,y){
 $("#B"+x+y+"").remove();
//canplantbomb variable in client.js
canplantbomb = 1;
}

 
