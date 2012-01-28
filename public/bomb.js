function Bomb(){
	
	this.init = function(x,y){
		var row;
		var col;
		row = x * 45;
		col = y * 45;
  		$('#arena').append("<div id='E"+x+y+"' class='bomb' style='left:"+col+"px; top:"+row+"px;'> </div> ");
	//	this.findcollision(x,y);
		var t = setTimeout("explode("+x+","+y+")",1300);  		 		
	}
/*	this.findcollision = function(x,y){
 	    for(i=0; x<=0 ;)	
		if(playground.index[x][y] == "empty")	
		var t = setTimeout("explode("+x+","+y+")",1300);  		 		
	}
*/	
}
function explode(x,y){
	$("#E"+x+y+"").sprite({fps:15 , no_of_frames:26, play_frames:26});
	// $("#B"+x+y+"").remove();
	//canplantbomb variable in client.js
	canplantbomb = 1;
}

