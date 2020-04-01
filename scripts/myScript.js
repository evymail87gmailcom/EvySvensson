
function menu() {
    var topNav = document.createElement("DIV");
    topNav.className = "topNav";
    document.body.appendChild(topNav);

    var home = document.createElement("a");
    home.className = "active";
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
    topNav.appendChild(projects);
    var projectText = document.createTextNode("Projects");
    projects.setAttribute("href", "sida3.html");
    projects.appendChild(projectText);



}

function addfooter() {
    var h = document.createElement("H4");
    h.className = "footer";
    document.body.appendChild(h);
    var t=document.createTextNode("evymail87@gmail.com")
    h.appendChild(t);
    
}

function addIdCard() {

    var card = document.createElement("DIV");
    card.className = "card";
    document.body.appendChild(card);
  
    var profileImage = document.createElement("IMG");
    profileImage.className = "profileImage";
    profileImage.setAttribute("src", "images/forest-bike-bulls-100582.jpg");
    card.appendChild(profileImage);

    var myName = document.createElement("H1");
    myName.className = "myName";
    card.appendChild(myName);

    var myTextName = document.createTextNode("Evy Svensson");
    myName.appendChild(myTextName);


    var title = document.createElement("p");
    title.className = "title";
    card.appendChild(title);
    var titleText = document.createTextNode("Student Systemdeveloper IoT");
    title.appendChild(titleText);

    var linkedIn = document.createElement("A");
    linkedIn.className = "linkedInLink";
    linkedIn.setAttribute("href","https://www.linkedin.com/in/evy-svensson");
    card.appendChild(linkedIn);

    var linkedInImage = document.createElement("img");
    linkedInImage.className = "linkedInImage";
    linkedInImage.src = "images/whitelink.png";
    linkedIn.appendChild(linkedInImage);


    var gitHubLink = document.createElement("A");
    gitHubLink.className = "gitHubLink";
    gitHubLink.setAttribute("href", "https://github.com/evymail87gmailcom?tab=repositories");
    card.appendChild(gitHubLink);

    var gitHubImage = document.createElement("img");
    gitHubImage.className = "gitHubImage";
    gitHubImage.src = "images/24233.png";
    gitHubLink.appendChild(gitHubImage);


    var button = document.createElement("button");
    button.className = "profileButton";
    card.appendChild(button);
    var buttonText = document.createTextNode("Contact");
    button.appendChild(buttonText);






}

menu();
addIdCard();
addfooter();