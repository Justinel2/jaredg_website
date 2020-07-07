
let $iconNav;
let $navLink
let $leftArrow;
let $rightArrow;

let slideImages = [];
let slideCaptions = [];
let countSlider = 0;
let animationV = true;
let animationH = true

$(document).ready(setup);
console.log("start");

function setup() {
  $iconNav = $('.img-icon');
  $navLink = $('.items');

  $leftArrow = $('#left-arrow-area');
  $rightArrow = $('#right-arrow-area');

  $('.link').hover(showIcon,removeIcon);
  $leftArrow.on('click', goBackSlider);
  $rightArrow.on('click', goNextSlider);

  slideImages.push("icons/_MG_9655_crop.jpg");
  slideImages.push("icons/cassette1.jpg");
  slideImages.push("icons/bag1_reduced.jpg");
  slideImages.push("icons/game5.jpg");

  slideCaptions.push("Coffee Table Low, 2019 +");
  slideCaptions.push("Cassette Tape Organizer, 2019 +");
  slideCaptions.push("Red Onion Messenger Bag, 2019 +");
  slideCaptions.push("Gradient Vormmaker, 2018 +");

  changeSlide();

  $('#slider-container').hover(showCaption,hideCaption);

  $('#between-arrows').on('click', expandWork);
  $('.caption').on('click', expandWork);

  $('.link').on('click', goHome);
}

function showIcon() {
  $(this).children('div').children('img').addClass('hovered-link');
}

function removeIcon() {
  $iconNav.removeClass('hovered-link');
}

function goBackSlider() {
  if (countSlider <= 0) {
    countSlider = slideImages.length-1;
  }
  else {
    countSlider--;
  }
  changeSlide();
}

function goNextSlider() {
  if (countSlider >= (slideImages.length-1)) {
    countSlider = 0;
  }
  else {
    countSlider++;
  }
  changeSlide();
}

function changeSlide() {
  $(".caption").fadeOut( 50 );
  animationV = false;
  animationH = false;
  $("#vertical-hide").css({"height": "100%"});
  $("#horizontal-hide").css({"width": "100%"});

  $('#slider-container').css({"background-image": "url("+slideImages[countSlider]+")"});

  $("#vertical-hide").animate({
    height: "-=100%"
  }, 3000, function() {
    $(".caption").fadeIn( 500 );
    $(".arrow").animate({
      opacity: "+=1"
    }, 500
  );
    animationV = true;
  });
  if (countSlider == 1) {
    $('#slider-container').css({"background-size": "contain"});
    $("#horizontal-hide").animate({
      width: "-=100%"
    }, 2000, function() {
      $(".caption").fadeIn( 500 );
      $(".arrow").animate({
        opacity: "+=1"
      }, 500
      );
      animationH = true;
    });
  }
  else {
    $('#slider-container').css({"background-size": "cover"});
    $("#horizontal-hide").animate({
      width: "-=100%"
    }, 3000, function() {
      $(".caption").fadeIn( 500 );
      $(".arrow").animate({
        opacity: "+=1"
      }, 500
      );
      animationH = true;
    });
  }
}

function showCaption() {
  $("#caption-text").text(slideCaptions[countSlider]);

  if (animationV && animationH) {
    $(".caption").fadeIn( 500 );
    $(".arrow").animate({
      opacity: "+=1"
    }, 500
    );
  }
}

function hideCaption() {
  $(".caption").fadeOut( 500 );
  $(".arrow").animate({
    opacity: "-=1"
  }, 500
  );
}

function expandWork() {
  $('#selected-work').fadeOut(1000);
  $('#about').fadeOut(1000);

  if (countSlider === 0) {
    $('.specific-work').load('html/coffee_table.html');
  }
  else if (countSlider === 1) {
    $('.specific-work').load('html/cassette.html');
  }
  else if (countSlider === 2) {
    $('.specific-work').load('html/bag.html');
  }
  else if (countSlider === 3) {
    $('.specific-work').load('html/game_gradient.html');
  }

  $('.specific-work').fadeIn(2000);
  $(".fade-scroll").css({"opacity": "0"});
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  $(window).scroll( function(){

         /* Check the location of each desired element */
         $('.fade-scroll').each( function(i){
             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height();

             if( bottom_of_window > (3*bottom_of_object/4) ){

                 $(this).animate({'opacity':'1'},1000);

             }

         });

     });
}

function goHome() {
  $('.specific-work').fadeOut(2000);
  location.reload();
}
