$(document).ready(function(){
    $("[id*='Btn']").stop(true).on('click',function(e) {
    e.preventDefault();
    $(this).scrolld();
    });

    $("<div class='overlay'></div>").appendTo("#navbar");
    $(".overlay").on('click', function(){
    $(".navbar-header button").addClass("collapsed");
    $("#navbar").removeClass("in");
    });

    // Dropdown cards
    $('.eq-ui-dropdown-close').on('click', function(){
        $('.dropdown-trigger').dropdown({close: true})
    })

    $("nav").navigation();

  $("nav").on("open.navigation", function() {
    $("#nav-icon1").addClass('open');
    $(".nav.navbar-nav, .left-footer-nav").removeClass('show-down');
    $(".nav.navbar-nav, .left-footer-nav").addClass('show-up');
    TweenMax.staggerTo('.nav.show-up li a', 0.5, {ease:SteppedEase.easeInOut, y:0, opacity:1},0.2)
    TweenMax.staggerTo('.left-footer-nav.show-up .menu2', 0.4, {delay:1.2, ease:SteppedEase.easeIn, y:0, opacity:1},0.1)
    TweenMax.staggerTo('.left-footer-nav.show-up .social-media ul li', 0.4, {delay:1.3, ease:SteppedEase.easeIn, y:0, scale:1, opacity:1},0.1)

  }).on("close.navigation", function() {
    $("#nav-icon1").removeClass('open');
    $(".nav.navbar-nav, .left-footer-nav").removeClass('show-up');
    $(".nav.navbar-nav, .left-footer-nav").addClass('show-down');
    TweenMax.staggerTo('.nav.show-down li a', 0.1, {y:30, opacity:0},0.1)
    TweenMax.staggerTo('.left-footer-nav.show-down .menu2', 0.1, {y:-10, opacity:0},0.1)
    TweenMax.staggerTo('.left-footer-nav.show-down .social-media ul li', 0.1, {y:-100, scale:0.5, opacity:0},0.1)
  });

  var el = $('.slider-navigator');

  $(el).find('a').click(function(e){

     // You might want to remove this so click on scroll will work
     e.preventDefault();
     $(el).find('a').each(function() {
       $(this).removeClass('active');
     })
     $(this).addClass('active');
  })

  if (window.location.href.indexOf("webfactories.co.uk") > -1){
    $(".header-menu").find("img").attr("src", "img/webfactories-uk-white-logo.png");
    $("ul.eq-ui-collapsible li#wf-uk").find(".eq-ui-collapsible-body").css("display", "block").parents().addClass("active");

  }
  else if (window.location.href.indexOf("webfactories.com.au") > -1){
    $(".header-menu").find("img").attr("src", "img/webfactories-au-white-logo.png");
    $("ul.eq-ui-collapsible li#wf-au").find(".eq-ui-collapsible-body").css("display", "block").parents().addClass("active");

  }
  else
    $("ul.eq-ui-collapsible li#wf-au").find(".eq-ui-collapsible-body").css("display", "block").parents().addClass("active");


});

$(window).on('scroll', function() {
    var scrolled = $(this).scrollTop();

    $('.boxes, #half-grid .col-left, #half-grid .col-right, #web-services-commerce .col-middle, .lead-boxes').filter(function() {
      return scrolled >= $(this).offset().top-400;
    }).addClass('in-view').each(function(){
      $(this).trigger('classChange');
    })
});

$('.boxes, #half-grid .col-left, #half-grid .col-right, #web-services-commerce .col-middle, .lead-boxes').on('classChange', function(e){

  TweenMax.staggerFromTo('#web-services-commerce .col-middle.in-view', 1, {opacity: 0},{opacity:1}, 0.2);
  TweenMax.staggerFromTo('#web-services-commerce .col-middle.in-view svg', 1, {opacity: 1, delay:1},{opacity:0, delay:1}, 0.2);
  TweenMax.staggerFromTo('#web-services-commerce .col-middle.in-view img.tablet', 1, {opacity: 0}, {opacity: 1, delay:1}, 0.2);
  TweenMax.staggerFromTo('#web-services-commerce .col-middle.in-view .services-icons li', 1, {opacity: 0, scale:0.5}, {ease:Back.EaseInOut, scale:1, opacity: 1, delay:1, force3D:true}, 0.2);
  TweenMax.staggerFromTo('#web-services-commerce .col-middle.in-view .services-icons li', 1, {opacity: 0, scale:0.5}, {ease:Back.EaseInOut, scale:1, opacity: 1, delay:1, force3D:true}, 0.2);
  TweenMax.staggerFromTo('#half-grid .col-left.in-view .row img', 1, {opacity: 0},{opacity:1}, 0.2);
  TweenMax.staggerFromTo('#half-grid .col-right.in-view #modern-tech', 1, {opacity: 0},{opacity:1}, 0.2);
  TweenMax.staggerFromTo('#half-grid .col-right.in-view #modern-tech svg', 1, {opacity: 1, delay:1},{opacity:0, delay:1}, 0.2);
  TweenMax.staggerFromTo('#half-grid .col-right.in-view #modern-tech .modern', 1, {opacity: 0}, {opacity: 1, delay:1}, 0.2);

  $(this).off(e);
});




var b = $('body'),
    aes = b.find('.animate-earth-small'),
    ael = b.find('.animate-earth-large');

var sliderScene = b.find('svg.drawsvg').drawsvg({
  duration: 1800,
  stagger: 100,
  callback: function(){
    $("svg.drawsvg").css('opacity', '0');
    $(b).find('.hided').each(function(){
      $(this).removeClass('hided');
      $(this).addClass('showed');
    });
    TweenMax.to(".demo-buttons p", 0.75, {y: "0px", delay: 1.4, opacity: 1})
    TweenMax.to(".demo-buttons a", 0.75, {y: "0px", delay: 1.5, opacity: 1})
    TweenMax.to(aes, 2.2, {opacity: 1});
    TweenMax.to(ael, 2.5, {opacity: 1});
    TweenMax.to(aes, 90, {ease: Power0.easeNone, rotation: "+=360", transformOrigin: 'center center', repeat:-1, force3D: true })
    TweenMax.to(ael, 95, {ease: Power0.easeNone, rotation: "-=360", transformOrigin: 'center center', repeat:-1, force3D: true })
  }
});


sliderScene.drawsvg('animate')






TweenMax.staggerTo('.nav.show-down li a', 0.1, {opacity:0, y:30},0.1)
TweenMax.staggerTo('.left-footer-nav.show-down .social-media ul li', 0.1, {y:-100, scale:0.5, opacity:0},0.1)
TweenMax.staggerTo('.left-footer-nav.show-down .menu2', 0.1, {y:-10, opacity:0},0.1)

TweenMax.staggerFrom('.slider-navigator a', 2, {scale:0.5, x:-10, y:-10, opacity:0, ease:Back.easeInOut},0.2)

// Install Cookies
document.addEventListener('DOMContentLoaded', function(event) {
cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
'Got it', 'learn more', '/cookies');
});

