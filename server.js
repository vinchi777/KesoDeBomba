var express = require('express');
var app =express.createServer();
var io =require('socket.io').listen(app);

var port = 3000;
var prevroom;
var players;
var rooms = new Array();
rooms["room1"] = 
{
 "players" : 0
};
rooms["room2"] = 
{
 "players" : 0
}
app.use(express.static(__dirname + '/public'));
app.listen(port,function(){
 console.log("listening on port" + port);

});
app.get('/', function(req,res){
  res.sendfile(__dirname + '/index.html');
}); 




io.sockets.on('connection',function(socket){
	socket.prevroom=null;	
         socket.on('joinroom',function(roomname){        
		 if(rooms[roomname].players < 2)   
		 {       
				 if(socket.prevroom!=null)
				 {
				 socket.leave(socket.prevroom);
				 rooms[roomname].players--;
				 }	

				 socket.prevroom=roomname;
				 socket.join(roomname);
				 rooms[roomname].players+=1; 
				 socket.roomid=roomname;
				 socket.emit('joined',"youve joined "+roomname+"</br>" );
                                 io.sockets.json.emit('roomusers',{room:roomname , players:rooms[roomname].players})
		 } 
		 else 
		 {
		    socket.json.emit('roomusers',{room:roomname , players:rooms[roomname].players})
		    socket.emit('joined',"room is full, pick another room");
		 }      
  	 });
            
          socket.on('chat',function(msg){
              io.sockets.in(socket.roomid).emit('updatechat',msg);
         });

          socket.on('disconnect',function(){
                if(socket.roomid)
		 { 
			     rooms[socket.roomid].players--;
			     io.sockets.json.emit('roomusers',{room:socket.roomid , players:rooms[socket.roomid].players});
			     socket.leave(socket.roomid);
		 }           
         })
});
