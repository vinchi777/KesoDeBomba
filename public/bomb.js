function Bomb(playerno){
	this.fromplayer = playerno; 
        var pn = playerno;

	this.init = function(x,y){
		var row;
		var col;
		row = x * 50;
		col = y * 50;
//		this.findcollision(x,y);
		$('#arena').append("<div  class='"+playerno+"bomb' style='left:"+col+"px; top:"+row+"px;'> </div> ");
		var dest ="explode('"+pn+"')"; 
		var t = setTimeout(dest,1300);

	//	var t = setTimeout("explode("+x+","+y+")",1300);  		 		
	}
	this.findexplosion = function(x,y){
/*		var i=x;
		var row;
		var col; 
	    for(k=0; i>0 && playground.index[i][y] == "empty" && k<3 ;i-=1,k++);	
	    
	    for(var ctr=0;ctr<5 ;ctr++ )
	    {
		    
		    row = i * 50;
		    col = y * 50;
		    if( playground.index[i][y] == "empty")
		    {
			  i++;
		    }else
			    break;
	    } */
	}
	
}
function explode(player){
	$("."+player+"bomb").sprite({fps:12 , no_of_frames:16, play_frames:16,
		on_last_frame: function(obj){
//	$("#arena").remove($("."+player+"bomb").div);
		}
			
	});
	//canplantbomb variable in client.js
	canplantbomb = 1;
}

