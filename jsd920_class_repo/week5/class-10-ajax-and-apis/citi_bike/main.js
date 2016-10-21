/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {
	document.getElementById('output').onclick = makeRequest();

	function makeRequest(){
		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

		// create an instance of XMLHttpRequest
		var httpRequest = new XMLHttpRequest();

		// set up a custom function to handle the request
		httpRequest.onreadystatchange = responseMethod();

		// open GET request to the url
		httpRequest.open('GET', url)

		// check if our state is 'done'
		if(httpRequest.readyState === XMLHttpRequest.DONE){
			if(httpRequest.status === 200){
				var data = JSON.parse(httpRequest.response);
				console.log(data);
			}
			else { console.log ('problem') }
		}
	}
};

