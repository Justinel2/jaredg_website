
const fullOpacity = 1; 
const lowOpacity = 0.3;

let isOnMainMenu = false;
let isOnTabMenu = false;


let $menuItems;

$(document).ready(setup);

function setup() {
$menuItems = $('#home-menu-selection-worktype ul a li');
$tabItems = $('#projects-menu div');

$('#home-menu-selection-worktype ul').mouseenter(function(){isOnMainMenu=true;});
$('#projects-menu').mouseenter(function(){isOnTabMenu=true;});

$menuItems.hover(makeItemActive, makeItemInactive);
$menuItems.mouseenter(blurSiblingsParent).mouseleave(replaceOpacityParent);

$tabItems.hover(blurSiblings, replaceOpacity);
// $tabItems.mouseenter(blurSiblings).mouseleave(replaceOpacity);

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