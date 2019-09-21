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
var projectOne = new Project("Marvel Hangman", "link", "./assets/images/ironman.jpg", "A JavaScript hangman game with a Marvel theme", "Tony Stark: Iron Man");
var projectTwo = new Project("Where in the World is Karma Sandio?", "link", "./assets/images/logo.png", "A map based geography game that totally doesn't violate copyrights.", "Karma Sandio Logo: She wears a big grey hat");
var projectThree = new Project("Marvel RPG", "link", "./assets/images/thor.jpg", "Role playing game to determine the strongest Avenger.", "Thor: Strongest Avenger");
//let projectFour = new Project("Marvel RPG","link","pictureLink","Role playing game to determine the strongest Avenger.");
Projects.push(projectOne);
Projects.push(projectTwo);
Projects.push(projectThree);
//Projects.push(projectFour);
//display Projects
function displayProjects() {
    var projectDiv = $('#projectlist');
    Projects.forEach(function (project) {
        var projectCard = $('<div>').attr("class", "card card-rotating text-center");
        var imageDiv = $("<div>").attr("class", "card-up");
        var image = $('<img>').attr("class", "");
        image.attr("src", project.pictureUrl);
        image.attr("alt", project.pictureAlt);
        image.attr("height", "200em");
        image.attr("width", "200em");
        var cardBody = $('<div>').attr("class", "card-body");
        var projectTitle = $("<h4>").attr("class", "font-weight-bold mb-3");
        projectTitle.text(project.name);
        projectCard.append(imageDiv);
        projectCard.append(projectTitle);
        imageDiv.append(image);
        projectCard.append(cardBody);
        projectDiv.append(projectCard);
    });
}
displayProjects();
