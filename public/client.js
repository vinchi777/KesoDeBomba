var socket = io.connect('http://localhost:3000');
  
socket.on('connect',function(){
    alert("connect");
});

socket.on('joined',function(data){
    $('#msg').html(data);
});

socket.on('updatechat',function(msg){  
    $('#msg').append(msg);
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


/*
   socket.on('updatechat', function(username,data){
      $('#conversation').append('<b>' +username + ':</b>' +data+ '<br>);
});

socket.on('updateusers',function(data){
  $('#users').empty();
  $.each(data, function(key,value){
    $('#users').append('<div>' +key+)
 });
});
*/
