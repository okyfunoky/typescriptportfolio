console.log("Hullo world");

class Project {
    name: string;
    link: string;
    pictureUrl: string;
    description: string;
    pictureAlt: string;

    constructor(projectName: string, projectLink: string, projectPictureUrl: string, projectDescription: string, projectPictureAlt){
        this.name = projectName;
        this.link = projectLink;
        this.pictureUrl = projectPictureUrl;
        this.pictureAlt = projectPictureAlt;
        this.description = projectDescription;
    }
}

let Projects: Array<Project> = [];

let projectOne = new Project("Marvel Hangman","link","pictureLink","A JavaScript hangman game with a Marvel theme", "Tony Stark: Iron Man");
let projectTwo = new Project("Where in the World is Karma Sandio?","link","pictureLink","A map based geography game that totally doesn't violate copyrights.", "Karma Sandio Logo: She wears a big grey hat");
let projectThree = new Project("Marvel RPG","link","pictureLink","Role playing game to determine the strongest Avenger.", "Thor: Strongest Avenger");
//let projectFour = new Project("Marvel RPG","link","pictureLink","Role playing game to determine the strongest Avenger.");

Projects.push(projectOne);
Projects.push(projectTwo);
Projects.push(projectThree);
//Projects.push(projectFour);

