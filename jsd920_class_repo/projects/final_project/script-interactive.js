$(document).ready( function(){
	var baseURL = 'https://accesscontrolalloworiginall.herokuapp.com/https://sarah-vids.herokuapp.com/';
	var allVideos = [];
	var totalSearchDays = 1;  // totalDays is counting up with each render
	var searchDay; // tracking days for months
	var searchMonth;
	var renderDay;
	var renderMonth;
	var monthEntered, dayEntered;
	var year = 365;
	var id;
	
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
	//searchForVid();

	// user enters date
	
	$('#submit').click(function(event){
      	event.preventDefault();

      	showLoader();

      	monthEntered = $('#enterMonth').val();
		dayEntered = $('#enterDay').val();

		// set date & render
		//searchMonth = monthEntered;
		searchDay = dayEntered;
		monthNum = monthEntered;
		renderDay = dayEntered;

		console.log('monthEntered: ' + monthEntered)
		console.log('dayEntered: ' + dayEntered)
		//console.log('searchMonth: ' + searchMonth)
		console.log('searchDay: ' + searchDay)
		console.log('renderMonth: ' + renderMonth)
		console.log('monthNum: ' + monthNum)
		console.log('renderDay: ' + renderDay)


		setSearchMonth();
		searchForVid();
		// setTotalDays();
     });

	
	// if keys pressed, move fwd/bkwd
	// else, render vids as normal
	
	// search for videos on a 10-sec timer
	for (var i = totalSearchDays; i <= year; i++){
		setTimeout(searchForVid, (10000 * i));
	}

	// render videos on a 20-sec timer
	for (var i = 1; i <= year; i++){
		setTimeout(renderVid, (25000 * i));
	}

	// ----------------------------------------------- set the current month, then
	// ----------------------------------------------- query data using current month & day
	function searchForVid(){
		setSearchDate();
		queryData(searchMonth, searchDay);
		//console.log('searching: ' + searchMonth + ' ' + searchDay);
	}

	// ----------------------------------------------- call the API 
	// ----------------------------------------------- if it works, run the success function
	// ----------------------------------------------- if it fails, restart search immediately
	function queryData(month,day){
		var url = (baseURL + month + '-' + day +'-' + 'birthday');
		console.log(url);
		$.get(url).done(onSuccess).fail(searchForVid); 
	}
	
	// ----------------------------------------------- if the query is successful, save the data
	function onSuccess(res) {
		//console.log(res)

		// ----------------------------------------------- get the video id
		// ----------------------------------------------- save the video id to an array
		var totalItems = res.items.length;
		var randomVid = Math.floor(Math.random() * totalItems);

		if(randomVid === null){
			var randomVid = Math.floor(Math.random() * totalItems);
		} else {
			allVideos.push(res.items[randomVid].id.videoId);
		}

		// ----------------------------------------------- render the video for the first day only
		if(totalSearchDays === 1){
			renderVid();
			$('.yourBday').remove();
		}

		// ----------------------------------------------- increase the day counters
		searchDay++;
	}

	// ----------------------------------------------- render the video using the video id from the array
	function renderVid(){
		setRenderDate();

		// ----------------------------------------------- remove previous iframe after initial iframe render
		if (totalSearchDays > 1){
			$('iframe:first-of-type').remove();
		 }


		console.log(renderDay)

		id = allVideos[totalSearchDays - 1];

		
		console.log(allVideos)
		console.log('id: ' + id)
		console.log('rendering: ' + renderMonth + ' ' + renderDay);


		var source = '"https://www.youtube.com/embed/' + id + '?autoplay=1;rel=0&amp;showinfo=0"';
		console.log(source)
		$('.video-container').append('<iframe src=' + source + 'frameborder="0" allowfullscreen></iframe>');

		// ----------------------------------------------- remove previous date 
		$('.title').empty();
		// ----------------------------------------------- render new date 
		if (renderDay.length < 2){
			// ----------------------------------------------- add a 0 to single-digit dates
			$('.title').append('<h1>' + monthNum + '/0' + renderDay + '/' + '2016</h1>');
			$('.title').append('<h1>' + monthNum + '/0' + renderDay + '/' + '2016</h1>');
			$('.title').append('<h1>' + monthNum + '/0' + renderDay + '/' + '2016</h1>');
			$('.title').append('<h1>' + monthNum + '/0' + renderDay + '/' + '2016</h1>');
		} else {
			$('.title').append('<h1>' + monthNum + '/' + renderDay + '/' + '2016</h1>');
			$('.title').append('<h1>' + monthNum + '/' + renderDay + '/' + '2016</h1>');
			$('.title').append('<h1>' + monthNum + '/' + renderDay + '/' + '2016</h1>');
			$('.title').append('<h1>' + monthNum + '/' + renderDay + '/' + '2016</h1>');
		}

		totalSearchDays++;
		renderDay++;
		//console.log(renderDay)
	}

	// ----------------------------------------------- set the searchMonth 
	function setSearchMonth(){
			if (monthEntered === '01' | monthEntered === '1'){
			searchMonth = 'january';
		} else if (monthEntered === '02' | monthEntered === '2'){
			searchMonth = 'february';
		} else if (monthEntered === '03' | monthEntered === '3'){
			searchMonth = 'march';
		} else if (monthEntered === '04' | monthEntered === '4'){
			searchMonth = 'april';
		} else if (monthEntered === '05' | monthEntered === '5'){
			searchMonth = 'may';
		} else if (monthEntered === '06' | monthEntered === '6'){
			searchMonth = 'june';
		} else if (monthEntered === '07' | monthEntered === '7'){
			searchMonth = 'july';
		} else if (monthEntered === '08' | monthEntered === '8'){
			searchMonth = 'august';
		} else if (monthEntered === '09' | monthEntered === '9'){
			searchMonth = 'september';
		} else if (monthEntered === '10'){
			searchMonth = 'october';
		} else if (monthEntered === '11'){
			searchMonth = 'november';
		} else if (monthEntered === '12'){
			searchMonth = 'december';
		}
	}

	// ----------------------------------------------- reset the searchDay after the month ends
	function setSearchDate(){
		if (searchMonth === 'january' && searchDay > NumDays.jan){
			searchDay = 1;
			searchMonth = 'february';
		} else if (searchMonth === 'february' && searchDay > NumDays.feb){
			searchDay = 1;
			searchMonth = 'march';
		} else if (searchMonth === 'march' && searchDay > NumDays.mar){
			searchDay = 1;
			searchMonth = 'april';
		} else if (searchMonth === 'april' && searchDay > NumDays.apr){
			searchDay = 1;
			searchMonth = 'may';
		} else if (searchMonth === 'may' && searchDay > NumDays.may){
			searchDay = 1;
			searchMonth = 'june';
		} else if (searchMonth === 'june' && searchDay > NumDays.jun){
			searchDay = 1;
			searchMonth = 'july';
		} else if (searchMonth === 'july' && searchDay > NumDays.jul){
			searchDay = 1;
			searchMonth = 'august';
		} else if (searchMonth === 'august' && searchDay > NumDays.aug){
			searchDay = 1;
			searchMonth = 'september';
		} else if (searchMonth === 'september' && searchDay > NumDays.sep){
			searchDay = 1;
			searchMonth = 'october';
		} else if (searchMonth === 'october' && searchDay > NumDays.oct){
			searchDay = 1;
			searchMonth = 'november';
		} else if (searchMonth === 'november' && searchDay > NumDays.nov){
			searchDay = 1;
			searchMonth = 'december';
		} else if (searchMonth === 'december' && searchDay > NumDays.dec){
			searchDay = 1;
			searchMonth = 'january';
		}
	}

	function setRenderDate(){
		
		if (monthNum === '01'){
			renderMonth = 'january';
		} else if (monthNum === '02'){
			renderMonth = 'february';
		} else if (monthNum === '03'){
			renderMonth = 'march';
		} else if (monthNum === '04'){
			renderMonth = 'april';
		} else if (monthNum === '05'){
			renderMonth = 'may';
		} else if (monthNum === '06'){
			renderMonth = 'june';
		} else if (monthNum === '07'){
			renderMonth = 'july';
		} else if (monthNum === '08'){
			renderMonth = 'august';
		} else if (monthNum === '09'){
			renderMonth = 'september';
		} else if (monthNum === '10'){
			renderMonth = 'october';
		} else if (monthNum === '11'){
			renderMonth = 'november';
		} else if (monthNum === '12'){
			renderMonth = 'december';
		}   

		if (renderMonth === 'january' && renderDay > NumDays.jan){
			renderDay = 1;
			renderMonth = 'february';
			monthNum = '02';
		} else if (renderMonth === 'february' && renderDay > NumDays.feb){
			renderDay = 1;
			renderMonth = 'march';
			monthNum = '03';
		} else if (renderMonth === 'march' && renderDay > NumDays.mar){
			renderDay = 1;
			renderMonth = 'april';
			monthNum = '04';
		} else if (renderMonth === 'april' && renderDay > NumDays.apr){
			renderDay = 1;
			renderMonth = 'may';
			monthNum = '05';
		} else if (renderMonth === 'may' && renderDay > NumDays.may){
			renderDay = 1;
			renderMonth = 'june';
			monthNum = '06';
		} else if (renderMonth === 'june' && renderDay > NumDays.jun){
			renderDay = 1;
			renderMonth = 'july';
			monthNum = '07';
		} else if (renderMonth === 'july' && renderDay > NumDays.jul){
			renderDay = 1;
			renderMonth = 'august';
			monthNum = '08';
		} else if (renderMonth === 'august' && renderDay > NumDays.aug){
			renderDay = 1;
			renderMonth = 'september';
			monthNum = '09';
		} else if (renderMonth === 'september' && renderDay > NumDays.sep){
			renderDay = 1;
			renderMonth = 'october';
			monthNum = '10';
		} else if (renderMonth === 'october' && renderDay > NumDays.oct){
			renderDay = 1;
			renderMonth = 'november';
			monthNum = '11';
		} else if (renderMonth === 'november' && renderDay > NumDays.nov){
			renderDay = 1;
			renderMonth = 'december';
			monthNum = '12';
		} else if (renderMonth === 'december' && renderDay > NumDays.dec){
			renderDay = 1;
			renderMonth = 'january';
			monthNum = '01';
		}
	}

	function showLoader(){
		$('.loader').css('display', 'block');
	}


	// function setTotalDays(){
	// 	if (monthNum === '01'){
	// 		totalDays = searchDay;
	// 	} else if (monthNum === '02'){
	// 		totalDays = NumDays.jan + searchDay;
	// 	} else if (monthNum === '03'){
	// 		totalDays = NumDays.jan + NumDays.feb + searchDay;
	// 	} else if (monthNum === '04'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + searchDay;
	// 	} else if (monthNum === '05'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + searchDay;
	// 	} else if (monthNum === '06'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + searchDay;
	// 	} else if (monthNum === '07'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + searchDay;
	// 	} else if (monthNum === '08'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.jul + searchDay;
	// 	} else if (monthNum === '09'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.jul + NumDays.aug + searchDay;
	// 	} else if (monthNum === '10'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.jul + NumDays.aug + NumDays.sep + searchDay;
	// 	} else if (monthNum === '11'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.jul + NumDays.aug + NumDays.sep + NumDays.oct + searchDay;
	// 	} else if (monthNum === '12'){
	// 		totalDays = NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.jul + NumDays.aug + NumDays.sep + NumDays.oct + NumDays.nov + searchDay;
	// 	}
	// }
});
