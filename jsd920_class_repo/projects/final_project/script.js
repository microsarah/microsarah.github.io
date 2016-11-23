$(document).ready( function(){
	var baseURL = 'https://accesscontrolalloworiginall.herokuapp.com/https://sarah-vids.herokuapp.com/';
	var allVideos = [];
	var dayCounter = 1;  // dayCounter is counting up 
	var year = 365;
	var month;

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

	// set the current month
	if(dayCounter <= NumDays.jan){
		month = 'january';
	} else if (dayCounter < NumDays.jan + NumDays.feb){
		month = 'february';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar){
		month = 'march';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr){
		month = 'april';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may){
		month = 'may';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun){
		month = 'june';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.july){
		month = 'july';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.july + NumDays.aug){
		month = 'august';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.july + NumDays.aug + NumDays.sep){
		month = 'september';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.july + NumDays.aug + NumDays.sep + NumDays.oct){
		month = 'october';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.july + NumDays.aug + NumDays.sep + NumDays.oct + NumDays.nov){
		month = 'november';
	} else if (dayCounter < NumDays.jan + NumDays.feb + NumDays.mar + NumDays.apr + NumDays.may + NumDays.jun + NumDays.july + NumDays.aug + NumDays.sep + NumDays.oct + NumDays.dec){
		month = 'december';
	}


	// new workflow:


	// ----------------------------------------------- search a day
	// ----------------------------------------------- get the video id
	// ----------------------------------------------- save the video id to an array
	// ----------------------------------------------- render the video using the video id from the array
	// ----------------------------------------------- start timer
	// ----------------------------------------------- after 5 seconds, do the next search
	// ----------------------------------------------- after 10 seconds, repeat this loop



	// searchAll runs queryData
	// queryData runs saveData
	// saveData runs renderData




	searchAll();

	// search for videos on a 10-sec timer


	// ---------------------------------------- this code renders way too fast
	for (var i = dayCounter; i <= 365; i++){
		setTimeout(searchAll, (10000 * i));
	}
	
	// idea: could i do 6 days at a time (1 minute of material)


	function searchAll(){
		console.log('day counter start: ' + dayCounter)

		// ----------------------------------------------- search a day
		var data = queryData(month, dayCounter);
	}



	function queryData(month,day){
		var url = (baseURL + month + '-' + day +'-' + 'birthday');
		$.get(url).done(onSuccess).fail(onFail);
		console.log(month, day)
	}
	
	// if the query is successful, then run saveData() 
	function onSuccess(res) {
		console.log(res)
		saveData(res);
	}



	function saveData(data){

		// ----------------------------------------------- get the video id
		// ----------------------------------------------- save the video id to an array
		var totalItems = data.items.length;
		var randomVid = Math.ceil(Math.random() * totalItems);
		console.log('total items: ' + totalItems);

		allVideos.push(data.items[randomVid].id.videoId);

		console.log(allVideos);
		renderData(data);
	}


	function renderData(){
		// ----------------------------------------------- render the video using the video id from the array
		var id = allVideos[dayCounter - 1];
		
		//console.log(id)
		$('.video-container').append('<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		
		if(dayCounter < 10){
			$('.title').append('<h1>' + month + '/0' + dayCounter + '/' + '2016</h1>');
		} else {
			$('.title').append('<h1>' + month + '/' + dayCounter + '/' + '2016</h1>');
		}
		
		

		// ----------------------------------------------- remove previous iframe after initial iframe renders
		if (dayCounter > 1){
			console.log('removing iframe');
			$('iframe:first-of-type').remove();
			$('h1:first-of-type').remove();
		}

		dayCounter++;
		console.log('day counter end: ' + dayCounter);
	}


	function onFail(err){
		console.log('Error accessing data: '+ err);
	}

});