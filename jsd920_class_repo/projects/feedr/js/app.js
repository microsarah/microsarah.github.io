/*
  Please add all Javascript code to this file.
*/


// Mashable keys: responsive_images.image[2], title, channel_label, shares.total, link



var Source = {
	'mashableURL': 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json',
	'redditURL': 'url',
	'diggURL': 'url',
};

function onSuccess(res) {
    console.log(res);
    populateData(res);
}

function onFail(err){
	console.log(err);
}

$.get(Source.mashableURL).done(onSuccess).fail(onFail);

function populateData(data){
	for(var i = 0; i < data.new.length; i++){
		var title = data.new[i].title;
		var label = data.new[i].label;
		var shares = data.new[i].shares;
		var image = data.new[i].image;
		var link = data.new[i].link;

		Article = {
			'title': title,
			'label': label,
			'shares': shares,
			'image': image,
			'link': link
		};

		$('.article').append('<h1>' + Article.title + '</h1>');
	}

	console.log(Article);
			// add elements to html
}



// add keys of data object to DOM

