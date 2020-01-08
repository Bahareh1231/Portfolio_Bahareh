"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    "use strict";

    var app = {}; // make side nav appear once the header is out of view

    app.showNav = function () {
      $(window).scroll(function () {
        var wS = $(this).scrollTop();
        var hT = $('#work').offset().top;
        var width = $(window).width();

        if (wS > hT && width > 500) {
          $('nav').removeClass('headerNav').addClass('headerNavFixed');
          $('.headerNavList').addClass('hideNavNoEffect hideNav');
        } else {
          $('nav').addClass('headerNav').removeClass('headerNavFixed');
          $('.headerNavList').removeClass('hideNav hideNavNoEffect showNav');
        }
      });
    }; // hamburger menu in nav


    app.hamburgerMenu = function () {
      $('.hamburgerMenuLink').on('click', function (e) {
        e.preventDefault();
        $('.headerNavList').toggleClass('hideNav showNav').removeClass('hideNavNoEffect');
      });
    };

    app.hamburgerMenu2 = function () {
      $('.hamburgerMenuLink2').on('click', function (e) {
        e.preventDefault();
        $('.navOverlay').toggleClass('hideNavOverlay showNavOverlay');
      });
    };

    app.closeOverlay = function () {
      $('.closeOverlay').on('click', function (e) {
        e.preventDefault();
        $('.navOverlay').addClass('hideNavOverlay').removeClass('showNavOverlay');
      });
    };

    app.goToLink = function () {
      $('.navItem').on('click', function () {
        $('.navOverlay').removeClass('showNavOverlay').addClass('hideNavOverlay');
      });
    }; // functions dealing with the work overlay 


    app.showWorkOverlay = function () {
      $('.workImage').on('click', function (e) {
        e.preventDefault();
        var $target = $(this).parent().parent();
        $target.find('.workOverlay').addClass('showWorkOverlay'); // show overlay
      });
    };

    app.showWorkOverlayFromTitle = function () {
      $('.workName a').on('click', function (e) {
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
      app.showNav();
      app.hamburgerMenu();
      app.hamburgerMenu2();
      app.closeOverlay();
      app.showWorkOverlay();
      app.hideWorkOverlay();
      app.showWorkOverlayFromTitle();
      app.goToLink();
    };

    $(function () {
      AOS.init();
      app.init();
    });
  }, {}]
}, {}, [1]);