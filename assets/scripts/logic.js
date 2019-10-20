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
var projectOne = new Project("Marvel Hangman", "https://okyfunoky.github.io/wordguessgame/", "./assets/images/ironman.jpg", "A JavaScript hangman game with a Marvel theme", "Tony Stark: Iron Man");
var projectTwo = new Project("Where in the World is Karma Sandio?", "https://okyfunoky.github.io/whereinseattleiscarmen/", "./assets/images/logo.png", "A map based geography game that totally doesn't violate copyrights.", "Karma Sandio Logo: She wears a big grey hat");
var projectThree = new Project("Marvel RPG", "https://okyfunoky.github.io/unit-4-game/", "./assets/images/thor.jpg", "Role playing game to determine the strongest Avenger.", "Thor: Strongest Avenger");
var projectFour = new Project("Marvel Dating Game", "https://guarded-garden-84279.herokuapp.com", "./assets/images/ironman.jpg", "A simple survey style app.", "Iron Avenger");
var projectFive = new Project("Space Cats Trading Game", "https://spacecatstrade.herokuapp.com", "./assets/images/SpaceCats.PNG", "A trading game.", "Space Cats play board");
Projects.push(projectOne);
Projects.push(projectTwo);
Projects.push(projectThree);
Projects.push(projectFour);
Projects.push(projectFive);
//display Projects
function displayProjects() {
    var projectDiv = $('#projectlist');
    Projects.forEach(function (project) {
        var projectCard = $('<div>').attr("class", "card project-card text-center");
        var imageDiv = $("<div>").attr("class", "card-up");
        var image = $('<img>').attr("class", "");
        image.attr("src", project.pictureUrl);
        image.attr("alt", project.pictureAlt);
        image.attr("height", "200em");
        image.attr("width", "200em");
        var cardBody = $('<div>').attr("class", "card-body");
        var projectTitle = $("<a>").attr("class", "font-weight-bold");
        var projectDescription = $('<p>');
        projectDescription.text(project.description);
        projectTitle.text(project.name);
        projectTitle.attr("href", project.link);
        projectCard.append(imageDiv);
        projectCard.append(projectTitle);
        projectCard.append(projectDescription);
        imageDiv.append(image);
        projectCard.append(cardBody);
        projectDiv.append(projectCard);
    });
}
$('body').scrollspy({ target: '#mainNav' });
displayProjects();
