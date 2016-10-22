/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/


function addToList(list, newThing) {

  // create an li
  //var newThingLi = document.createElement('li');
   var newThingLi = $('<li></li>');

  // create text node from input value 
  // is there a way to do this in jquery?
  var newThingText = document.createTextNode(newThing);

  // append the li to include the text
  newThingLi.append(newThingText);

  // and the ul to include the li
  list.append(newThingLi);
}


window.onload = function() {

    // get the button
    var button = $('#new-thing-button');

    // get the list
    var thingList = $('#fav-list');

    button.click(function(event){

      event.preventDefault();

      // get the value of the input
      var newThing = $('#new-thing').val();

      // add to list
      addToList(thingList, newThing);

      var form = $('form')[0];
      form.reset();
    });
};

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


