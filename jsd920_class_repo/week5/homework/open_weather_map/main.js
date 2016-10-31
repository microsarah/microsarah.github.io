/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "humidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/

// only loads if js is in head
$(document).ready(function () {
  var apiKey = '7edfeb14e39f91685a7cfa1159637a35';
  var city = 'miami';
  var units = 'imperial';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=' + apiKey;
  // console.log(weatherUrl);

 //  	function makeRequest(){
	// 	$.get(weatherUrl)
	// 	.done(function(res){ console.log(res)})
	// 	.fail(function(xhr){ console.log('error has ocurred: ', xhr)})
	// }

	// makeRequest();

	$.ajax({
		url:weatherUrl,
		type:'GET',
		dataType: 'JSON',
		success: function(res){ console.log('success!'); populateNYCData(res); },
		fail: function(xhr){ console.log('error has ocurred: ', xhr); }
	});

	function populateNYCData(data){
		console.log(data);
			var temp = ('<span>Temperature</span> ' + data.main.temp + '&deg;F');
			var humidity = ('<span>Humidity</span> ' + data.main.humidity + '%');
			var windSpeed = ('<span>Wind Speed</span> ' + data.wind.speed + 'mph');

		var info = [temp, humidity, windSpeed];
		var list = $('#nyc-weather');
		
		for(var i = 0; i < info.length; i++){
			var newLi = $('<li></li>');
			newLi.append(info[i]);
			list.append(newLi);
		}

		var body = $('body');

		// change background color based on temp
		if(data.main.temp <= 40){
			body.addClass('cold');
		} else if (data.main.temp > 40 && data.main.temp <= 60){
			body.addClass('mild');
		} else if (data.main.temp > 60 && data.main.temp <= 75){
			body.addClass('warm');
		} else if (data.main.temp > 75){
			body.addClass('hot');
		}
	}


	// when the user clicks the button:
	var button = $('#submitReq');
	button.click(function(event){

		event.preventDefault();

		// redefine the city name var
		city = $('#city').val();
		console.log(city);

		weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=' + apiKey;
		console.log(weatherUrl);

		// make a new ajax request 
		$.ajax({
			url:weatherUrl,
			type:'GET',
			dataType: 'JSON',
			success: function(res){ console.log('success!'); populateYourData(res); },
			fail: function(xhr){ console.log('error has ocurred: ', xhr); }
		});

		
		function populateYourData(data){
			console.log(data);

			var list = $('#your-weather');
			var temp = ('<span>Temperature</span> ' + data.main.temp + '&deg;F');
			var humidity = ('<span>Humidity</span> ' + data.main.humidity + '%');
			var windSpeed = ('<span>Wind Speed</span> ' + data.wind.speed + 'mph');

			var info = [temp, humidity, windSpeed];

			// add in a title for the search results
			list.before('<h2>Current weather in ' + city +'</h2>')
			
			// add the search results to the page
			for(var i = 0; i < info.length; i++){
				var newLi = $('<li></li>');
				newLi.append(info[i]);
				list.append(newLi);
			}

			// change background color based on temp
			// if(data.main.temp <= 40){
			// 	list.addClass('cold');
			// } else if (data.main.temp > 40 && data.main.temp <= 60){
			// 	list.addClass('mild');
			// } else if (data.main.temp > 60 && data.main.temp <= 75){
			// 	list.addClass('warm');
			// } else if (data.main.temp > 75){
			// 	list.addClass('hot');
			// }
		}

	var form = $('form')[0];
    form.reset();

	});

});


