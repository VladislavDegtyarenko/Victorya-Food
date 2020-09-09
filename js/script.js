window.addEventListener('DOMContentLoaded', () => {

    /* WOW JS Init */
    new WOW().init();

    /* Defining Variables */
    const menu = document.querySelector('.nav'),
        menuItem = document.querySelectorAll('.nav__item'),
        hamburger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.overlay'),
        exploreAllFood = document.querySelector('#exploreAllFood'),
        popularRecipes = document.querySelector('#moreRecipes'),
        playStory = document.querySelector('#playStory'),
        storyModal = document.querySelector(".story__modal"),
        storyCloseModal = document.querySelector('.story__modal_close');

    /* Open/Close Hemburger menu */
    hamburger.addEventListener('click', () => {
        overlay.classList.toggle('overlay_active');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    /* Close Menu when clicking on each link in the menu */
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
            overlay.classList.toggle('overlay_active');
        })
    });

    /* Close Hamburger Menu when clicking outside menu */
    overlay.addEventListener('click', () => {
        overlay.classList.toggle('overlay_active');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    /* Close menu when user is using scroll */
    /* window.addEventListener('scroll', () => {
        if (overlay.classList.contains('overlay_active') &&
            hamburger.classList.contains('hamburger_active') &&
            menu.classList.contains('nav_active')) {
                overlay.classList.toggle('overlay_active');
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('nav_active');
        }
    }); */

    /* Change Navigation Bar Size on Scroll */
    // When the user scrolls down 80px from the top of the document, 
    // resize the navbar's padding and the logo's font size
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            /* document.getElementsByClassName("navbar").style.padding = "30px 10px"; */
            document.getElementsByClassName("header")[0].style.height = "60px";
            document.getElementsByClassName("header")[0].style.background = "#fff";
            document.getElementsByClassName("header")[0].style.boxShadow = "0px 10px 20px 0px rgba(0,0,0,0.15)";
            document.getElementsByClassName("menu")[0].style.height = "60px";
            document.getElementsByClassName("logo__img")[0].style.width = "100px";
            document.getElementById("up").style.visibility = "visible";
            document.getElementById("up").style.opacity = "1";
            document.getElementById("up").style.bottom = "30px";
        } else {
            /* document.getElementsByClassName("navbar").style.padding = "80px 10px"; */
            document.getElementsByClassName("header")[0].style.height = "";
            document.getElementsByClassName("header")[0].style.background = "";
            document.getElementsByClassName("header")[0].style.boxShadow = "";
            document.getElementsByClassName("menu")[0].style.height = "";
            document.getElementsByClassName("logo__img")[0].style.width = "";
            document.getElementById("up").style.visibility = "hidden";
            document.getElementById("up").style.opacity = "0";
            document.getElementById("up").style.bottom = "0px";
        }
    };


    /* Story - Video */
    var modalInner = document.querySelector(".story__modal_inner");
    var iframe = document.querySelector('.story__modal_inner iframe');
    var url = document.querySelector('.story__modal_inner iframe').getAttribute('src');

    playStory.addEventListener('click', () => {
        storyModal.classList.add('story__modal_active'); 
        modalInner.style.height = Math.floor(modalInner.offsetWidth * 0.56) + 'px';
        iframe.setAttribute('src', url);
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    });

    storyCloseModal.addEventListener('click', () => {
        storyModal.classList.remove('story__modal_active');
        iframe.setAttribute('src', '');
        document.body.style.position = '';
        document.body.style.top = '';
    });

    storyModal.addEventListener('click', () => {
        storyModal.classList.remove('story__modal_active');
        iframe.setAttribute('src', '');
        document.body.style.position = '';
        document.body.style.top = '';
    });
    




    /* Explore Our Foods - Button - Show More */
    exploreAllFood.addEventListener('click', function () {
        var card = document.getElementsByClassName('card'); // get all cards in variable "card"

        var i = 0;
        while (i < card.length) {
            card[i].classList.add('card_expand');
            i++;
        };
        document.getElementById("exploreAllFood").style.display = "none";
    });

    /* Popular Recipes - Button - Show More */
    popularRecipes.addEventListener('click', function () {
        var galleryItem = document.getElementsByClassName('gallery__item'); // get all cards in variable "card"

        var i = 0;
        while (i < galleryItem.length) {
            galleryItem[i].classList.add('gallery__item_expand');
            i++;
        };
        document.getElementById("moreRecipes").style.display = "none";
    });


    /* Smooth jump to anchor links */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* Disable Hover on Touch Devices */
    function hasTouch() {
        return 'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0;
    }

    if (hasTouch()) { // remove all the :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }

})