// JavaScript source code

function addH1(_text) {
    var h = document.createElement("H1");
    var t = document.createTextNode(_text);
    h.appendChild(t);
    document.body.appendChild(h);
}

function addH2(_text) {
    var h = document.createElement("H2");
    var t = document.createTextNode(_text);
    h.appendChild(t);
    document.body.appendChild(h);
}
function addH3(_text) {
    var h = document.createElement("H3");
    var t = document.createTextNode(_text);
    h.appendChild(t);
    document.body.appendChild(h);
}
function addH4(_text) {
    var h = document.createElement("H4");
    var t = document.createTextNode(_text);
    h.appendChild(t);
    document.body.appendChild(h);
}
function addH5(_text) {
    var h = document.createElement("H5");
    var t = document.createTextNode(_text);
    h.appendChild(t);
    document.body.appendChild(h);
}
function addH6(_text) {
    var h = document.createElement("H6");
    var t = document.createTextNode(_text);
    h.appendChild(t);
    document.body.appendChild(h);
}
var myHeader = addH1("Headertext here");


function menu() {
    //create the div for the menu
    var menu = document.createElement("DIV");
    menu.style.position = "relative";
    menu.style.display = "inline-block";

    document.body.appendChild(menu);
 
    //create and add a menubutton to the menudiv
    var menubutton = document.createElement("BUTTON");

    menubutton.style.backgroundColor = "#4CAF50";
    menubutton.style.color = "white";
    menubutton.style.padding = "16px";
    menubutton.style.fontSize = "16px";
    menubutton.style.border = "none";


    //add some text to the button
    menubutton.innerText = "my menu goes here";

    menu.appendChild(menubutton);

    //add another div that will hold the links
    var dropDownContent = document.createElement("DIV");
    dropDownContent.style.display = "none";
    dropDownContent.style.position = "absolute";
    dropDownContent.style.backgroundColor = "#f1f1f1";
    dropDownContent.style.minWidth = "160px";
    dropDownContent.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    dropDownContent.style.zIndex = "1";

    //adds the dropdowncontent-div to the menubutton
    menubutton.appendChild(dropDownContent);

    var links = [
        ["start", "index.html"],
        ["sida2", "sida2.html"],
        ["sida3", "sida3.html"],
        
    ];

    for (var i = 0; i < links.length; i++) {
    var list = document.createElement("LI");
    var link = document.createElement("A");
        link.style.color = "black";
        link.style.padding = "12px 16px";
        link.style.textDecoration = "none";
        link.style.display = "block";
        
        link.href = links[i][1];
        link.appendChild(document.createTextNode(links[i][0]));
        list.appendChild(link)
        dropDownContent.appendChild(list);
    }

    function hover() {

        link.style.backgroundColor = "#ddd";
        dropDownContent.style.display = "block";
        menubutton.style.backgroundColor = "#3e8e41";

    }
    function noHover() {
        link.style.backgroundColor = "inherit";
        dropDownContent.style.display = "none";
        menubutton.style.backgroundColor = "#4CAF50";
    }
    menubutton.onmouseover = function () { hover() };
    menubutton.onmouseout = function () { noHover()};
}





  

function addimage() {

}

menu();
