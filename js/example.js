// ADD NEW ITEM TO END OF LIST
// creating cream list element, to be appended to the <ul> element.
var creamNode = document.createElement("li");
var creamText = document.createTextNode("Cream");
creamNode.appendChild(creamText);

// ulElement is the parent (ul) node, grabbed this to make appending and
// prepending easier.
var ulElement = document.getElementById("one").parentNode;

ulElement.appendChild(creamNode);

// ADD NEW ITEM START OF LIST


// ADD A CLASS OF COOL TO ALL LIST ITEMS


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
