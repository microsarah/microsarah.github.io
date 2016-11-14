$(document).ready( function(){
	var baseURL = 'https://accesscontrolalloworiginall.herokuapp.com/https://sarah-vids.herokuapp.com/';

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

	// var allData = [];

	// for(var i =1; i < NumDays.jan; i ++){
	// 	var data = getData('jan', i);
	// 	console.log(data)
	// 	allData.push(data);
	// }

	// console.log(allData);


	getData('jan', 1);
	// console.log(jan1);
	//saveData(jan1);

	function getData(month,day){
		var url = (baseURL + month + '-' + day +'-' + 'birthday');
		$.get(url).done(onSuccess).fail(onFail);
	}
	
	// source successfully accessed
	function onSuccess(res) {
		//return res;
	    renderData(res);
	    //console.log(res);
	}

	// error accessing source
	function onFail(err){
		console.log('Error accessing data: '+ err);
	}


	function renderData(data){
		var id = data.items[0].id.videoId;
		console.log(id);
		$('.video-container').append('<iframe src="https://www.youtube.com/embed/' + id + '" autoplay=1 frameborder="0" allowfullscreen></iframe>');
		// console.log(vid)
	}

});