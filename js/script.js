
const fullOpacity = 1; 
const lowOpacity = 0.3;

let isOnMainMenu = false;
let isOnTabMenu = false;


let $menuItems;

$(document).ready(setup);

function setup() {

 preload([
    '../images/albumcover_InnerSleeve_2.jpg',
    '../images/albumcover_jacketcover_1.jpg',
    '../images/albumcover_label_3.jpg',
    '../images/bag1_reduced.jpg',
    '../images/bag2_reduced.jpg',
    '../images/bag3_reduced.jpg',
    '../images/bag4_reduced.jpg',
    '../images/bag5_reduced.jpg',
    '../images/bag6_reduced.jpg',
    '../images/bag8_reduced.jpg',
    '../images/cassette1.jpg',
    '../images/cassette3.jpg',
    '../images/cassette4.jpg',
    '../images/cassette6.jpg',
    '../images/CoffeeTable1.jpg',
    '../images/CoffeeTable2.jpg,',
    '../images/CoffeeTable3.jpg',
    '../images/CoffeeTable4.jpg',
    '../images/CoffeeTable5.jpg',
    '../images/DART453Screenshot1.png',
    '../images/DART453Screenshot2.png',
    '../images/DART453Screenshot3.png',
    '../images/DART453Screenshot4.png',
    '../images/EnvironmentalGraphics1.png',
    '../images/EnvironmentalGraphics2.png',
    '../images/EnvironmentalGraphics3.png',
    '../images/GradientVormmaker.jpg',
    '../images/GradientVormmaker1.jpg',
    '../images/GradientVormmaker2.jpg',
    '../images/GradientVormmaker3.jpg',
    '../images/GradientVormmaker4.jpg',
    '../images/GradientVormmaker5.jpg',
    '../images/GradientVormmaker6.png',
    '../images/PassiveGallery1.jpg',
    '../images/PassiveGallery2.jpg',
    '../images/PassiveGallery3.jpg',
    '../images/Podia_1.jpg',
    '../images/Podia_2.jpg',
    '../images/puzzle_shelf_1.jpg',
    '../images/puzzle_shelf_2.jpg',
    '../images/puzzle_shelf_3.jpg',
    '../images/puzzle_shelf_4.jpg',
    '../images/puzzle_shelf_5.jpg',
    '../images/untitled_winter2019_book1.jpg',
    '../images/untitled_winter2019_book2.jpg',
    '../images/untitled_winter2019_book3.jpg',
    '../images/untitled_winter2019_book4.jpg',
    '../images/untitled_winter2019_book5.jpg',
    '../images/untitled_winter2019_book6.jpg',
    '../images/VisualImpairmentFlashCard1.png',
    '../images/VisualImpairmentFlashCard2.png',
    '../images/VisualImpairmentFlashCard3.png',
    '../images/VisualImpairmentFlashCard4.png',
    '../images/You1.JPG',
    '../images/You2.JPG',
    '../images/You3.JPG',
    '../images/You4.JPG',
    '../images/You5.JPG'
]);

$menuItems = $('#home-menu-selection-worktype ul a li');
$tabItems = $('#projects-menu div');

$('#home-menu-selection-worktype ul').mouseenter(function(){isOnMainMenu=true;});
$('#projects-menu').mouseenter(function(){isOnTabMenu=true;});

$menuItems.hover(makeItemActive, makeItemInactive);
$menuItems.mouseenter(blurSiblingsParent).mouseleave(replaceOpacityParent);

$tabItems.hover(blurSiblings, replaceOpacity);
// $tabItems.mouseenter(blurSiblings).mouseleave(replaceOpacity);

}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}


function makeItemActive() {
    $(this).addClass('active');
}

function makeItemInactive() {
    $(this).removeClass('active');
}


function blurSiblingsParent() {
    $(this).parent().siblings().animate({opacity: lowOpacity}, 50);
    $(this).parent().animate({opacity: fullOpacity}, 50);
}

function replaceOpacityParent(){
    if($('#home-menu-selection-worktype ul:hover').length != 0){
        isOnMainMenu = true;
    } else{
        isOnMainMenu = false;
    }    
    if (isOnMainMenu === false){
        console.log("bebye");
        $menuItems.parent().animate({opacity: fullOpacity}, 500);
    }
}

function blurSiblings() {
    $(this).animate({opacity: fullOpacity}, 50);
    $(this).siblings().animate({opacity: lowOpacity}, 50);
}

function replaceOpacity(){
    if($('#projects-menu:hover').length != 0){
        isOnTabMenu = true;
    } else{
        isOnTabMenu = false;
    }    
    if (isOnTabMenu === false){
        // console.log("bebye");
        $('.active').animate({opacity: fullOpacity}, 500);
        $('.active').siblings().animate({opacity: lowOpacity}, 500);
    }
}