// APPLICATION.JS
//--------------------------------------------------------------------------------------------------------------------------------
// This is application javascript file that contains custom javascripts and initialization used in this template and plugins */
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Pistacia - Restaurant & Food HTML5 Template */
// Version: 1.6.1
// Author: Bumbella*/
// Contact: http://themeforest.net/user/pistaciatheme */
// -------------------------------------------------------------------------------------------------------------------------------


/*-----------------------------------------------*/
/* Application */
/*-----------------------------------------------*/

var APP = {
    isMobile: null,
    windowWidth: null
};


/*-----------------------------------------------*/
/* Initialize
 /*-----------------------------------------------*/

APP.init = function () {

    "use strict";

    this.isMobile = this.setMobile();
    this.windowWidth = this.setWindowWidth();

    this.pageloader();
    this.hovermenu();
    this.bootstrap();
    this.scrollto();
    this.navsearch();
    this.animateElementIfAppear();

    jQuery(window).scroll(function () {
        APP.windowWidth = APP.setWindowWidth();
    });
    jQuery(window).resize(function () {
        APP.windowWidth = APP.setWindowWidth();
    });
};


/*-----------------------------------------------*/
/* Spinner */
/*-----------------------------------------------*/

APP.spinner = function () {

    (function () {

        $.fn.spin = function (opt) {

            var that = $(this);

            var price = parseInt($(opt.connectItem).text().slice(1, $(opt.connectItem).text().length),10);

            var itemInput = that.find('input');

            var increaseItem = function () {
                var val = parseInt(itemInput.val(),10);
                itemInput.val(++val);
            };

            var decreaseItem = function () {

                var val = parseInt(itemInput.val(),10) - 1;

                if (val > 0) {
                    itemInput.val(val);
                }

            };

            var priceOut = function () {
                $(opt.connectItem).text('$' + price * parseInt(itemInput.val(),10));
            };

            that.find('.btn-inc').on("click", function () {
                increaseItem();
                priceOut();
            });

            that.find('.btn-dec').on("click", function () {
                decreaseItem();
                priceOut();
            });

        };
        $('#shopItem .spinner').spin({
            connectItem: "#itemPrice"
        });
    }());
};
/*-----------------------------------------------*/
/* Layerslider */
/*-----------------------------------------------*/

APP.layerslider = function () {

    "use strict";
    if (document.getElementById("layerslider")) {
        jQuery("#layerslider").layerSlider({
            responsive: false,
            skin: 'fullwidth',
            pauseOnHover: false,
            navButtons: false,
            navStartStop: false,
            showBarTimer: true,
            responsiveUnder: 1280,
            layersContainer: 1280,
            skinsPath: 'assets/skins/'
        });
    }
};


/*-----------------------------------------------*/
/* Shop*/
/*-----------------------------------------------*/

APP.shop = function () {

    "use strict";
    jQuery('.view-mode').find('a').on('click', function (e) {

        e.preventDefault();
        var mode = jQuery(this).data('mode');
        jQuery('a', jQuery(this).parents('.view-mode')).each(function () {
            var mode = jQuery(this).data('mode');
            jQuery('#shop').removeClass(mode);
        });
        jQuery(this)
            .siblings().removeClass('active').end()
            .addClass('active');
        jQuery('#shop').addClass(mode);
    });
};


/*-----------------------------------------------*/
/* NouiSlider */
/*-----------------------------------------------*/

APP.nouislider = function () {

    "use strict";
    if (document.getElementById("uiSlider")) {

        var elem = $("#uiSlider");
        elem.noUiSlider({
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
        elem.Link('lower').to(jQuery('#value-lower'), 'html');
        elem.Link('upper').to(jQuery('#value-upper'), 'html');
    }

};


/*-----------------------------------------------*/
/* Top navigation search */
/*-----------------------------------------------*/

APP.navsearch = function () {

    "use strict";
    var desktopsearch = jQuery("#desktopSearch");
    jQuery(document).ready(function () {
        jQuery('#desktopSearchButton').on('click', function (e) {
            e.preventDefault();
            desktopsearch.addClass('active');
        });
        jQuery('#desktopSearchClose').on('click', function (e) {
            e.preventDefault();
            desktopsearch.removeClass('active');
        });
    });
};


/*-----------------------------------------------*/
/* Countdown
 /*-----------------------------------------------*/

APP.countDown = function () {

    "use strict";
    /* Coming soon countDown */
    if (jQuery('#defaultCountdown').length > 0) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        jQuery('#defaultCountdown').countdown({until: austDay});
        jQuery('#year').text(austDay.getFullYear());
    }

};


/*-----------------------------------------------*/
/* Counter numbers */
/*-----------------------------------------------*/

APP.counterNumbers = function () {

    "use strict";
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };

    var counterNumbersId = [];
    var counters = [];
    var a = 0;

    $.each($('.counter-number'), function () {
        counterNumbersId.push($(this).attr('id'));
    });

    counterNumbersId.forEach(function (value) {
        var a = new countUp(value, 0, parseInt($("#" + value).html(),10), 0, 10, options);
        counters.push(a);
        a++;
    });

    $(window).scroll(function () {
        counterNumbersId.forEach(function (value, key) {
            var elementTop = jQuery('#' + value).offset().top;
            var topOfWindow = jQuery(window).scrollTop() + jQuery(window).height();
            if (elementTop < topOfWindow) {
                counters[key].start();
            }
        });
    });

};


/*-----------------------------------------------*/
/* Parallax */
/*-----------------------------------------------*/

APP.parallax = function () {

    "use strict";
    jQuery('#counterParallax').parallax('50%', 0.4, false);
    jQuery('.header-img').parallax('50%', 0.4, false);
    jQuery('#signUpNews').parallax('50%', 0.4, false);
};


/*-----------------------------------------------*/
/* Set window width */
/*-----------------------------------------------*/

APP.setWindowWidth = function () {

    "use strict";
    return jQuery(window).width();
};
APP.CBPFWTabs = function () {
    $('.tabs').each(function () {
        new CBPFWTabs(this);
    });
};


/*-----------------------------------------------*/
/* Scroll To */
/*-----------------------------------------------*/

APP.scrollto = function () {

    "use strict";
    jQuery(document).ready(function () {

        jQuery("a.scroll-to").on('click', function (e) {

            var $href = jQuery(this).attr('href');
            var $fixedHeight = 60;
            e.preventDefault();
            jQuery(window).scrollTo(jQuery($href).offset().top - $fixedHeight, 800, {easing: 'easeInOutExpo'});
        });
    });
};


/*-----------------------------------------------*/
/* Reservation form */
/*-----------------------------------------------*/

APP.reservationForm = function () {

    "use strict";

    /* create datepicker calendar */
    if (document.getElementById("datepicker")) {

        var datepicker = jQuery("#datepicker");
        var date = (datepicker
            .datepicker({
                firstDay: 1,
                dateFormat: "dd mm yy",
                onSelect: function (date) {
                    $('#reservationDate').val(date);
                }
            })
            .datepicker({dateFormat: 'yy-mm-dd'}).val());
        document.getElementById("reservationDate").value = date;
    }

    if (document.getElementById("rsvForm")) {

        var form = jQuery("#rsvForm");
        form.find('.btn-send').on('click', function (e) {

            var btn = jQuery(this);
            var validator = form.validate({
                rules: {
                    firstName: 'required',
                    lastName: 'required',
                    email: {
                        required: true,
                        email: true
                    },
                    guestNumber: {
                        required: true,
                        number: true
                    },
                    phone: {
                        required: true,
                        number: true
                    }
                },
                messages: {
                    firstName: 'Required element',
                    lastName: 'Required element',
                    email: {
                        required: 'Required element',
                        email: "It doesen't email format"
                    },
                    phone: {
                        required: 'Required element',
                        number: "Please enter valid phone. eg: 201112111"
                    },
                    guestNumber: {
                        required: 'Required element',
                        number: "Please enter valid number!"
                    }
                }
            });
            if (form.valid() === true && $('#rsrvCode').val() === '') {

                btn.button('loading');
                jQuery.ajax({
                    type: "POST",
                    url: "/assets/php/sendreservation.php",
                    data: form.serialize(),
                    success: function (message) {
                        btn.button('reset');
                        form.find('.message').html(message).show();
                        document.getElementById("rsvForm").reset();
                    },
                    error: function () {
                        btn.button('reset');
                    }
                });
            } else {
                return false;
            }
            e.preventDefault();
        });
    }
};


/*-----------------------------------------------*/
/* Contact form */
/*-----------------------------------------------*/

APP.contactForm = function () {

    "use strict";
    if (document.getElementById("cntForm")) {

        var form = jQuery("#cntForm");
        form.find('.btn-send').on('click', function (e) {

            var btn = jQuery(this);
            var validator = form.validate({
                rules: {
                    name: 'required',
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: 'Required element',
                    email: {
                        required: 'Required element',
                        email: "It doesen't email format"
                    }
                }
            });
            if (form.valid() === true && $('#cntCode').val() === '') {

                btn.button('loading');
                jQuery.ajax({
                    type: "POST",
                    url: "/assets/php/sendcontact.php",
                    data: form.serialize(),
                    success: function (message) {
                        btn.button('reset');
                        form.find('.message').html(message).show();
                        document.getElementById("cntForm").reset();
                    },
                    error: function () {
                        btn.button('reset');
                    }
                });
            } else {
                return false;
            }

            e.preventDefault();
        });
    }
};


/*-----------------------------------------------*/
/* Owl carousels */
/*-----------------------------------------------*/

APP.owlCarousel = function () {

    "use strict";

    /* Offer carousel */
    jQuery('.offer-owl-carousel').owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 2
            }
        },
        nav: true,
        dots: false,
        navText: ["", ""]
    });

    /* Logos owl */
    jQuery('.logos-owl-carousel').owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 6
            },
            1200: {
                items: 6
            }
        },
        items: 6,
        nav: true,
        dots: false,
        navText: ["", ""]
    });

    /* Mini owl carousel in product item */
    jQuery('.mini-gallery-owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1200: {
                items: 4
            }
        },
        nav: true,
        dots: false,
        navText: ["", ""]
    });
};


/*-----------------------------------------------*/
/* Portfolio */
/*-----------------------------------------------*/

APP.portfolioIsotope = function () {

    "use strict";

    if(document.querySelector('.portfolio-items')) {

        var grid = null;
        jQuery('.portfolio-items').imagesLoaded(function () {
            grid = jQuery('.portfolio-items').isotope();
        });


        jQuery('.portfolio-filters').on('click', 'a', function (e) {
            e.preventDefault();
            var _this = jQuery(this);
            var _parent = _this.parent();
            var _filterValue = _this.attr('data-filter');
            grid.isotope({filter: _filterValue});
            _parent
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    }

};

APP.portfolio = function () {

    "use strict";

    $.fn.filteredPortfolio = function (options) {

        var elements = [];
        var filters = [];

        var init = function ($container) {

            proc($container);

            $container.find(options.itemSelector).each(function () {
                elements.push($(this));
            });

            $container.imagesLoaded(function () {
                $container.masonry();
            });

        };

        var filterItems = function (selector) {
            var result = [];
            $(elements).each(function (item) {
                $(selector).each(function (index, sel) {
                    if (elements[item].is(sel)) {
                        if ($.inArray(elements[item], result) === -1)
                            result.push(elements[item]);
                    }
                });
            });
            return result;
        };

        var reload = function ($container, items) {
            $container.empty();
            $(items).each(function () {
                $($container).append($(this));
            });
            $container.masonry('reloadItems');
            $container.masonry();
        };

        var hashFilter = function ($container) {
            var hash = window.location.hash.replace("#", "");
            if ($.inArray(hash, filters) !== -1) {
                reload($container, $('.' + hash));
            }
        };

        var proc = function ($container) {
            $(options.filtersGroupSelector).find('input[type=checkbox]').each(function () {
                $(this).change(function () {
                    var selector = [];
                    $(options.filtersGroupSelector).find('input[type=checkbox]').each(function () {
                        if ($(this).is(':checked')) {
                            selector.push('.' + $(this).val());
                        }
                    });
                    var items = elements;
                    if (selector.length > 0) {
                        items = filterItems(selector);
                    }
                    reload($container, items);
                });
            });
        };

        return this.each(function () {
            init($(this));
        });
    };

    jQuery('.portfolio-items').filteredPortfolio({
        itemSelector: '.item',
        filtersGroupSelector: '.filters'
    });

};


/*-----------------------------------------------*/
/* Google map */
/*-----------------------------------------------*/

APP.createGoogleMap = function () {

    "use strict";
    +function (window, google, mapster) {

        var mapElement = document.getElementById('map-canvas');
        var mapOptions = mapster.MAP_OPTIONS;
        mapster.MAP_OPTIONS.center.lat = -21.602935;
        mapster.MAP_OPTIONS.center.lng = -48.365426;
        mapster.MAP_OPTIONS.zoom = 15;
        mapster.MAP_OPTIONS.styles = [
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#00ffed"
                    },
                    {
                        "saturation": "2"
                    },
                    {
                        "lightness": "4"
                    },
                    {
                        "weight": "2.07"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];


        var map = mapster.create(mapElement, mapOptions);
        map.addMarker({
            position: {
                lat: -21.602935,
                lng: -48.365426
            },
            event: {name: 'click',
                callback: function () {

                }
            },
            content: '<div style="width:250px"><div style="width:200px;"><h4 style="margin-top:10px;margin-bottom:0px;">Pistacia restaurant</h4><p><h5>Hours</h5><ul style="list-style:none;padding:0;margin:0;"><li><b>Tues - Sat:</b> 7AM - 10PM</li><li><b>Sunday:</b> 7AM- 2PM</li><li><b>Monday:</b> 6AM - 10PM</li></ul></p></div></div >',
            contentShow: false,
            id: 1,
            draggable: false,
            icon: 'assets/img/content/map.png'
        });
        map.addMarker({
            position: {
                lat: -21.603535,
                lng: -48.364026
            },
            event: {name: 'click',
                callback: function () {

                }
            },
            content: '<div style="width:250px"><div style="width:200px;"><h4 style="margin-top:10px;margin-bottom:0px;">Pistacia restaurant</h4><p><h5>Hours</h5><ul style="list-style:none;padding:0;margin:0;"><li><b>Tues - Sat:</b> 7AM - 10PM</li><li><b>Sunday:</b> 7AM- 2PM</li><li><b>Monday:</b> 6AM - 10PM</li></ul></p></div></div >',
            contentShow: false,
            id: 2,
            draggable: false,
            icon: 'assets/img/content/map.png'
        });
    }(window, google, window.Mapster || (window.Mapster = {}));
};


/*-----------------------------------------------*/
/* plax parallax layers */
/*-----------------------------------------------*/

APP.plax = function () {

    "use strict";

    /* 404 page*/
    jQuery('#page404 #layer-1').plaxify({
        "xRange": 0,
        "yRange": 0
    });
    jQuery('#psge404 #layer-2').plaxify({
        "xRange": 20,
        "yRange": 20
    });
    jQuery('#page404 #layer-3').plaxify({
        "xRange": 40,
        "yRange": 40
    });
    jQuery('#page404 #layer-5').plaxify({
        "xRange": 50,
        "yRange": 50
    });
    jQuery('#page404 #layer-6').plaxify({
        "xRange": 110,
        "yRange": 20
    });
    jQuery('#page404 #layer-7').plaxify({
        "xRange": 140,
        "yRange": 70
    });
    jQuery('#page404 #layer-8').plaxify({
        "xRange": 320,
        "yRange": 120
    });
    jQuery('#page404 #layer-9').plaxify({
        "xRange": 40,
        "yRange": 0
    });
    jQuery.plax.enable({
        clearLayers: true,
        restorePositions: true
    });
};


/*-----------------------------------------------*/
/* Flexslider */
/*-----------------------------------------------*/

APP.flexSlider = function () {

    "use strict";
    jQuery('.text-slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        touch: true,
        slideshowSpeed: 3000,
        direction: "vertical"
    });
    jQuery('.welcome-img-slider').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false,
        touch: true,
        slideshow: false,
        startAt: 0,
        direction: "horizontal"
    });
    jQuery('.flexslider-to').on('click', function () {
        if (jQuery('.welcome-img-slider').length > 0) {
            jQuery('.welcome-img-slider').flexslider(jQuery(this).data('flexslide'));
        }
    });
};


/*-----------------------------------------------*/
/* Top menu */
/*-----------------------------------------------*/

APP.hovermenu = function () {

    "use strict";

    jQuery('#top-menu').find('li').hover(function () {
        if (APP.windowWidth > 767) {
            jQuery(this).find('ul').stop().fadeIn(300);
        }
    }, function () {
        if (APP.windowWidth > 767) {
            jQuery(this).find('ul').stop().fadeOut(300);
        }
    });

    jQuery('#top-menu li').each(function () {
        var that = $(this);
        if (that.has('ul').length > 0) {
            that.find('>a').on("click", function (e) {
                e.preventDefault();
            });
        }
    });
};


/*-----------------------------------------------*/
/* Set mobile variable */
/*-----------------------------------------------*/

APP.setMobile = function () {

    "use strict";
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
};


/*-----------------------------------------------*/
/* Animate element if appeared */
/*-----------------------------------------------*/

APP.animateElementIfAppear = function () {

    "use strict";
    jQuery(window).scroll(function () {

        jQuery('[class$=-ifAppeared]').each(function () {

            var elementTop = jQuery(this).offset().top;
            var topOfWindow = jQuery(window).scrollTop() + jQuery(window).height() - 300;
            var classes = jQuery(this).attr("class").split(' ');
            var animateClass = '';
            jQuery.each(classes, function (index, item) {
                var a = item.split('-');
                if (a[1] == 'ifAppeared') {
                    animateClass = a[0];
                }
            });
            if (elementTop < topOfWindow) {
                jQuery(this).addClass("animated " + animateClass);
            }

        });
    });
};


/*-----------------------------------------------*/
/* Sticky navigation */
/*-----------------------------------------------*/

APP.stickynav = function () {

    var element = jQuery('#topNavigation');
    var sticky_navigation_offset_top = element.offset().top;
    jQuery('body').addClass('fixed-navigation');
    var sticky_navigation = function () {
        var scroll_top = jQuery(window).scrollTop();
        if (scroll_top > sticky_navigation_offset_top) {
            element.parent().addClass('sticky-on');
        } else {
            element.parent().removeClass('sticky-on');
        }
    };
    sticky_navigation();
    jQuery(window).scroll(sticky_navigation);
    jQuery(window).resize(sticky_navigation);
};


/*-----------------------------------------------*/
/* Masonry */
/*-----------------------------------------------*/

APP.masonry = function () {

    "use strict";
    jQuery.fn.masonryList = function (opts) {

        if (jQuery(this).length > 0) {

            var defaults = {
                itemSelector: '.item',
                transitionDuration: 0,
                apendButton: '#append-blogitem-elements',
                infinityScroll: false,
                onAppendClick: function () {

                }
            };
            opts = jQuery.extend(defaults, opts);
            var _self = this;
            var _this = jQuery(this);
            var appendButton = jQuery(opts['apendButton']);
            var container = _this.masonry({
                itemSelector: opts['itemSelector'],
                transitionDuration: opts['transitionDuration']
            });
            container.imagesLoaded(function () {
                container.masonry();
            });
            appendButton.on('click', function (e) {
                e.preventDefault();
                var items = opts.onAppendClick();
                container.append(items);
                container.masonry('reloadItems');
                container.masonry();
            });
        }

    };
    /*  elements */
    if (jQuery('#pinterestItems').length > 0) {
        var elems = '';
        jQuery('#pinterestItems').find('.item').each(function (i, items) {
            elems += '<li class="item animated fadeIn">' + jQuery(items).html() + '</li>';
        });
    }

    var infinity = false;
    if (jQuery('.list-infinity').length > 0) {
        infinity = true;
    }

    $(window).load(function () {
        jQuery('#pinterestItems').masonryList({
            itemSelector: '.item',
            transitionDuration: 0,
            infinityScroll: infinity,
            apendButton: '#append-blogitem-elements',
            onAppendClick: function () {
                return elems;
            }
        });
    });
};


/*-----------------------------------------------*/
/* Bootstrap functions */
/*-----------------------------------------------*/

APP.bootstrap = function () {

    "use strict";
    /* Bootstrap windows phone hack */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }

    jQuery('.nav-side-menu li')
        .has('ul')
        .find('>a')
        .addClass('no-click');
    jQuery('a.no-click').on('click', function (e) {
        e.preventDefault();
        jQuery(this).parent().toggleClass('active');
    });
    jQuery(function () {
        jQuery(".tool-tip").tooltip();
    });
};

/*-----------------------------------------------*/
/* Theme switcher */
/*-----------------------------------------------*/

APP.themeswitcher = function(){

    "use strict";

    var themeSwitcher = {
        defaults:{
            window : jQuery('#themeSwitcher'),
            opened : false,
            skin : 'green'
        },
        opts:{},
        button:{},
        close:function(){

            jQuery.cookie('themeswitcher', 'inactive', { expires: 1 });
            themeSwitcher.opts.window.removeClass('active');

        },
        open:function(){

            jQuery.cookie('themeswitcher', 'active', { expires: 1 });
            themeSwitcher.opts.window.addClass('active');

        },
        toggleWindow:function(){
            if( themeSwitcher.opts.window.hasClass('active') ){
                themeSwitcher.close();
            } else {
                themeSwitcher.open();
            }
        },
        changeColor:function(color){
            jQuery("link[href*='style-']").attr("href",'assets/css/style-'+ color +'.css');
            jQuery(".navbar-brand img").attr('src','assets/img/logo/logo-' + color + '.png');
            jQuery('[data-color="'+color+'"]').parent().addClass('active').siblings().removeClass('active');
            jQuery.cookie('skin', color, { expires: 1 });
        },
        init:function(param) {

            themeSwitcher.opts = jQuery.extend(themeSwitcher.defaults, param);
            themeSwitcher.button = themeSwitcher.opts.window.find('.toggle-button');

            if (((jQuery.cookie('themeswitcher') == undefined) && (themeSwitcher.opts.opened)) ||
                (jQuery.cookie('themeswitcher') == 'active')){
                themeSwitcher.open();
            } else {
                themeSwitcher.close();
            }

            if (jQuery.cookie('skin') == undefined){
                themeSwitcher.changeColor(themeSwitcher.opts.skin);
            } else {
                themeSwitcher.changeColor(jQuery.cookie('skin'));
            }

        }
    };

    themeSwitcher.init({
        opened:false
    });

    themeSwitcher.button.on("click",function(e){
        e.preventDefault();
        themeSwitcher.toggleWindow();
    });

    themeSwitcher.opts.window.find('.colors a').on("click",function(e){
        var that = jQuery(this);
        themeSwitcher.changeColor(that.data('color'));
        e.preventDefault();
    });

};

/*-----------------------------------------------*/
/* Page preloader */
/*-----------------------------------------------*/

APP.pageloader = function () {

    "use strict";
    jQuery(document).imagesLoaded(function () {
        jQuery('.page-loader')
            .delay(100)
            .fadeOut(500);
    });
};

