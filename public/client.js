var socket = io.connect('http://waychoyaks.herokuapp.com');
var myplayerno;  
var startgame = 0;

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

playerone.initposition();
playertwo.initposition();

});

socket.on('moveplayer',function(data){
  if(data.from == 1)
 playerone.move(data.to);
 else if(data.from==2)
 playertwo.move(data.to);
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

                jQuery(window).keyup(function(e){
                          if(startgame == 1)
                             socket.json.emit('sendmove',{to:e.which , from:myplayerno}) 
                          });

                 

	});



