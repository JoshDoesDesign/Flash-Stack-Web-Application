
// FLASH CARD SCHEMA FILE

var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
	question: String,
	answer: String,
	owner: {
		type: mongoose.Schema.ObjectId,
		ref: 'user'
	}
})

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;