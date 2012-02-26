function login(pg,conString,form){
 var result = "";
 var client = new pg.Client(conString);
	client.connect();
	client.query("INSERT INTO users(name) VALUES($1)",[form.name]); 
	
	//query results
	/*var query = client.query("SELECT * FROM users");

	//can stream row results back 1 at a time
	query.on('row', function(row) {
	  console.log(row);
	}); */
}
module.exports.login = login;
