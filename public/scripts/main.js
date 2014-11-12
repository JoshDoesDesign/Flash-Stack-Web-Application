$(document).ready(function(){

	// CARD DELETE BUTTON
	$(document).on('click', '.card-delete-button', function() {
		var listItem = $(this).closest('.card-list');
		console.log(listItem);
		var cardId = listItem.data('id');
		console.log(cardId);
			$.ajax({ 
				url: "/delete/" + cardId,
				type: "DELETE"
			}).done(function() {
				listItem.remove();
		});
	});

	// AJAX SUBMIT THE FORM, CREATE A CARD
	$(document).on('submit', '#card-form', function(event){
		event.preventDefault();
		$.post(
			"/newCard",
			{question: $('.question-input').val(), answer: $('.answer-input').val()},
			function(returnDataFromServer){
				console.log(returnDataFromServer);
				$('#row-container').prepend(
					'<div class="card-list col-lg-3 col-md-4 col-sm-6"><div class="card-wrapper" data-id=' +returnDataFromServer._id + '><div class="card-declare"><div class="card-question"><h4 class="card-header">Q</h4><hr class="horizontal-dos"><br/><p>' + returnDataFromServer.question + '</p></div><div class="card-answer"><h4 class="card-header">A</h4><hr class="horizontal-dos"><p>' + returnDataFromServer.answer + '</p><button class="card-delete-button btn">DELETE</button></div></div></div></div>')
		});
		$('.question-input, .answer-input').val('');
	});
});