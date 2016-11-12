$(document).ready( function(){

	var x = 1;
	var messageAppReference = firebase.database();

	$('#message-form').submit(function(e){
		e.preventDefault();
		var message = $('#message').val();
		$('#message').val('');

		// give a name to the database
		var messagesReference = messageAppReference.ref('messages');

		// push the message to the database (database is a table, so it has a key as a header and a value as a row)
		messagesReference.push({
			msg: message,
			votes: 1
		});
	});


	function getMessages(){
		messageAppReference.ref('messages').on('value', function(res){ // res in the array, msg is the item in the array
			$('.message-board').empty();
			res.forEach(function(msg){
				//console.log('this is the object: ',msg);
				var id = msg.key;
				var message = msg.val();

				var messageText = message.msg;
				var votes = message.votes;

				var upVote = $('<i class="fa fa-thumbs-up pull-right"></i>');
				var downVote = $('<i class="fa fa-thumbs-down pull-right"></i>');
				var trash = $('<i class="fa fa-trash pull-right"></i>');

				upVote.on('click', function(){
					updateMessage(id, votes++);
				});

				downVote.on('click', function(){
					updateMessage(id, votes--);
				});

				trash.on('click', function(){
					$(this).parent().remove();
				});

				var li = $('<li>').html(messageText + '<div class="pull-right">' + votes + '</div>');
				li.append(trash);
				li.append(downVote);
				li.append(upVote);
				$('.message-board').append(li);
			});

		});

		function updateMessage(id, votes){
			var messageReference = messageAppReference.ref('messages/' + id);
			messageReference.update({votes:votes});
		}
	}

	getMessages();
});

