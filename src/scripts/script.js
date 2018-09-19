const app = {};

// make side nav appear once the header is out of view
app.showNav = () => {
    $(window).scroll(function () {

        let wS = $(this).scrollTop(); 
        let hT = $('#work').offset().top;
        let width = $(window).width();

        
        if (wS > hT && width > 500) {
            $('nav').removeClass('headerNav').addClass('headerNavFixed');
            $('.headerNavList').addClass('hideNavNoEffect hideNav')
            

        } else {
            $('nav').addClass('headerNav').removeClass('headerNavFixed');
            $('.headerNavList').removeClass('hideNav');

        }      
    });
}

// hamburger menu in nav
app.hamburgerMenu = () => {
    $('.hamburgerMenuLink').on('click', function(e) {
        e.preventDefault();
        $('.headerNavList').toggleClass('hideNav showNav');
        
    })
}

app.hamburgerMenu2 = () => {
    $('.hamburgerMenuLink2').on('click', function (e) {
        e.preventDefault();
        $('.navOverlay').toggleClass('hideNavOverlay showNavOverlay');

    })
}

app.closeOverlay = () => {
    $('.closeOverlay').on('click', function(e){
        e.preventDefault();
        $('.navOverlay').addClass('hideNavOverlay').removeClass('showNavOverlay');

    })
}

app.goToLink = () => {
    $('.navItem').on('click', function () {
        $('.navOverlay').removeClass('showNavOverlay').addClass('hideNavOverlay');
    })
}

app.init = () => {
    app.showNav();
    app.hamburgerMenu();
    app.hamburgerMenu2();
    app.closeOverlay();
    app.goToLink();
}

$(function (){
    AOS.init();
    app.init();
})