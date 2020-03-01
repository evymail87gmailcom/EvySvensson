// JavaScript source code

function myFunction() {
    var h = document.createElement("H1");
    var t = document.createTextNode("Hello World");
    h.appendChild(t);
    document.body.appendChild(h);
}
myFunction();