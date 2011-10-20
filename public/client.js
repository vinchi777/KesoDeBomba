var socket = io.connect('http://localhost:3000');
var myplayerno;  
socket.on('connect',function(){
});

socket.on('joined',function(data){
    $('#msg').html(data.msg);
 if(data.playerno != 0)
  myplayerno = data.playerno;
});

socket.on('updatechat',function(msg){  
    $('#msg').append(msg+"</br>");
});

socket.on('roomusers',function(data){
  $("#"+data.room).html(data.players+" players"); 
});

socket.on('startgame',function(){
  playerone = new Player();
  playertwo = new Player();

});


	 $(function(){
		 $('#roomjoin').click(function(){  
			 socket.emit('joinroom',$('#roomselect').val());

			 });
		 $('#chat').keydown(function(e){
			 if(e.which==13)
			 socket.emit('chat',$('#chat').val());
			 });

	});



