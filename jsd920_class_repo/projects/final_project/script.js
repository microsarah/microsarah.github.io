$(document).ready( function(){
	var baseURL = 'https://accesscontrolalloworiginall.herokuapp.com/https://sarah-vids.herokuapp.com/';

	var allData = [];

	var NumDays = {
		jan : 31,
		'feb' : 28,
		'mar' : 31,
		'apr' : 30,
		'may' : 31,
		'jun' : 30,
		'jul' : 31,
		'aug' : 31,
		'sep' : 30,
		'oct' : 31,
		'nov' : 30,
		'dec' : 31,
	};




	// new workflow:

	// search a day
	// get the video id
	// save the video id to an array
	// render the video using the video id from the array
	// start timer
	// after 5 seconds, do the next search
	// after 10 seconds, repeat this loop


	// idea: could i do 6 days at a time (1 minute of material)



	// var allData = [];

	// for(var i =1; i < NumDays.jan; i ++){
	// 	var data = getData('jan', i);
	// 	console.log(data)
	// 	allData.push(data);
	// }

	// console.log(allData);

	// load search results for jan 1
	for (var i = 0; i < NumDays.jan; i++){

		getData('jan', i);
	}

	//getData('jan', 1);
	// console.log(jan1);
	//saveData(jan1);

	function getData(month,day){
		var url = (baseURL + month + '-' + day +'-' + 'birthday');
		$.get(url).done(onSuccess).fail(onFail);
	}
	
	// source successfully accessed
	function onSuccess(res) {
		//return res;
		saveData(res);
	    renderData(res);
	    console.log(res);
	}

	// error accessing source
	function onFail(err){
		console.log('Error accessing data: '+ err);
	}

	function saveData(data){
		for(var i = 0; i < data.items.length; i++){
			allData.push(data.items[i].id.videoId);
		}

		console.log(allData);
	}

	function renderData(data){

		// create an id with the video id
		// create an iframe pointing to the id
		// play video for ten seconds
		// replace the iframe with the next video id
		var id = data.items[0].id.videoId;
		console.log(id);


		// autoplay works when you click the tempURL and open in browser, but causes this error in my app: 
		// Uncaught ReferenceError: ytcfg is not defined
		// Unfortunately it's a youtube bug: http://stackoverflow.com/questions/40622204/uncaught-referenceerror-ytcfg-is-not-defined

		//var tempURL = '"https://www.youtube.com/embed/' + id + '?autoplay=1;rel=0&amp;showinfo=0"';
		//console.log(tempURL);
		//$('.video-container').append('<iframe src=' + tempURL + 'frameborder="0" allowfullscreen></iframe>');
		
		$('.video-container').append('<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
	
	}

});