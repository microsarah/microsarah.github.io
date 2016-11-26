$(document).ready( function(){
	var baseURL = 'https://accesscontrolalloworiginall.herokuapp.com/https://sarah-vids.herokuapp.com/';
	var allVideos = [];
	var totalDays = 1;  // totalDays is counting up with each render
	var currentDay = 1; // tracking days for months
	var year = 365;
	var currentMonth;

	var NumDays = {
		jan : 31,
		feb : 28,
		mar : 31,
		apr : 30,
		may : 31,
		jun : 30,
		jul : 31,
		aug : 31,
		sep : 30,
		oct : 31,
		nov : 30,
		dec : 31,
	};


	// start it off
	currentMonth = 'january';
	searchForVid();

	// search for videos on a 10-sec timer
	for (var i = totalDays; i <= year; i++){
		setTimeout(searchForVid, (10000 * i));
	}




	
	// ----------------------------------------------- set the current month, then
	// ----------------------------------------------- query data using current month & day
	function searchForVid(){
		setMonth();
		queryData(currentMonth, currentDay);
	}

	// ----------------------------------------------- call the API 
	// ----------------------------------------------- if it works, run the success function
	// ----------------------------------------------- if it fails, restart search immediately
	function queryData(month,day){
		var url = (baseURL + month + '-' + day +'-' + 'birthday');
		$.get(url).done(onSuccess).fail(searchForVid); 
	}
	
	// ----------------------------------------------- if the query is successful, save the data
	function onSuccess(res) {
		console.log(res)

		// ----------------------------------------------- get the video id
		// ----------------------------------------------- save the video id to an array
		var totalItems = res.items.length;
		var randomVid = Math.floor(Math.random() * totalItems);
		allVideos.push(res.items[randomVid].id.videoId);
		renderData(res);
	}

	// ----------------------------------------------- render the video using the video id from the array
	function renderData(){
		var id = allVideos[totalDays - 1];
		$('.video-container').append('<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1;?t=1m1s;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		
		// ----------------------------------------------- add a 0 to single-digit dates
		if(currentDay < 10){
			$('.title').append('<h1>' + monthNum + '/0' + currentDay + '/' + '2016</h1>');
		} else {
			$('.title').append('<h1>' + monthNum + '/' + currentDay + '/' + '2016</h1>');
		}
		
		// ----------------------------------------------- remove previous iframe after initial iframe renders
		if (totalDays > 1){
			$('iframe:first-of-type').remove();
			$('h1:first-of-type').remove();
		}

		currentDay++;
		totalDays++;
	}

	// ----------------------------------------------- set the currentMonth 
	// ----------------------------------------------- reset the currentDay after the month ends
	function setMonth(){
		if (currentMonth === 'january' && currentDay > NumDays.jan){
			currentDay = 1;
			currentMonth = 'february';
		} else if (currentMonth === 'february' && currentDay > NumDays.feb){
			currentDay = 1;
			currentMonth = 'march';
		} else if (currentMonth === 'march' && currentDay > NumDays.mar){
			currentDay = 1;
			currentMonth = 'april';
		} else if (currentMonth === 'april' && currentDay > NumDays.apr){
			currentDay = 1;
			currentMonth = 'may';
		} else if (currentMonth === 'may' && currentDay > NumDays.may){
			currentDay = 1;
			currentMonth = 'june';
		} else if (currentMonth === 'june' && currentDay > NumDays.jun){
			currentDay = 1;
			currentMonth = 'july';
		} else if (currentMonth === 'july' && currentDay > NumDays.jul){
			currentDay = 1;
			currentMonth = 'august';
		} else if (currentMonth === 'august' && currentDay > NumDays.aug){
			currentDay = 1;
			currentMonth = 'september';
		} else if (currentMonth === 'september' && currentDay > NumDays.sep){
			currentDay = 1;
			currentMonth = 'october';
		} else if (currentMonth === 'october' && currentDay > NumDays.oct){
			currentDay = 1;
			currentMonth = 'november';
		} else if (currentMonth === 'november' && currentDay > NumDays.nov){
			currentDay = 1;
			currentMonth = 'december';
		} else if (currentMonth === 'december' && currentDay > NumDays.dec){
			currentDay = 1;
			currentMonth = 'january';
		}

		if (currentMonth === 'january'){
			monthNum = '01';
		} else if (currentMonth === 'february'){
			monthNum = '02';
		} else if (currentMonth === 'march'){
			monthNum = '03';
		} else if (currentMonth === 'april'){
			monthNum = '04';
		} else if (currentMonth === 'may'){
			monthNum = '05';
		} else if (currentMonth === 'june'){
			monthNum = '06';
		} else if (currentMonth === 'july'){
			monthNum = '07';
		} else if (currentMonth === 'august'){
			monthNum = '08';
		} else if (currentMonth === 'september'){
			monthNum = '09';
		} else if (currentMonth === 'october'){
			monthNum = '10';
		} else if (currentMonth === 'november'){
			monthNum = '11';
		} else if (currentMonth === 'december'){
			monthNum = '12';
		}      
	}
});
