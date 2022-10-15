
let individualProjectPage;
let $projectTitle;
let $projectDescription;
let JSONDataI;


$(document).ready(setup);

function setup() {
    individualProjectPage = location.search.substring(1);
    $projectTitle = $('#project-header h2');
    $projectDescription = $('#project-header p');
    getJSONDataI();
    // getProject(individualProjectPage);
    console.log(individualProjectPage)
}

function getJSONDataI() {
    $.getJSON("../data/projects.json", function(data){
        JSONDataI = data;
        console.log(JSONDataI);
        getProject(individualProjectPage);
    }).fail(function(){
        console.log("An error has occurred.");
    });
}

function getProject(p) {
    // console.log(JSONDataI.fabrication);
    // console.log(p);
    let titleValue;
    let descriptionValue;
    let images = [];
    for (var key in JSONDataI.fabrication) {
        if (JSONDataI.fabrication.hasOwnProperty(key)) {
            // console.log("fabrication");
            // console.log(key + " -> " + JSONDataI.fabrication[key].page);
            if (JSONDataI.fabrication[key].page === p) {
                titleValue = JSONDataI.fabrication[key].title;
                descriptionValue = JSONDataI.fabrication[key].description;
                images = [JSONDataI.fabrication[key].thumbnail, JSONDataI.fabrication[key].picture2, JSONDataI.fabrication[key].picture3, JSONDataI.fabrication[key].picture4, JSONDataI.fabrication[key].picture5, JSONDataI.fabrication[key].picture6,JSONDataI.fabrication[key].picture7];

            }
            if (JSONDataI.graphicdesignuxui.hasOwnProperty(key)) {
                // console.log("graphic");
                if (JSONDataI.graphicdesignuxui[key].page === p) {
                    titleValue = JSONDataI.graphicdesignuxui[key].title;
                    descriptionValue = JSONDataI.graphicdesignuxui[key].description;
                    images = [JSONDataI.graphicdesignuxui[key].thumbnail, JSONDataI.graphicdesignuxui[key].picture2, JSONDataI.graphicdesignuxui[key].picture3, JSONDataI.graphicdesignuxui[key].picture4, JSONDataI.graphicdesignuxui[key].picture5, JSONDataI.graphicdesignuxui[key].picture6,JSONDataI.graphicdesignuxui[key].picture7];

                } 
            }
            if (JSONDataI.arteducation.hasOwnProperty(key)) {
                // console.log("arte");
                if (JSONDataI.arteducation[key].page === p) {
                    titleValue = JSONDataI.arteducation[key].title;
                    descriptionValue = JSONDataI.arteducation[key].description;
                    images = [JSONDataI.arteducation[key].thumbnail, JSONDataI.arteducation[key].picture2, JSONDataI.arteducation[key].picture3];
                } 
            }
        }
        displayProjects(titleValue, descriptionValue, images)
    }
}

function displayProjects(title, description, images){
    resetCurrentProject();
    $projectTitle.text(title);
    $projectDescription.text(description);
    for (let i = 0; i < images.length; i++) {
        if (images[i]){
            $('#project-images').append("<div class=big-image><img src='../images/" + images[i] + "'></img></div>");  
        }
        // $('#project-images').append("<img src='../images/" + images[i] + "'></img>");   
        // $('#project-images').append("<div class=big-image><img src='../images/" + images[i] + "'></img></div>");  
    }
}

function resetCurrentProject() {
    $('#project-images').empty();
}