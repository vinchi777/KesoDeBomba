var express = require('express');
var app =express.createServer();
var io =require('socket.io').listen(app);

var port = 3000;
var prevroom;
var players;
var rooms = new Array();
rooms["room1"] = 
{
 "players" : 0,
 "playerone" : null,
 "playertwo" : null
};
rooms["room2"] = 
{
 "players" : 0,
 "playerone" : null,
 "playertwo" : null
}
app.use(express.static(__dirname + '/public'));
app.listen(port,function(){
 console.log("listening on port" + port);

});
app.get('/', function(req,res){
  res.sendfile(__dirname + '/index.html');
}); 




io.sockets.on('connection',function(socket){
         socket.on('joinroom',function(roomname){        

                if(socket.roomid == roomname)                
		    socket.json.emit('joined',{msg:"on the same room" , playerno:0});
 	   	else if(rooms[roomname].players < 2 )   
		 {       
                                if(socket.roomid)
				 {
				 rooms[socket.roomid].players-=1;
				 socket.leave(socket.roomid);
             	 		 io.sockets.json.emit('roomusers',{room:socket.roomid, players:rooms[socket.roomid].players})
				 }	
				 socket.playerno = rooms[roomname].players+1;	
				 socket.join(roomname);
                                 rooms[roomname].players+=1; 
				 socket.roomid=roomname;
				 socket.json.emit('joined',{msg:"youve joined "+roomname+"</br>" , playerno:socket.playerno});
				 io.sockets.json.emit('roomusers',{room:roomname , players:rooms[roomname].players});
	
				 if(rooms[roomname].players == 2)
				 {
				 io.sockets.in(roomname).json.emit('startgame');
				 }

        	 } 
                 else 
		 {
		    socket.json.emit('roomusers',{room:roomname , players:rooms[roomname].players})
		    socket.json.emit('joined',{msg:"room is full" , playerno:0});
		 }      
  	 });
            
          socket.on('chat',function(msg){
              io.sockets.in(socket.roomid).emit('updatechat',msg);
         });

          socket.on('disconnect',function(){
                if(socket.roomid && rooms[socket.roomid].players!=0)
		 { 
			     rooms[socket.roomid].players-=1;
			     io.sockets.json.emit('roomusers',{room:socket.roomid , players:rooms[socket.roomid].players});
			     socket.leave(socket.roomid);
		 }           
         })
});
