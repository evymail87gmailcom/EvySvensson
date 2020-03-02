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
addH1("Headertext here");


function menu() {
    //create the div for the menu
    var menu = document.createElement("DIV");
        menu.className = "menu";

    document.body.appendChild(menu);
 
     //create and add a menubutton to the menudiv
     var menubutton = document.createElement("BUTTON");
         menubutton.className = "menubutton";
        
    //add some text to the button
    menubutton.innerText = "my menu goes here";

    menu.appendChild(menubutton);
    menubutton.onmouseout = function () { noHover() };
    menubutton.onmouseover = function () { hover() };

         function noHover() {
        link.style.backgroundColor = "inherit";
        dropDownContent.style.display = "none";
        menubutton.style.backgroundColor = "#4CAF50";
        }
          function hover() {

        
            dropDownContent.style.display = "block";
              menubutton.style.backgroundColor = "#3e8e41";

         }
    //add another div that will hold the links
    var dropDownContent = document.createElement("DIV");
    dropDownContent.className = "dropDownContent";


    //adds the dropdowncontent-div to the menubutton
    menubutton.appendChild(dropDownContent);

    var links = [
        ["start", "index.html"],
        ["sida2", "sida2.html"],
        ["sida3", "sida3.html"],
        
    ];

    for (var i = 0; i < links.length; i++) {
        var list = document.createElement("LI");
        list.className = "list";
        
        var link = document.createElement("A");
        link.className = "link";
       
        
        link.href = links[i][1];
        link.appendChild(document.createTextNode(links[i][0]));
        list.appendChild(link)
        dropDownContent.appendChild(list);
    }


}



function addfooter() {
    var lowDiv = document.createElement("DIV");
    lowDiv.className = "lowDiv";
    document.body.appendChild(lowDiv);
    var h = document.createElement("H4");
    h.className = "footer";
    lowDiv.appendChild(h);
    var t=document.createTextNode("here is my footer!!")
    h.appendChild(t);
    
}

  



menu();
addfooter();