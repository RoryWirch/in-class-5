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
// creating new list element, to be added to front of the <ul> element.
var kaleNode = document.createElement("li");
var kaleText = document.createTextNode("Kale");
kaleNode.appendChild(kaleText);

// insert kaleNode before rest of children in ulElement.
ulElement.insertBefore(kaleNode, ulElement.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var nodeList = ulElement.childNodes;

for (var i = 0; i < nodeList.length; i++){
    nodeList[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
