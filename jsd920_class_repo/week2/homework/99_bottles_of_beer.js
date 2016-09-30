// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

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