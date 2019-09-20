console.log("Hullo world");
var Project = /** @class */ (function () {
    function Project(projectName, projectLink, projectPictureUrl, projectDescription, projectPictureAlt) {
        this.name = projectName;
        this.link = projectLink;
        this.pictureUrl = projectPictureUrl;
        this.pictureAlt = projectPictureAlt;
        this.description = projectDescription;
    }
    return Project;
}());
var Projects = [];
var projectOne = new Project("Marvel Hangman", "link", "pictureLink", "A JavaScript hangman game with a Marvel theme", "Tony Stark: Iron Man");
var projectTwo = new Project("Where in the World is Karma Sandio?", "link", "pictureLink", "A map based geography game that totally doesn't violate copyrights.", "Karma Sandio Logo: She wears a big grey hat");
var projectThree = new Project("Marvel RPG", "link", "pictureLink", "Role playing game to determine the strongest Avenger.", "Thor: Strongest Avenger");
//let projectFour = new Project("Marvel RPG","link","pictureLink","Role playing game to determine the strongest Avenger.");
Projects.push(projectOne);
Projects.push(projectTwo);
Projects.push(projectThree);
//Projects.push(projectFour);
//display Projects
function displayProjects() {
    var projectDiv = $('#projectlist');
    Projects.forEach(function (project) {
        var newProject = $('<img>');
        newProject.attr("src", project.pictureUrl);
        newProject.attr("alt", project.pictureAlt);
        projectDiv.append(newProject);
    });
}
displayProjects();
