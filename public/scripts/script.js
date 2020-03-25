"use strict";

var counter = 0;
var scrolling = false;
var previousScroll = 0;
"use strict"; //smooth scrolling


$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  $('body').removeClass('noScroll');
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  }, 'swing');
  $('.navOverlay').removeClass('showNavOverlay');
  setTimeout(function () {
    $('.navOverlay').addClass('hideNavOverlay');
  }, 300);
  $('header').removeClass('overflow');
});
var app = {}; // make side nav appear once the header is out of view
// load header image in 0.5 seconds
// SCROLLING EVENTS
// scroll event 

app.scrollingEvent = function () {
  $(window).scroll(function () {
    scrolling = true;
  });
}; // run functions that have to do with scrolling


app.scrollEffects = function () {
  setInterval(function () {
    if (scrolling = true) {
      scrolling = false;
      app.desktopHeader();
    } // end of if scrolling

  }, 250); // end of interval
};

app.desktopHeader = function () {
  var headerTop = $("header").offset().top;
  var headerBottom = $("header").offset().top + $("header").outerHeight();
  var screenBottom = $(window).scrollTop() + window.innerHeight;
  var screenTop = $(window).scrollTop();
  var currentScroll = $(window).scrollTop(); //scrolling up 

  if (currentScroll < previousScroll) {
    //scrolling up and not at the top of the screen
    if (screenTop > 100) {
      $('.headerNav').removeClass('hideHeaderMenu').addClass('menuDesktopScroll');
    } // at the top of screen


    if (screenTop < 99) {
      $('.headerNav').removeClass('menuDesktopScroll hideHeaderMenu');
    }
  } //scrolling down 


  if (currentScroll > previousScroll) {
    // not at the top of the screen
    if (screenTop > 100) {
      $('.headerNav').addClass('hideHeaderMenu');
    } // at the top of the screen


    if (screenTop < 99) {
      $('.headerNav').removeClass('menuDesktopScroll hideHeaderMenu');
    }
  } // end of scrolling down


  previousScroll = currentScroll;
};

app.loadHeader = function () {
  var imageUrl = '../assets/background3.jpg';
  var defaultImageUrl = '../../assets/background3small.jpg';
  $.when($("header").css("background-image", 'url(' + imageUrl + '), url(' + defaultImageUrl + ')')).done($("header").fadeIn(10000));
};

app.hamburgerMenu2 = function () {
  $('.hamburgerMenuLink2').on('click', function (e) {
    e.preventDefault();
    $('.navOverlay').removeClass('hideNavOverlay');
    setTimeout(function () {
      $('.navOverlay').addClass('showNavOverlay');
    }, 300);
  });
};

app.closeOverlay = function () {
  $('.closeOverlay').on('click', function (e) {
    e.preventDefault();
    $('.navOverlay').removeClass('showNavOverlay');
    setTimeout(function () {
      $('.navOverlay').addClass('hideNavOverlay');
    }, 300);
  });
};

app.showWorkOverlay = function () {
  $('.workImage').on('click', function (e) {
    e.preventDefault();
    var $target = $(this).parent().parent();
    $target.find('.workOverlay').addClass('showWorkOverlay'); // show overlay
  });
};

app.hideWorkOverlay = function () {
  $('.closeWorkOverlay').on('click', function (e) {
    e.preventDefault();
    var $target = $(this).parent();
    $target.removeClass('showWorkOverlay'); // hide overlay
  });
};

app.init = function () {
  app.loadHeader();
  app.hamburgerMenu2();
  app.closeOverlay();
  app.showWorkOverlay();
  app.hideWorkOverlay();
  app.scrollEffects();
  app.scrollingEvent();
};

$(function () {
  AOS.init();
  app.init();
});