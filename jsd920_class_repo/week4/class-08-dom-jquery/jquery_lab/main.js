/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/


function addToList(list, newThing) {
	// create an li
  var newThingLi = document.createElement('li');

  // create text node from input value 
	var newThingText = $(newThingInput).val();


  // append the li to include the text
	$(newThingLi).append(newThingText);

  // append the ul to include the li
	// list.appendChild(newThingLi);
  $('#fav-list').append(newThingLi);
}

window.onload = function() {

    // get the button
  	var button = $('new-thing-button');

    // get the list
  	var thingList = $('fav-list');

    // get the input
  	var newThingInput = $('new-thing');


  	$('button').click = function(event){


  		event.preventDefault();

      // get the value of the input
  		var newThing = newThingInput.value;

      // add to list
  		addToList(thingList, newThing);

		// var form = document.getElementsByTagName('form');
		// form.reset();
  	};
};



function addToList(list, newThing) {
	// create an li
	// var newThingLi = document.createElement('li');
	var newThingLi = $('li');

	//var newThingText = document.createTextNode(newThing);

	// newThingLi.appendChild(newThingText);
	newThingLi.append(newThing);
	
	//list.appendChild(newThingLi);
	$(ul).html('<li></li>');
}

window.onload = function() {

  	var button = $('new-thing-button');
  	var thingList = $('fav-list');
  	var newThingInput = $('new-thing');

  	button.onclick = function(event){
  		event.preventDefault();
  		var newThing = newThingInput.val();
  		addToList(thingList, newThing);

		// var form = document.getElementsByTagName('form');
		// form.reset();
  	};
};