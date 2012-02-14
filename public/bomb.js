function Bomb(playerno){
	this.fromplayer = playerno; 

	this.init = function(x,y){
		var row;
		var col;
		row = x * 50;
		col = y * 50;
//		this.findcollision(x,y);
		$('#arena').append("<div  id='"+playerno+"bomb' style='left:"+col+"px; top:"+row+"px;'> </div> ");
		$("#"+playerno+"bomb").sprite({fps:12 , no_of_frames:16, play_frames:16,start_at_frame:1,
			on_frame:{
				15:function(obj){
				   $("#"+playerno+"bomb").remove(); 
					var dest ="scatter('"+playerno+"',"+x+","+y+")"; 
					var t = setTimeout(dest,1000);
				   }
		
		}
		});

	}
}
function scatter(playerno,x,y){
	var pnumb;
	if(playerno =="pone")
	pnumb = 1;	
	else if(playerno == "ptwo")
	pnumb = 2;

	 if(x>=0 && x <13 && y>=0 && y<13){
            if(x-1 >= 0 && playground.index[x-1][y] != "block" ){
	    var r  = x-1;	//first cell
	    var layer = 0;  
		layer = checkcollision(r,y);	    	  
	var dest ="animate('"+playerno+"',"+r+","+y+")"; 
	var t = setTimeout(dest,1); //seconde cell
	        if(  (x-2 >=0 && layer != 1 ) && playground.index[x-2][y] != "block"    ){ 
		r  = x-2;	
	  	checkcollision(r,y);  	        
	var dest ="animate('"+playerno+"',"+r+","+y+")"; 
	var t = setTimeout(dest,1); 
		}
	    }
	    if(x+1 < 13 && playground.index[x+1][y] !="block" ){
		var r  = x+1;	
		var layer = 0;
	    	   layer = checkcollision(r,y); 
	var dest ="animate('"+playerno+"',"+r+","+y+")"; 
	var t = setTimeout(dest,1); 
		if(  (x+2 <13 && layer != 1 ) && playground.index[x+2][y] != "block" ){
		 r  = x+2;	
	    	    checkcollision(r,y);
	var dest ="animate('"+playerno+"',"+r+","+y+")"; 
	var t = setTimeout(dest,1);
		}
	    }
	    if(y-1 >=0 && playground.index[x][y-1] != "block"){
		var c  = y-1;	
		var layer = 0;
	    	     layer = checkcollision(x,c);
	var dest ="animate('"+playerno+"',"+x+","+c+")"; 
	var t = setTimeout(dest,1);	
		if(  (y-2 >=0 && layer != 1) && playground.index[x][y-2] !="block" ){
		 c  = y-2;	
	    	    checkcollision(x,c); 
	var dest ="animate('"+playerno+"',"+x+","+c+")"; 
	var t = setTimeout(dest,1); 
		}
	    }
  	    if(y+1 < 13 && playground.index[x][y+1] !="block"){
		var  c  = y+1;	
		var layer =0;
		layer = checkcollision(x,c); 
	 var dest ="animate('"+playerno+"',"+x+","+c+")"; 
	 var t = setTimeout(dest,1);
		if(  (y+2 < 13 && layer != 1)&& playground.index[x][y+2] !="block"){
		c  = y+2;	
	    	     checkcollision(x,c);
	var dest ="animate('"+playerno+"',"+x+","+c+")"; 
	var t = setTimeout(dest,1);
		}
	    }
	}
	

	if(pnumb == myplayerno)
	var tm = setTimeout(function(){canplantbomb=1;},1000);
}
function animate(playerno,i,j){
var row= i*50;
var col = j*50;
	$('#arena').append("<div  class='bomb' id='B"+i+j+"' style='left:"+col+"px; top:"+row+"px;'> </div> ");
	$("#B"+i+j).sprite({fps:12 , no_of_frames:16, play_frames:16, start_at_frame: 1,
		on_frame:{ 			
			14:function(obj){
				   $("#B"+i+j).remove(); 
			  } 
		}	
		}); 
}
function checkcollision(v,h){
	var vpos = v * 50;
	var hpos = h * 50;
	var result = 0;
   if(playground.index[v][h] == "cactus"){
			$("#C"+v+h).remove();
			playground.index[v][h] = "empty";
			result = 1;
		     }
  else if(playground.index[v][h] == "item"){
			$("#C"+v+h).remove(); 
			$('#arena').append("<div   id='hat' style='left:"+hpos+"px; top:"+vpos+"px;'> </div> ");
			playground.index[v][h] = "hat";		
			result = 1;
  }
   else if(playground.index[v][h] == "door"){
			$("#C"+v+h).remove(); 
			$('#arena').append("<div   id='saloon' style='left:"+hpos+"px; top:"+vpos+"px;'> </div> ");
			playground.index[v][h] = "saloon";		
			result = 1;
   }
  return result;
}
