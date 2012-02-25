var express = require('express');
var app =express.createServer();
var io =require('socket.io').listen(app); 
var sys = require ('util');
var pg = require('pg');

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.set('view engine','jade');
app.set('view options', {
	  layout: false
});


app.post('/test',function(req,res){
 res.render(__dirname + '/test.jade',{name:req.body.name});
});
app.get('/', function(req,res){
  res.sendfile(__dirname + '/login.html');
}); 
app.post('/game',function(req,res){
 res.render(__dirname + '/game.jade',{name:req.body.name});	
});
app.get('/game',function(req,res){
 res.render(__dirname + '/game.jade',{name:req.body.name});	
});

app.listen(port,function(){
 console.log("listening on port" + port);

});
var prevroom;
var players;
var rooms = new Array();
rooms["room1"] = 
{
 "players" : 0,
 "playerinfo" : [
              {"number": 1, "name": null, "position" : "vacant" },
              {"number": 2, "name": null, "position" : "vacant" }
                ]
};
rooms["room2"] = 
{
 "players" : 0,
 "playerinfo" : [
              {"number": 1, "name": null, "position" : "vacant" },
              {"number": 2, "name": null, "position" : "vacant" }
                ]
};



io.sockets.on('connection',function(socket){
	
// when a player joins a room, joinroom event is called.
         socket.on('joinroom',function(roomname){        

                if(socket.roomid == roomname)                
		    socket.json.emit('joined',{msg:"on the same room" , playerno:4});
 	   	else if(rooms[roomname].players < 2 )   
		 {                        //when player changes rooms 
                                if(socket.roomid)
				 {
				 rooms[socket.roomid].players-=1;
				 rooms[socket.roomid].playerinfo[socket.playerno].position = "vacant";
                                 io.sockets.in(socket.roomid).emit('cleararena');
				 socket.leave(socket.roomid);
             	 		 io.sockets.json.emit('roomusers',{room:socket.roomid, players:rooms[socket.roomid].players})
                                 }
	 			//join as player one	
				 if(rooms[roomname].playerinfo[0].position == "vacant")
				  {
					socket.playerno = 0;
                                        rooms[roomname].playerinfo[0].position = "taken"; 
				  }
	 			//join as player two
				else if(rooms[roomname].playerinfo[0].position == "taken")
				{
					socket.playerno = 1;
					rooms[roomname].playerinfo[1].position = "taken";
				}
				 socket.join(roomname);
                                 rooms[roomname].players+=1; 
				 socket.roomid=roomname;
				 socket.json.emit('joined',{msg:"youve joined "+roomname+"</br>" , playerno:socket.playerno});
				 io.sockets.json.emit('roomusers',{room:roomname , players:rooms[roomname].players});
	
				 if(rooms[roomname].players == 2)
				 {
				 var random = Math.floor(Math.random()*5);
				 io.sockets.in(roomname).json.emit('startgame',random);
				 }

        	 } 
                 else 
		 { // playerno = 4 if room is full
		    socket.json.emit('roomusers',{room:roomname , players:rooms[roomname].players})
		    socket.json.emit('joined',{msg:"room is full" , playerno:4});
		 }      
  	 });
//when a player chats, it boradcast's the message to all players in the room.            
          socket.on('chat',function(msg){
              io.sockets.in(socket.roomid).emit('updatechat',msg);
         });
//sends the move of a player to all players in the room.	  
         socket.on('sendmove',function(data){
            io.sockets.in(socket.roomid).json.emit('moveplayer',data);
	});
//sends the bomb coords 
	 socket.on('sendbomb',function(data){
	  io.sockets.in(socket.roomid).json.emit('plantbomb',data);
	})
// called  when a player disconnects in the game.   
          socket.on('disconnect',function(){
                if(socket.roomid && rooms[socket.roomid].players!=0)
		 { 
			     rooms[socket.roomid].players-=1;
			     rooms[socket.roomid].playerinfo[socket.playerno].position = "vacant";
			     io.sockets.json.emit('roomusers',{room:socket.roomid , players:rooms[socket.roomid].players});
			     io.sockets.in(socket.roomid).emit('cleararena');
                             socket.leave(socket.roomid);
		 }           
         })
});
