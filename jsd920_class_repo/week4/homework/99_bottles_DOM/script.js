// # 99 Bottles of Beer - DOM Version

// Remember the 99 Bottles of Beer assignment? For this assignment, 
// you'll be creating a website that programatically displays the lyrics to that song.

// 1. You'll need to create both an .html file and a .js file (be sure to link them!)
// 2. If you plan on using jQuery, properly link to an external CDN
// 3. In your HTML file, you'll want to have an unordered list (<ul>) that will contain all of your lyrics
// 4. Each line of the song should appear inside of a list item (<li>) within that unordered list
// 5. Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!

// define the number of bottles

// create a for loop that generates the lyrics

// add the lyric to 






var numBottles = 99;

for(i = numBottles; i >= 0; i--){
	if(i > 2){
		console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i - 1) + " bottles of beer on the wall!");
	} else if(i === 2){
		console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i - 1) + " bottle of beer on the wall!");
	} else if(i === 1){
		console.log(i + " bottle of beer on the wall, " + i + " bottle of beer! Take one down, pass it around, no more bottles of beer on the wall!");
	} else {
		console.log("No more bottles of beer on the wall, no more bottles of beer! Go to the store and buy some more, " + numBottles + " bottles of beer on the wall!");
	}
}