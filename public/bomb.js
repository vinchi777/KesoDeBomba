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
            if(x-1 >= 0 && (playground.index[x-1][y] == "empty" ||  playground.index[x-1][y] == "cactus") ){
	    var r  = x-1;	
	    var layer = 0;
	    	     if(playground.index[r][y] == "cactus"){
			$("#C"+r+y).remove();
			playground.index[r][y] = "empty";
			layer =1;
		     }
		animate(playerno,x-1,y);
	        if(  (x-2 >=0 && layer != 1 ) && (playground.index[x-2][y] == "empty" ||  playground.index[x-2][y] == "cactus")   ){ 
		r  = x-2;	
	    	     if(playground.index[r][y] == "cactus"){
			$("#C"+r+y).remove();
			playground.index[r][y] = "empty";
		     }    
		animate(playerno,x-2,y);
		}
	    }
	    if(x+1 < 13 && (playground.index[x+1][y] == "empty" ||  playground.index[x+1][y] == "cactus")){
		var r  = x+1;	
		var layer = 0;
	    	     if(playground.index[r][y] == "cactus"){
			$("#C"+r+y).remove();
			playground.index[r][y] = "empty";
			layer =1;
		     }
		 animate(playerno,x+1,y);
		if(  (x+2 <13 && layer != 1 ) && (playground.index[x+2][y] == "empty" ||  playground.index[x+2][y] == "cactus") ){
		 r  = x+2;	
	    	     if(playground.index[r][y] == "cactus"){
			$("#C"+r+y).remove();
			playground.index[r][y] = "empty";
		     }
		animate(playerno,x+2,y);
		}
	    }
	    if(y-1 >=0 && (playground.index[x][y-1] == "empty" ||  playground.index[x][y-1] == "cactus")){
		var c  = y-1;	
		var layer = 0;
	    	     if(playground.index[x][c] == "cactus"){
			$("#C"+x+c).remove();
			playground.index[x][c] = "empty";
			layer = 1;
		     }
		animate(playerno,x,y-1);
		if(  (y-2 >=0 && layer != 1) && (playground.index[x][y-2] == "empty" ||  playground.index[x][y-2] == "cactus") ){
		 c  = y-2;	
	    	     if(playground.index[x][c] == "cactus"){
			$("#C"+x+c).remove();
			playground.index[x][c] = "empty";
		     }
	         animate(playerno,x,y-2);
		}
	    }
  	    if(y+1 < 13 && (playground.index[x][y+1] == "empty" ||  playground.index[x][y+1] == "cactus")){
		var  c  = y+1;	
		var layer =0;
	    	     if(playground.index[x][c] == "cactus"){
			$("#C"+x+c).remove();
			playground.index[x][c] = "empty";
			layer =1;
		     }
		 animate(playerno,x,y+1);
		if(  (y+2 < 13 && layer < 1)&& (playground.index[x][y+2] == "empty" ||  playground.index[x][y+2] == "cactus")){
		c  = y+2;	
	    	     if(playground.index[x][c] == "cactus"){
			$("#C"+x+c).remove();
			playground.index[x][c] = "empty";
		     }
		animate(playerno,x,y+2);
		}
	    }
	}
	

	if(pnumb == myplayerno)
	var t = setTimeout(function(){canplantbomb=1;},1000);
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

