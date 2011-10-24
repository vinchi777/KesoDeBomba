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
		 for(i=1; i <nrows; i+=2){
		    for(j=1; j < ncols; j+=2){
		       this.index[i][j] = "block";
			var ypos = 50 * j;
 			var xpos = 50 * i;
                       $('#arena').append("<div class='block' style='left:"+ypos+"px; top:"+xpos+"px; '> </div> ");
		 }
		}   
	 }
}
