/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {
	// create an li
  var newThingLi = document.createElement('li');

  // create text node from input value 
	var newThingText = document.createTextNode(newThing);

  // append the li to include the text
	newThingLi.appendChild(newThingText);

  // and the ul to include the li
	list.appendChild(newThingLi);
}

window.onload = function() {

    // get the button
  	var button = document.getElementById('new-thing-button');

    // get the list
  	var thingList = document.getElementById('fav-list');

    // get the input
  	var newThingInput = document.getElementById('new-thing');

  	button.onclick = function(event){


  		event.preventDefault();

      // get the value of the input
  		var newThing = newThingInput.value;

      // add to list
  		addToList(thingList, newThing);

		// var form = document.getElementsByTagName('form');
		// form.reset();
  	};
};

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


