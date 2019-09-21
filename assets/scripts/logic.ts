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

let projectOne = new Project("Marvel Hangman","https://okyfunoky.github.io/unit-4-game/","./assets/images/ironman.jpg","A JavaScript hangman game with a Marvel theme", "Tony Stark: Iron Man");
let projectTwo = new Project("Where in the World is Karma Sandio?","https://okyfunoky.github.io/whereinseattleiscarmen/","./assets/images/logo.png","A map based geography game that totally doesn't violate copyrights.", "Karma Sandio Logo: She wears a big grey hat");
let projectThree = new Project("Marvel RPG","https://okyfunoky.github.io/wordguessgame/","./assets/images/thor.jpg","Role playing game to determine the strongest Avenger.", "Thor: Strongest Avenger");
//let projectFour = new Project("Marvel RPG","link","pictureLink","Role playing game to determine the strongest Avenger.");

Projects.push(projectOne);
Projects.push(projectTwo);
Projects.push(projectThree);
//Projects.push(projectFour);

//display Projects
function displayProjects() {
    var projectDiv = $('#projectlist');
    Projects.forEach(function (project) {
        let projectCard = $('<div>').attr("class","card project-card text-center");
        let imageDiv = $("<div>").attr("class","card-up");
        let image = $('<img>').attr("class","");
        image.attr("src", project.pictureUrl);
        image.attr("alt", project.pictureAlt);
        image.attr("height","200em"); 
        image.attr("width","200em");
        let cardBody = $('<div>').attr("class","card-body");
        let projectTitle = $("<a>").attr("class","font-weight-bold");
        let projectDescription = $('<p>');
        projectDescription.text(project.description);
        projectTitle.text(project.name);
        projectTitle.attr("href",project.link);
        projectCard.append(imageDiv);
        projectCard.append(projectTitle);
        projectCard.append(projectDescription);
        imageDiv.append(image);
        projectCard.append(cardBody);
        projectDiv.append(projectCard);
    });
}
displayProjects();