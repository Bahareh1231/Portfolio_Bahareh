const app = {};

// make side nav appear once the header is out of view
app.showNav = () => {
    $(window).scroll(function () {

        let wS = $(this).scrollTop(); 
        let hT = $('#work').offset().top;
        
        if (wS > hT) {
            $('nav').removeClass('headerNav');
            $('nav').addClass('headerNavFixed');
            $('.headerNavList').removeClass('showNav');
            $('.headerNavList').addClass('hideNav');
            

        } else {
            $('nav').addClass('headerNav');
            $('nav').removeClass('headerNavFixed');
            $('.headerNavList').removeClass('hideNav');
            $('.headerNavList').addClass('showNav');

        }      
    });
}

// hamburger menu in nav
app.hamburgerMenu = () => {
    $('.hamburgerMenuLink').on('click', function(e) {
        e.preventDefault();
        $('.headerNavList').toggleClass('hideNav');
    })
}

app.init = () => {
    app.showNav();
    app.hamburgerMenu();
}

$(function (){
    app.init();
})