console.log("Hullo world");

class Project {
    name: string;
    link: string;
    pictureUrl: string;
    description: string;
    pictureAlt: string;

    constructor(projectName: string, projectLink: string, projectPictureUrl: string, projectDescription: string, projectPictureAlt: string){
        this.name = projectName;
        this.link = projectLink;
        this.pictureUrl = projectPictureUrl;
        this.pictureAlt = projectPictureAlt;
        this.description = projectDescription;
    }
}

let Projects: Array<Project> = [];

let projectOne = new Project("Marvel Hangman","link","./assets/images/ironman.jpg","A JavaScript hangman game with a Marvel theme", "Tony Stark: Iron Man");
let projectTwo = new Project("Where in the World is Karma Sandio?","link","./assets/images/logo.png","A map based geography game that totally doesn't violate copyrights.", "Karma Sandio Logo: She wears a big grey hat");
let projectThree = new Project("Marvel RPG","link","./assets/images/thor.jpg","Role playing game to determine the strongest Avenger.", "Thor: Strongest Avenger");
//let projectFour = new Project("Marvel RPG","link","pictureLink","Role playing game to determine the strongest Avenger.");

Projects.push(projectOne);
Projects.push(projectTwo);
Projects.push(projectThree);
//Projects.push(projectFour);

//display Projects
function displayProjects() {
    var projectDiv = $('#projectlist');
    Projects.forEach(function (project) {
        let projectCard = $('<div>').attr("class","card card-rotating text-center");
        let imageDiv = $("<div>").attr("class","card-up");
        let image = $('<img>').attr("class","");
        image.attr("src", project.pictureUrl);
        image.attr("alt", project.pictureAlt);
        image.attr("height","200em"); 
        image.attr("width","200em"); 
        let cardBody = $('<div>').attr("class","card-body");
        let projectTitle = $("<h4>").attr("class","font-weight-bold mb-3");
        projectTitle.text(project.name);
        projectCard.append(imageDiv);
        projectCard.append(projectTitle);
        imageDiv.append(image);
        projectCard.append(cardBody);
        projectDiv.append(projectCard);
    });
}
displayProjects();