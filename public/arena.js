//this class is for the whole arena, implemented in a 2x2 multidimensional array.
//index is the coords of the matrix
function Arena(){
var nrows = 13;
var ncols = 13;

//create a 2x2 array
this.index = new Array(nrows);
 for(i=0; i<nrows; i++){
   this.index[i] = new Array(ncols);
  for(j=0; j<ncols; j++)
   this.index[i][j] = "empty";
 }
	// sets all the blocks in the arena
	 this.initialize = function(){
		 for(x=1; x <nrows; x+=2){
		    for(y=1; y < ncols; y+=2){
		       this.index[x][y] = "block";
			var ypos = 50 * y;
 			var xpos = 50 * x;
                       $('#arena').append("<div class='block' style='left:"+ypos+"px; top:"+xpos+"px; '> </div> ");
		 }
		}   
	 }
}
