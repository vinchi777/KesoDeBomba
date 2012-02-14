//this class is for the whole arena, implemented in a 2x2 multidimensional array.
//index is the coords of the matrix
function Arena(){
var nrows = 13;
var ncols = 13;
var c=0;
var map1 = "eeceeceececee"+
	   "cbebebebcbcbe"+
	   "eeccheeccecec"+
	   "cbebebebebebc"+
	   "ceeeccecsccee"+
	   "ebebcbebebcbc"+
	   "ceceececcecce"+
	   "ebebcbebebebe"+
	   "ceeccececeeec"+
	   "cbebcbcbcbebc"+
	   "eecceeccceeec"+
	   "ebebcbebcbebe"+
	   "eeeeccccceeee";

//create a 2x2 array
this.index = new Array(nrows);
	 for(i=0; i<nrows; i++){
	   this.index[i] = new Array(ncols);
	  for(j=0; j<ncols; j++)
	   this.index[i][j] = "";
	 }
 
	// sets all the blocks in the arena
	 this.initialize = function(){ 
		 for(x=0; x <nrows && c<169; x++){
		    for(y=0; y < ncols; y++,c++){
			    var ypos = 50 * y;
			    var xpos = 50 * x;
			    if(map1[c] == 'b'){
				this.index[x][y] = "block";
	       			$('#arena').append("<div class='block' style='left:"+ypos+"px; top:"+xpos+"px; '> </div> ");
			    }
			    else if(map1[c] == 'c'){
				this.index[x][y] = "cactus";
				$('#arena').append("<div class='cactus' id='C"+x+y+"' style='left:"+ypos+"px; top:"+xpos+"px; '></div> ");
			    }
			    else if(map1[c] == 'h'){
				this.index[x][y] = "item";
				$('#arena').append("<div class='cactus' id='C"+x+y+"' style='left:"+ypos+"px; top:"+xpos+"px; '></div>")
			    }
			    else if(map1[c] == 's'){
				this.index[x][y] = "door"; 
				$('#arena').append("<div class='cactus' id='C"+x+y+"' style='left:"+ypos+"px; top:"+xpos+"px; '></div>")
			    }
			    else
				this.index[x][y] = "empty";
		 }
		}   
	 }

	 
}

