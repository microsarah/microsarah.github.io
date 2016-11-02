$(function() {
		// DOM is now ready
		_500px.init({
		sdk_key: '5f544cab4224b8038b4ddf514dbdce23b369e165'  	
	});

	$('#login').click(function(){
		console.log('Login clicked');
		_500px.login();
	});

	_500px.on('authorization_obtained', function(){
		// successful OAuth login!
		console.log('Login successful');
		$('.sign-in-view').hide();
		$('.image-results-view').show();
	});

	if (navigator.geolocation) {
		// if it is use the getCurrentPosition method to retrieve the Window's location
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;

			console.log('lat: ', lat);
			console.log('long: ', long);

			var radius = '25mi';

			var searchOptions = {
				geo: lat + ',' + long + ',' + radius,
				only: 'Landscapes',
				image_size: 3,
				rpp: 28,
				sort: 'highest_rating'
			};
		
			_500px.api('/photos/search', searchOptions, function(response){
				if(response.data.photos.length === 0){
					alert('No photos found!');
				} else {
					// handle the successful response here
      				console.log(response);
      				for(var i =0; i < response.data.photos.length; i++){
      					var image_url = response.data.photos[i].image_url;
      					console.log(highest_rating);
      					$('.images').append('<img src= ' + image_url +'" class="image">');
      				}
				}
			});
		});

	} else {
		$('.images').append('Sorry, the browser does not support geolocation');
	}
});
