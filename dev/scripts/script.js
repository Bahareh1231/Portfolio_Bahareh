(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
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
}, {}, [1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sR0FBRyxHQUFHLEVBQVosQyxDQUVBOztBQUNBLEdBQUcsQ0FBQyxPQUFKLEdBQWMsWUFBTTtBQUNoQixFQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCLFlBQVk7QUFFekIsUUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFNBQVIsRUFBVDtBQUNBLFFBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxNQUFYLEdBQW9CLEdBQTdCO0FBQ0EsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEtBQVYsRUFBWjs7QUFHQSxRQUFJLEVBQUUsR0FBRyxFQUFMLElBQVcsS0FBSyxHQUFHLEdBQXZCLEVBQTRCO0FBQ3hCLE1BQUEsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTLFdBQVQsQ0FBcUIsV0FBckIsRUFBa0MsUUFBbEMsQ0FBMkMsZ0JBQTNDO0FBQ0EsTUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixRQUFwQixDQUE2Qix5QkFBN0I7QUFHSCxLQUxELE1BS087QUFDSCxNQUFBLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUyxRQUFULENBQWtCLFdBQWxCLEVBQStCLFdBQS9CLENBQTJDLGdCQUEzQztBQUNBLE1BQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsV0FBcEIsQ0FBZ0MsaUNBQWhDO0FBRUg7QUFDSixHQWpCRDtBQWtCSCxDQW5CRCxDLENBcUJBOzs7QUFDQSxHQUFHLENBQUMsYUFBSixHQUFvQixZQUFNO0FBQ3RCLEVBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsRUFBeEIsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBUyxDQUFULEVBQVk7QUFDNUMsSUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLElBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsV0FBcEIsQ0FBZ0MsaUJBQWhDLEVBQW1ELFdBQW5ELENBQStELGlCQUEvRDtBQUVILEdBSkQ7QUFLSCxDQU5EOztBQVFBLEdBQUcsQ0FBQyxjQUFKLEdBQXFCLFlBQU07QUFDdkIsRUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QixFQUF6QixDQUE0QixPQUE1QixFQUFxQyxVQUFVLENBQVYsRUFBYTtBQUM5QyxJQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsSUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLFdBQWpCLENBQTZCLCtCQUE3QjtBQUVILEdBSkQ7QUFLSCxDQU5EOztBQVFBLEdBQUcsQ0FBQyxZQUFKLEdBQW1CLFlBQU07QUFDckIsRUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQVMsQ0FBVCxFQUFXO0FBQ3RDLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxJQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsUUFBakIsQ0FBMEIsZ0JBQTFCLEVBQTRDLFdBQTVDLENBQXdELGdCQUF4RDtBQUVILEdBSkQ7QUFLSCxDQU5EOztBQVFBLEdBQUcsQ0FBQyxRQUFKLEdBQWUsWUFBTTtBQUNqQixFQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVk7QUFDbEMsSUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLFdBQWpCLENBQTZCLGdCQUE3QixFQUErQyxRQUEvQyxDQUF3RCxnQkFBeEQ7QUFDSCxHQUZEO0FBR0gsQ0FKRCxDLENBTUE7OztBQUVBLEdBQUcsQ0FBQyxlQUFKLEdBQXNCLFlBQU07QUFDeEIsRUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVMsQ0FBVCxFQUFXO0FBQ25DLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxRQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsTUFBUixHQUFpQixNQUFqQixFQUFkO0FBRUEsSUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLGNBQWIsRUFBNkIsUUFBN0IsQ0FBc0MsaUJBQXRDLEVBSm1DLENBSXVCO0FBRTdELEdBTkQ7QUFPSCxDQVJEOztBQVVBLEdBQUcsQ0FBQyx3QkFBSixHQUErQixZQUFNO0FBQ2pDLEVBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFTLENBQVQsRUFBVztBQUNwQyxJQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsUUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLE1BQVIsR0FBaUIsTUFBakIsRUFBZDtBQUNBLElBQUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxjQUFiLEVBQTZCLFFBQTdCLENBQXNDLGlCQUF0QyxFQUhvQyxDQUdzQjtBQUU3RCxHQUxEO0FBTUgsQ0FQRDs7QUFTQSxHQUFHLENBQUMsZUFBSixHQUFzQixZQUFNO0FBQ3hCLEVBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUIsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBUyxDQUFULEVBQVc7QUFDMUMsSUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLFFBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxNQUFSLEVBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLGlCQUFwQixFQUgwQyxDQUdGO0FBRzNDLEdBTkQ7QUFPSCxDQVJEOztBQVVBLEdBQUcsQ0FBQyxJQUFKLEdBQVcsWUFBTTtBQUNiLEVBQUEsR0FBRyxDQUFDLE9BQUo7QUFDQSxFQUFBLEdBQUcsQ0FBQyxhQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsY0FBSjtBQUNBLEVBQUEsR0FBRyxDQUFDLFlBQUo7QUFDQSxFQUFBLEdBQUcsQ0FBQyxlQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsZUFBSjtBQUNBLEVBQUEsR0FBRyxDQUFDLHdCQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsUUFBSjtBQUNILENBVEQ7O0FBV0EsQ0FBQyxDQUFDLFlBQVc7QUFDVCxFQUFBLEdBQUcsQ0FBQyxJQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsSUFBSjtBQUNILENBSEEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGFwcCA9IHt9O1xuXG4vLyBtYWtlIHNpZGUgbmF2IGFwcGVhciBvbmNlIHRoZSBoZWFkZXIgaXMgb3V0IG9mIHZpZXdcbmFwcC5zaG93TmF2ID0gKCkgPT4ge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCB3UyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7IFxuICAgICAgICBsZXQgaFQgPSAkKCcjd29yaycpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgbGV0IHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgXG4gICAgICAgIGlmICh3UyA+IGhUICYmIHdpZHRoID4gNTAwKSB7XG4gICAgICAgICAgICAkKCduYXYnKS5yZW1vdmVDbGFzcygnaGVhZGVyTmF2JykuYWRkQ2xhc3MoJ2hlYWRlck5hdkZpeGVkJyk7XG4gICAgICAgICAgICAkKCcuaGVhZGVyTmF2TGlzdCcpLmFkZENsYXNzKCdoaWRlTmF2Tm9FZmZlY3QgaGlkZU5hdicpXG4gICAgICAgICAgICBcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnbmF2JykuYWRkQ2xhc3MoJ2hlYWRlck5hdicpLnJlbW92ZUNsYXNzKCdoZWFkZXJOYXZGaXhlZCcpO1xuICAgICAgICAgICAgJCgnLmhlYWRlck5hdkxpc3QnKS5yZW1vdmVDbGFzcygnaGlkZU5hdiBoaWRlTmF2Tm9FZmZlY3Qgc2hvd05hdicpO1xuXG4gICAgICAgIH0gICAgICBcbiAgICB9KTtcbn1cblxuLy8gaGFtYnVyZ2VyIG1lbnUgaW4gbmF2XG5hcHAuaGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgICAkKCcuaGFtYnVyZ2VyTWVudUxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmhlYWRlck5hdkxpc3QnKS50b2dnbGVDbGFzcygnaGlkZU5hdiBzaG93TmF2JykucmVtb3ZlQ2xhc3MoJ2hpZGVOYXZOb0VmZmVjdCcpO1xuICAgICAgICBcbiAgICB9KVxufVxuXG5hcHAuaGFtYnVyZ2VyTWVudTIgPSAoKSA9PiB7XG4gICAgJCgnLmhhbWJ1cmdlck1lbnVMaW5rMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm5hdk92ZXJsYXknKS50b2dnbGVDbGFzcygnaGlkZU5hdk92ZXJsYXkgc2hvd05hdk92ZXJsYXknKTtcblxuICAgIH0pXG59XG5cbmFwcC5jbG9zZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgJCgnLmNsb3NlT3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5uYXZPdmVybGF5JykuYWRkQ2xhc3MoJ2hpZGVOYXZPdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Nob3dOYXZPdmVybGF5Jyk7XG5cbiAgICB9KVxufVxuXG5hcHAuZ29Ub0xpbmsgPSAoKSA9PiB7XG4gICAgJCgnLm5hdkl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5uYXZPdmVybGF5JykucmVtb3ZlQ2xhc3MoJ3Nob3dOYXZPdmVybGF5JykuYWRkQ2xhc3MoJ2hpZGVOYXZPdmVybGF5Jyk7XG4gICAgfSlcbn1cblxuLy8gZnVuY3Rpb25zIGRlYWxpbmcgd2l0aCB0aGUgd29yayBvdmVybGF5IFxuXG5hcHAuc2hvd1dvcmtPdmVybGF5ID0gKCkgPT4ge1xuICAgICQoJy53b3JrSW1hZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCk7XG4gICAgICAgIFxuICAgICAgICAkdGFyZ2V0LmZpbmQoJy53b3JrT3ZlcmxheScpLmFkZENsYXNzKCdzaG93V29ya092ZXJsYXknKTsgLy8gc2hvdyBvdmVybGF5XG5cbiAgICB9KVxufVxuXG5hcHAuc2hvd1dvcmtPdmVybGF5RnJvbVRpdGxlID0gKCkgPT4ge1xuICAgICQoJy53b3JrTmFtZSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xuICAgICAgICAkdGFyZ2V0LmZpbmQoJy53b3JrT3ZlcmxheScpLmFkZENsYXNzKCdzaG93V29ya092ZXJsYXknKTsgLy8gc2hvdyBvdmVybGF5XG4gICAgICAgIFxuICAgIH0pXG59XG5cbmFwcC5oaWRlV29ya092ZXJsYXkgPSAoKSA9PiB7XG4gICAgJCgnLmNsb3NlV29ya092ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgJHRhcmdldCA9ICQodGhpcykucGFyZW50KCk7XG4gICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ3Nob3dXb3JrT3ZlcmxheScpOyAvLyBoaWRlIG92ZXJsYXlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG59XG5cbmFwcC5pbml0ID0gKCkgPT4ge1xuICAgIGFwcC5zaG93TmF2KCk7XG4gICAgYXBwLmhhbWJ1cmdlck1lbnUoKTtcbiAgICBhcHAuaGFtYnVyZ2VyTWVudTIoKTtcbiAgICBhcHAuY2xvc2VPdmVybGF5KCk7XG4gICAgYXBwLnNob3dXb3JrT3ZlcmxheSgpO1xuICAgIGFwcC5oaWRlV29ya092ZXJsYXkoKTtcbiAgICBhcHAuc2hvd1dvcmtPdmVybGF5RnJvbVRpdGxlKCk7XG4gICAgYXBwLmdvVG9MaW5rKCk7XG59XG5cbiQoZnVuY3Rpb24gKCl7XG4gICAgQU9TLmluaXQoKTtcbiAgICBhcHAuaW5pdCgpO1xufSkiXX0=
