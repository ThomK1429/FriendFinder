// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData	= require('../data/friends.js');
var path 			= require('path');
console.log("friendData=" + friendData[0].name + ", score 4 = " + friendData[0].scores[3] +   ", score 10 = " + friendData[0].scores[9]);




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		//console.log("app get - api/friends -  routing res=" + friendData.res);
		res.json(friendData);
	});


	
	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		//if(friendData.length < 5 ){
			console.log("app push - api/friends -  routing res=" + res);
			friendData.push(req.body);
			console.log("friendData[0]=" + friendData[0]);
			res.json(true); // KEY LINE
		//}

		// Or false if they don't have a table
		//else{
			//waitListData.push(req.body);
		//	res.json(false); // KEY LINE
	//	}

	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		friendData = [];
		//waitListData = [];

		console.log(friendData);
	})
}