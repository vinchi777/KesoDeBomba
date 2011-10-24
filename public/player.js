function Player(pno){
	
       // this.name=pname;
       //this.roomno=proom;
  this.playerno=pno;
  this.onrow;
  this.oncolumn;
	
this.initposition = function(){
 $("#arena").append("<div id="+this.playerno+">"+this.playerno+"</div>");
	 if(this.playerno == "pone")
	 {
 		this.onrow = 12;
                this.oncolumn = 0; 
	 }
	 else if(this.playerno == "ptwo")
	 {
		 this.onrow = 12;
		 this.oncolumn =12;
	 }
}
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

this.canmove = function(direction){
//   var colide = 0;
// playground.index[this.onrow+1][this.oncolumn] == "block" ||   
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


}
