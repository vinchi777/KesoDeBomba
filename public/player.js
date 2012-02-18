function Player(pno){
/*
onrow = in what row the player is located
oncolumn = in what column the player is located
*/	
  this.playerno=pno;
  this.onrow;
  this.oncolumn;
  this.item;
// sets position of player	
this.initialize = function(){
 this.item = 0;
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
//to move or animate a player to  specific direction 40 for down 38 for up 37 for left 39 for right. if im not mistaken.
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
	    var cell = playground.index[this.onrow+1][this.oncolumn]; 
           if(this.onrow >= 12 ||  (cell == "block" || cell == "cactus" || cell == "door" || cell == "item") )
                return 0;
	   else if(cell == "hat")
	   {
		   this.item = 1;
		   $("#hat").remove();
		   playground.index[this.onrow+1][this.oncolumn] = "empty";
		   $("#"+pno).spState(2);
		   return 1;
	   }
 	   else if(cell == "saloon" && this.item ==1){
		alert(this.playerno + "  wins!")
		cleanSprite();
		newgame();
	    }
	   else
  		return 1;
    }
    else if(direction == 38)
    {
	    var cell = playground.index[this.onrow-1][this.oncolumn]; 
	    if( this.onrow <= 0 || (cell == "block" || cell == "cactus" || cell == "door" || cell == "item")  )
	        return 0;
	   else if(cell == "hat")
	   {
		   this.item = 1;
		   $("#hat").remove();
		   playground.index[this.onrow-1][this.oncolumn] = "empty";
		   $("#"+pno).spState(2);
		   return 1;
	   }  
	    else if(cell == "saloon" && this.item ==1){
		alert(this.playerno + "  wins!")
			cleanSprite();
			newgame();
	    }
	    else
 		return 1;
    }   
    else if(direction == 37 )
    {
	    var cell = playground.index[this.onrow][this.oncolumn-1]; 
	    if( this.oncolumn <= 0 || (cell == "block" || cell == "cactus" || cell == "door" || cell == "item") )
	        return 0;
	   else if(cell == "hat"){
		   this.item = 1;
		   $("#hat").remove();
		   playground.index[this.onrow][this.oncolumn-1] = "empty";
		   $("#"+pno).spState(2);
		   return 1;
	   }
	   else if(cell == "saloon" && this.item ==1){
		alert(this.playerno + "  wins!")
			cleanSprite();
			newgame();
	   }
	    else 
 		return 1;
    }
    else if(direction == 39)
    {
	    var cell = playground.index[this.onrow][this.oncolumn+1]; 
	    if( this.oncolumn >= 12 ||  (cell == "block" || cell == "cactus" || cell == "door" || cell == "item") )
	        return 0;
	   else if(cell == "hat"){
		   this.item = 1;
		   $("#hat").remove();
		   playground.index[this.onrow][this.oncolumn+1] = "empty";
		   $("#"+pno).spState(2);
		   return 1;
	   }
	    else if(cell == "saloon" && this.item ==1){
		alert(this.playerno + "  wins!")
			cleanSprite();
			newgame();
	    }
	    else
		return 1;
    }   
}
//plant the bomb
this.plantbomb = function(x,y){
 
 bomb = new Bomb(pno);
 bomb.init(x,y);
	
} 

}
// end of Player class
function cleanSprite()
{
 $("#pone").remove();
 $("#ptwo").remove();
}
//function outside Player class


 
