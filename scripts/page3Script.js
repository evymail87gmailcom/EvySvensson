// JavaScript source code

function menu() {
    var topNav = document.createElement("DIV");
    topNav.className = "topNav";
    document.body.appendChild(topNav);

    var home = document.createElement("a");
    topNav.appendChild(home);
    var indexText = document.createTextNode("Start");
    home.setAttribute("href", "index.html");
    home.appendChild(indexText);


    var aboutMe = document.createElement("a");
    topNav.appendChild(aboutMe);
    var aboutMeText = document.createTextNode("About me");
    aboutMe.setAttribute("href", "sida2.html");
    aboutMe.appendChild(aboutMeText);


    var projects = document.createElement("a");
    projects.className = "active";
    topNav.appendChild(projects);
    var projectText = document.createTextNode("Projects");
    projects.setAttribute("href", "sida3.html");
    projects.appendChild(projectText);



}

function addfooter() {
    var h = document.createElement("H4");
    h.className = "footer";
    document.body.appendChild(h);
    var t = document.createTextNode("evymail87@gmail.com")
    h.appendChild(t);

}



menu();

addfooter();