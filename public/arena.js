//this script is for the whole arena, implemented in a 2x2 multidimensional array.
//index is the coords of the matrix

var map1 = "ceccecescecce"+
	   "cbcbcbcbcbcbe"+
	   "eeccceeccecec"+
	   "cbebebebebebc"+
	   "cececchccccee"+
	   "ebebcbebebcbc"+
	   "ceceececcecce"+
	   "ebcbcbebebebe"+
	   "ceeccececeeec"+
	   "cbebcbcbcbebc"+
	   "eecceeccceeec"+
	   "ebebcbebcbebe"+
	   "eeeeccccceeee";

var map2 = "eeceeceececee"+
	   "cbebebcbcbcbe"+
	   "eeccececcscec"+
	   "cbebebebebebc"+
	   "ceeeccececcee"+
	   "ebebcbebcbcbc"+
	   "ceccececcecce"+
	   "ebebhbebebebe"+
	   "ccecccceceeec"+
	   "cbebcbcbcbebc"+
	   "eecceeccceeec"+
	   "ebebcbebcbebe"+
	   "eeeeccccceeee";

var map3 = "seceeceececeh"+
	   "cbcbebebcbcbc"+
	   "ceecceeccecec"+
	   "cbebebebebebc"+
	   "cccecceccccee"+
	   "ebebcbebebcbc"+
	   "ceceececcecce"+
	   "ebebcbebebebe"+
	   "ceeccececeeec"+
	   "cbcbcbcbecbec"+
	   "cecceecccecec"+
	   "ebcbcbebcbebe"+
	   "eeeeccccceeee";

var map4 = "eeceeceececee"+
	   "cbebebebcbcbe"+
	   "eeccceeccechc"+
	   "cbcbebebebcbc"+
	   "cececcecccccc"+
	   "ebebcbcbcbcbc"+
	   "ceceececcecce"+
	   "ebcbcbcbcbcbe"+
	   "ceecccceeccec"+
	   "cbebcbcbcbebc"+
	   "eecceeccceeec"+
	   "ebebsbebcbebe"+
	   "eeeccccccceee";

var map5 = "eececcsccecee"+
	   "cbebebebcbcbe"+
	   "eecceeeccecec"+
	   "cbebebebebebc"+
	   "ceeecceccccee"+
	   "ebcbebcbcbcbc"+
	   "ceceececcecce"+
	   "ebebcbebebebe"+
	   "ceeccececeeec"+
	   "cbebcbcbcbebc"+
	   "eecceeccceeec"+
	   "ebebcbebcbebe"+
	   "eeeccchccceee";
function Arena(){
var nrows = 13;
var ncols = 13;
var c=0;
var maps = new Array(map1,map2,map3,map4,map5);
//create a 2x2 array
this.index = new Array(nrows);
	 for(i=0; i<nrows; i++){
	   this.index[i] = new Array(ncols);
	  for(j=0; j<ncols; j++)
	   this.index[i][j] = "";
	 }
 
	// sets all the blocks in the arena
	 this.initialize = function(ranno){ 
		 for(x=0; x <nrows && c<169; x++){
		    for(y=0; y < ncols; y++,c++){
			    var ypos = 50 * y;
			    var xpos = 50 * x;
			    if(maps[ranno][c] == 'b'){
				this.index[x][y] = "block";
	       			$('#arena').append("<div class='block' style='left:"+ypos+"px; top:"+xpos+"px; '> </div> ");
			    }
			    else if(maps[ranno][c] == 'c'){
				this.index[x][y] = "cactus";
				$('#arena').append("<div class='cactus' id='C"+x+y+"' style='left:"+ypos+"px; top:"+xpos+"px; '></div> ");
			    }
			    else if(maps[ranno][c] == 'h'){
				this.index[x][y] = "item";
				$('#arena').append("<div class='cactus' id='C"+x+y+"' style='left:"+ypos+"px; top:"+xpos+"px; '></div>")
			    }
			    else if(maps[ranno][c] == 's'){
				this.index[x][y] = "door"; 
				$('#arena').append("<div class='cactus' id='C"+x+y+"' style='left:"+ypos+"px; top:"+xpos+"px; '></div>")
			    }
			    else
				this.index[x][y] = "empty";
		 }
		}   
	 }

	 
}

