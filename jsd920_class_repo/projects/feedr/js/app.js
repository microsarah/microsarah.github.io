/*
  Please add all Javascript code to this file.
*/


// Mashable keys: responsive_images.image[2], title, channel_label, shares.total, link


// define the source
var Source = {
	'Mashable': 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json',
	'Reddit': 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json',
	'Digg': 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
};

var selectedSource;

// source successfully accessed
function onSuccess(res) {
    console.log(res);
    populateData(res);
}

// error accessing source
function onFail(err){
	console.log('Error accessing data: '+ err);
}

// get the data - run fail function if done does not run
var getMashable = $('#mashable').on('click', function() {
	$.get(Source.Mashable).done(onSuccess).fail(onFail);
	selectedSource = 'Mashable';
	$('span').replaceWith(selectedSource);
});

var getReddit = $('#reddit').on('click', function() {
	$.get(Source.Reddit).done(onSuccess).fail(onFail);
	selectedSource = 'Reddit';
	$('span').replaceWith(selectedSource);
});

var getDigg = $('#digg').on('click', function() {
	$.get(Source.Digg).done(onSuccess).fail(onFail);
	selectedSource = 'Digg';
	$('span').replaceWith(selectedSource);
});


// get mashable by default
//getMashable();

function populateData(data){
	var articles = [];
	var dataSource;

	if(selectedSource === 'Mashable'){ dataSource = data.new }
	else if(selectedSource === 'Reddit'){ dataSource = data.data.children}
	else if(selectedSource === 'Digg'){ dataSource = data.data.feed }

console.log(dataSource.length)
		for(var i = 0; i < dataSource.length; i++){

			if (selectedSource === 'Mashable'){
				var title = dataSource[i].title;
				var link = dataSource[i].link;
				var label = dataSource[i].channel_label;
				var shares = dataSource[i].shares.total;
				var image = dataSource[i].image;
			}

			else if (selectedSource === 'Reddit'){
				var title = dataSource[i].data.title;
				var link = dataSource[i].data.url;
				var label = dataSource[i].data.subreddit;
				var shares = dataSource[i].data.score;
				var image = dataSource[i].data.thumbnail;
			}

			else if (selectedSource === 'Digg'){
				var title = dataSource[i].content.title_alt;
				var link = dataSource[i].content.url;
				var label = dataSource[i].content.tags[0].display;
				var shares = dataSource[i].diggs.count;
				var image = dataSource[i].content.media.images[0].url;
			}
			
		Article = {
			'title': title,
			'label': label,
			'shares': shares,
			'image': image,
			'link': link
		};

		// add new article to array
		articles.push(Article);

		// add an article element to the main container
		$('#main').append('<article class="article clearfix"></article');

		// add the h1 to the last article created
		$('.article:last-of-type').append(
			'<section class="featuredImage"><img src="' 
				+ articles[i].image + 
			'"></section><section class="articleContent"><a href="' 
				+ articles[i].link + 
			'"><h3>'
				+ articles[i].title + 
			'</h3></a><h6>'
				+ articles[i].label + 
			'</h6></section><section class="impressions">'
				+ articles[i].shares + 
			'</section>'
		);
	}
}

	

