//sets up links to required div ids
//const aboutTitle = document.querySelectorAll("aboutTitle");
const aboutContent = document.getElementById("aboutContent");
const aboutTitle = document.getElementById("aboutTitle");
const aboutContentLinks = document.getElementById("aboutContentLinks");

const projectContent = document.getElementById("projectContent");
const projectTitle = document.getElementById("projectTitle");
const projectContentLinks = document.getElementById("projectContentLinks");

const contactContent = document.getElementById("contactContent");
const contactTitle = document.getElementById("contactTitle");
const contactContentLinks = document.getElementById("contactContentLinks");

const navBar = document.querySelectorAll(".navBar");

//mouse over functions
const clickedAbout = () => {
    if(aboutContent.id == "aboutContent"){
        aboutContent.id = "aboutContentShow";
        aboutContentLinks.id = "aboutContentLinksShow";

    }else{
        aboutContent.id = "aboutContent";
        aboutContentLinks.id = "aboutContentLinks";
    }
};
const clickedProject = () => {
    if(projectContent.id == "projectContent"){
        projectContent.id = "projectContentShow";
        projectContentLinks.id = "projectContentLinksShow";

    }else{
        projectContent.id = "projectContent";
        projectContentLinks.id = "projectContentLinks";
    }
};
const clickedContact = () => {
    if(contactContent.id == "contactContent"){
        contactContent.id = "contactContentShow";
        contactContentLinks.id = "contactContentLinksShow";

    }else{
        contactContent.id = "contactContent";
        contactContentLinks.id = "contactContentLinks";
    }
};
const linksClicked = () => {
    projectContent.id = "projectContent";
    projectContentLinks.id = "projectContentLinks";
    aboutContent.id = "aboutContent";
    aboutContentLinks.id = "aboutContentLinks";
    contactContent.id = "contactContent";
    contactContentLinks.id = "contactContentLinks";
}
//wiring new
/*const wiringNavBar = aboutTitle.forEach(x => {
    x.addEventListener("mouseover",mouseOver);
    x.addEventListener("mouseout",mouseOut);
    });*/
aboutTitle.addEventListener("click", clickedAbout);
projectTitle.addEventListener("click", clickedProject);
contactTitle.addEventListener("click", clickedContact);
const navBarWiring = navBar.forEach( x => x.addEventListener("click", linksClicked));