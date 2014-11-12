var express = require('express');
var router = express.Router();
var Card = require('../models/vehicle');

/* Routes  */

app.get('/newCard', function(req, res) {
	// Create a new vehicle object
	var newCard = new Card({
		question: 'What Does The Fox Say?',
		answer: 'Ring Ding Ding Ding'
	});
	// Send the object back to the client to see what it has
	res.send(newVehicle);
	// Store it in the database
	newCard.save(function(err, savedCard){
		console.log(err);
		console.log(savedCard);
		// Redirect the user back to the homepage
		res.redirect('/');
	});	
});

module.exports = router;
