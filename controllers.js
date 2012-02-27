function login(pg,conString,form,res,req){
  
	pg.connect(conString, function(err, client) {
		client.query("SELECT * from users WHERE name=$1 AND password=$2",[form.name,form.password], function(err, result) {
			if(result.rows.length >0){
				console.log(result.rows.length);
				req.session.name = form.name;
				res.render(__dirname + '/game.jade',{name:form.name});	
			}
			else{
				delete req.session.name;
				res.render(__dirname + '/login.jade',{access:"wrong password"});
			}
		});
	});
}
function register(pg,conString,form,res){
 pg.connect(conString, function(err, client) {
		client.query("SELECT * from users WHERE name=$1 ",[form.name], function(err, result) {
			if(result.rows.length >0){ 
				delete req.session.name;
 				res.render(__dirname + '/login.jade',{access:"username already exist"});
			}
			else{
				client.query("INSERT INTO users(name,password) VALUES($1,$2)",[form.name,form.password]);
				delete req.session.name; 
				res.render(__dirname + '/login.jade',{access:"register complete"});
			}
		});
	});
}

module.exports.login = login;
module.exports.register = register;
