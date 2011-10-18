var express = require('express');
var app =express.createServer();
var io =require('socket.io').listen(app);

var port = 3000;
var prevroom;

app.use(express.static(__dirname + '/public'));
app.listen(port,function(){
 console.log("listening on port" + port);

});
app.get('/', function(req,res){
  res.sendfile(__dirname + '/index.html');
}); 
app.use(express.static(__dirname + '/public'));

io.sockets.on('connection',function(socket){
		
               
         socket.on('joinroom',function(roomname){        
                if(prevroom!=null)
          	{
                 socket.leave(prevroom);
                }	
                 prevroom=roomname;
                 socket.join(roomname);
                 socket.roomid=roomname;
		 socket.emit('joined',"youve joined "+roomname );
  	 });
            
          socket.on('chat',function(msg){
              io.sockets.in(socket.roomid).emit('updatechat',msg);
         });
});
