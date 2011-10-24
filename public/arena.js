function Arena(){
var nrows = 13;
var ncols = 13;
this.index = new Array(nrows);
 for(i=0; i<nrows; i++){
   this.index[i] = new Array(ncols);
  for(j=0; j<ncols; j++)
   this.index[i][j] = "empty";
 }
	
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
