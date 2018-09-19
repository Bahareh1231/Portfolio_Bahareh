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
            $('.headerNavList').removeClass('hideNav hideNavNoEffect');

        }      
    });
}

// hamburger menu in nav
app.hamburgerMenu = () => {
    $('.hamburgerMenuLink').on('click', function(e) {
        e.preventDefault();
        $('.headerNavList').toggleClass('hideNav showNav').removeClass('hideNavNoEffect');
        
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

// functions dealing with the work overlay 

app.showWorkOverlay = () => {
    $('.workImage').on('click', function(e){
        e.preventDefault();
        let $target = $(this).parent().parent();
        
        $target.find('.workOverlay').addClass('showWorkOverlay'); // show overlay

    })
}

app.showWorkOverlayFromTitle = () => {
    $('.workName a').on('click', function(e){
        e.preventDefault();
        let $target = $(this).parent().parent();
        $target.find('.workOverlay').addClass('showWorkOverlay'); // show overlay
        
    })
}

app.hideWorkOverlay = () => {
    $('.closeWorkOverlay').on('click', function(e){
        e.preventDefault();
        let $target = $(this).parent();
        $target.removeClass('showWorkOverlay'); // hide overlay
        
        
    })
}

app.init = () => {
    app.showNav();
    app.hamburgerMenu();
    app.hamburgerMenu2();
    app.closeOverlay();
    app.showWorkOverlay();
    app.hideWorkOverlay();
    app.showWorkOverlayFromTitle();
    app.goToLink();
}

$(function (){
    AOS.init();
    app.init();
})