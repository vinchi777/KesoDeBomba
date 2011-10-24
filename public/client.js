var socket = io.connect();
var myplayerno;  
var startgame = 0;
var canpress = 1;

socket.on('connect',function(){
});

socket.on('joined',function(data){
    $('#msg').html(data.msg+'</br>');
 if(data.playerno != 4)
 {
  myplayerno = data.playerno+1;
    $('#msg').append(' player '+ myplayerno+'</br>');
 }
});

socket.on('updatechat',function(msg){  
    $('#msg').append(msg+"</br>");
});

socket.on('roomusers',function(data){
  $("#"+data.room).html(data.players+" players"); 
});

socket.on('startgame',function(){   
  startgame = 1;
  playerone = new Player("pone");
  playertwo = new Player("ptwo");
  playground = new Arena();
playerone.initposition();
playertwo.initposition();
playground.initialize();

});

socket.on('moveplayer',function(data){
<<<<<<< HEAD
  if(data.from == 1)
 playerone.move(data.to);
 else if(data.from==2)
 playertwo.move(data.to);
=======
		if(data.from == 1 && playerone.canmove(data.to))
		playerone.move(data.to);
		else if(data.from==2 && playertwo.canmove(data.to))
		playertwo.move(data.to);
>>>>>>> localport
});

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
                          if(startgame == 1 && canpress == 1)
				{
				canpress = 0;
                             socket.json.emit('sendmove',{to:e.which , from:myplayerno});
				} 
                          });
                jQuery(window).keyup(function(e){
   				canpress = 1;
				});

                 

	});



