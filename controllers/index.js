
// Require the Card model
var Card = require('../models/card.js');

// Simple index controller
var indexController = {
  // Handle incoming requests for the '/' route
  index: function(req, res){
    // Since this route requires authentication,
    // called out in app.js, we have access to the
    // logged-in user's document from the database
    // via the injected "req.user" variable

    Card.find({owner: req.user._id}, function(err, cards){
      res.render('index', {
        // Left side is what Jade sees, right side what it will translate to
        user: req.user,
        cards: cards
      });
    });
  },
  newCard: function(req, res) {
    // Create a new card object
    var newCard = new Card({
      question: req.body.question,
      answer: req.body.answer,
      owner: req.user._id
    });
    // This gets submitted to the form
    console.log(req.body);
    // Store it in the database
    newCard.save(function(err, savedCard){
      console.log(err);
      console.log(savedCard);
      // Redirect the user back to the homepage
      // res.redirect('/'); - OLD METHOD, CAUSED THE REFRESH
      
      // This will send data back to client, accessed through returnDataFromServer
      res.send(savedCard);
    }); 
  },
  deleteCard: function(req, res) {
    Card.remove({_id:req.params.id}, function(err, card) {
      res.send(200);
    });
  }
};
// Export our index control
module.exports = indexController;