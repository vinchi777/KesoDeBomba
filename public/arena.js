function Arena(){
var nrows = 12;
var ncols = 12;
this.index = new Array(nrows);

	
	 this.initialize = function(){
		 for(i=1; i< nrows; i+=2){
			this.index[i] = new Array(ncols);
		    for(j=1; j < ncols; j+=2){
		       this.index[i][j] = "block";
			var ypos = 50 * j;
 			var xpos = 50 * i;
                       $('#arena').append("<div class='block' style='left:"+ypos+"; top:"+xpos+"; '> </div> ");
		 }
		}   
	 }
}
