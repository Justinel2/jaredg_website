
let activeCategory;
let JSONData;
let $categoryTabs;
let $categoryIDHomepage;
let projectsOfCategory;

$(document).ready(setup);

function setup() {
$categoryTabs = $('#projects-menu div');
$categoryIDHomepage = location.search.substring(1);

getJSONData();

$categoryTabs.on('click', getActiveTab);
$('#projects-gallery a').on('click', getProject(location.search.substring(1)));


}

function getJSONData() {
    $.getJSON("../data/projects.json", function(data){
        JSONData = data;
        console.log(JSONData);
        getFirstActiveTab($categoryIDHomepage);
    }).fail(function(){
        console.log("An error has occurred.");
    });
}


function getFirstActiveTab(id) {
    let firstActiveID;
    switch(id) {
        case "f":
          $("#fabrication-tab").addClass("active");
          $("#fabrication-tab").siblings().animate({opacity: lowOpacity}, 500);
        firstActiveID = "fabrication-tab";
          break;
        case "g":
            $("#graphic-design-tab").addClass("active");
            $("#graphic-design-tab").siblings().animate({opacity: lowOpacity}, 500);
            firstActiveID = "graphic-design-tab";
          break;
        case "a":
            $("#art-education-tab").addClass("active");
            $("#art-education-tab").siblings().animate({opacity: lowOpacity}, 500);
            firstActiveID = "art-education-tab";
            break;
        default:
            $("#fabrication-tab").addClass("active");
            $("#fabrication-tab").siblings().animate({opacity: lowOpacity}, 500);
            firstActiveID = "fabrication-tab";
      }
    //   console.log(id);
      getProjects(firstActiveID);
}


function getActiveTab() {
    resetActiveTab();
    $(this).addClass("active");
    // $(this).siblings().animate({opacity: '0.5'}, 500);
    // console.log($categories.attr('class'));
    removeCurrentProjects()
    getProjects($(this).attr('id'));
}

function resetActiveTab() {
    $categoryTabs.removeClass("active");
    // $categoryTabs.animate({opacity: '1'}, 500);
}

function removeCurrentProjects() {
    $('#projects-gallery').empty();
}

function getProjects(id){
    switch(id) {
        case "fabrication-tab":
          projectsOfCategory = JSONData.fabrication;
          break;
        case "graphic-design-tab":
          projectsOfCategory = JSONData.graphicdesignuxui;
          break;
        case "art-education-tab":
          projectsOfCategory = JSONData.arteducation;  
          break;
        default:
          projectsOfCategory = JSONData.fabrication;    
    }
    console.log(projectsOfCategory);
    displayProjects(projectsOfCategory);
}

function displayProjects(projects){
    for (var key in projects) {
        if (projects.hasOwnProperty(key)) {
            console.log(key + " -> " + projects[key].title);
            $('#projects-gallery').append("<a href='../pages/project.html?" + projects[key].page + "'><div id='" + projects[key].page + "' class='project-list-element-thumbnail'></div><div class='project-caption'><p>" + projects[key].title + "</p></div></a>");
            $('#'+ projects[key].page).css('background-image',"url('../images/" + projects[key].thumbnail + "')");
        }
    }
    console.log(JSONData);
}

