// JavaScript only (no JQuery!): Color effect on selected menu element

var activateElement = function(element) {
  // initialize variable for empty array named navElements
  var navElements = [],
      content = [],
      test = 0;

  //grab all elements with the class navElements and store them in var navElements
  navElements = document.getElementsByClassName("navElements");
  content = document.getElementsByClassName("content");

  // loop over array
  for (var i = 0, length = navElements.length; i < length; i++) {
    // check if an element in the array has the class name 'selected'
    if (navElements[i].getAttribute("class") === "navElements selected") {
      // change class to just "navElements" --> unselect
      navElements[i].setAttribute("class", "navElements");
    }
  }

  // change class of clicked element to "navElements selected" --> select
  element.setAttribute("class", "navElements selected");

  // loop over array to make respective content visible
  for (var j = 0, length = navElements.length; j < length; j++) {
    // check if an element in the array has the class name 'selected'
    if (navElements[j].getAttribute("class") === "navElements selected") {
      // if so, match index of this nav element to content element of same index
      // and set this content element to visible
      content[j].setAttribute("class", "content visible");
    }
    // else set to not visible
    else {
      content[j].setAttribute("class", "content");
    }
  }
};
