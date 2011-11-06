/*
myplayerno = sets the player number.
startgame = starts game if startgame == 1 
canpress = can press arrowkeys when canpress == 1, to have time interval in pressing the arrowkeys
*/

var socket = io.connect();
var myplayerno;  
var startgame = 0;
var canpress = 1;
var canplantbomb = 1;
// connect to a server
socket.on('connect',function(){
});
//this is called when a player has joined the room.
socket.on('joined',function(data){
    $('#msg').html(data.msg+'</br>');
 if(data.playerno != 4)
 {
  myplayerno = data.playerno+1;
    $('#msg').append(' player '+ myplayerno+'</br>');
 }
});
//this is called when someone chats in the room.
socket.on('updatechat',function(msg){  
    $('#msg').append(msg+"</br>");
});
//tells how many users are in the room.
socket.on('roomusers',function(data){
  $("#"+data.room).html(data.players+" players"); 
});
//is fired when the game starts
socket.on('startgame',function(){   
  startgame = 1;
  playerone = new Player("pone");
  playertwo = new Player("ptwo");
  playground = new Arena();
playerone.initposition();
playertwo.initposition();
playground.initialize();

});
//is fired when a player moves
socket.on('moveplayer',function(data){
		if(data.from == 1 && playerone.canmove(data.to)==1)
		playerone.move(data.to);
		else if(data.from==2 && playertwo.canmove(data.to)==1)
		playertwo.move(data.to);
});
//fired when bomb is planted
socket.on('plantbomb',function(data){
    if(data.from == 1)
     playerone.plantbomb(data.row,data.col);
    else if(data.from == 2)
     playertwo.plantbomb(data.row,data.col);

    
});
//clears the arena when someone leaves the room or got dc'd
socket.on('cleararena',function(){
 $("#arena").html("");
});

     
	 $(document).ready(function(){
		 $('#roomjoin').click(function(){  
			 socket.emit('joinroom',$('#roomselect').val());

			 });
			 $('#chat').keydown(function(e){
				 if(e.which==13)
				{
				 socket.emit('chat',$('#chat').val());
			       	 $('#chat').val("");
				} 
			 });

                jQuery(window).keydown(function(e){

			if(startgame == 1 )
   			{
                          if(canpress == 1 && (e.which >=37 && e.which <=40))
				{
				canpress = 0;
                             socket.json.emit('sendmove',{to:e.which , from:myplayerno});
				}
			   else if(e.which == 32 && canplantbomb == 1)
				{	
                                 var onrow,oncol;
      				 canplantbomb = 0;
					if(myplayerno == 1)
 					{
					   onrow = playerone.onrow;
					   oncol = playerone.oncolumn;
					}
					else if(myplayerno == 2)
					{
 					  onrow = playertwo.onrow;
				 	  oncol = playertwo.oncolumn;
					}
			     socket.json.emit('sendbomb',{row:onrow,col:oncol,from:myplayerno});	
				} 
                        } 
			 });
               //so that the player should press the arrow key twice to move twice. just understand it wtf!
                 jQuery(window).keyup(function(e){
			  if(e.which >=37 && e.which <=40)	
   				canpress = 1;
				});

                 

	});



