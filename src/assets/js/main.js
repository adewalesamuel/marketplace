// Main Js File
export function init() {
    const $ = window.$;
    const Waypoint = window.Waypoint;

    $(document).ready(function () {
        'use strict';
    
        owlCarousels();
        // quantityInputs();
    
        // Header Search Toggle
    
        var $searchWrapper = $('.header-search-wrapper'),
            $body = $('body'),
            $searchToggle = $('.search-toggle');
    
        $searchToggle.on('click', function (e) {
            $searchWrapper.toggleClass('show');
            $(this).toggleClass('active');
            $searchWrapper.find('input').focus();
            e.preventDefault();
        });
    
        $body.on('click', function (e) {
            if ( $searchWrapper.hasClass('show') ) {
                $searchWrapper.removeClass('show');
                $searchToggle.removeClass('active');
                $body.removeClass('is-search-active');
            }
        });
    
        $('.header-search').on('click', function (e) {
            e.stopPropagation();
        });
    
        // Sticky header 
        var catDropdown = $('.category-dropdown'),
            catInitVal = catDropdown.data('visible');
            
        if ( $('.sticky-header').length && $(window).width() >= 992 ) {
            var sticky = new Waypoint.Sticky({
                element: $('.sticky-header')[0],
                stuckClass: 'fixed',
                offset: -300,
                handler: function ( direction ) {
                    // Show category dropdown
                    if ( catInitVal &&  direction == 'up') {
                        catDropdown.addClass('show').find('.dropdown-menu').addClass('show');
                        catDropdown.find('.dropdown-toggle').attr('aria-expanded', 'true');
                        return false;
                    }
    
                    // Hide category dropdown on fixed header
                    if ( catDropdown.hasClass('show') ) {
                        catDropdown.removeClass('show').find('.dropdown-menu').removeClass('show');
                        catDropdown.find('.dropdown-toggle').attr('aria-expanded', 'false');
                    } 
                }
            });
        }
    
        // Menu init with superfish plugin
        if ( $.fn.superfish ) {
            $('.menu, .menu-vertical').superfish({
                popUpSelector: 'ul, .megamenu',
                hoverClass: 'show',
                delay: 0,
                speed: 80,
                speedOut: 80 ,
                autoArrows: true
            });
        }
    
        // Mobile Menu Toggle - Show & Hide
        $('.mobile-menu-toggler').on('click', function (e) {
            $body.toggleClass('mmenu-active');
            $(this).toggleClass('active');
            e.preventDefault();
        });
    
        $('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
            $body.removeClass('mmenu-active');
            $('.menu-toggler').removeClass('active');
            e.preventDefault();
        });
    
        // Add Mobile menu icon arrows to items with children
        $('.mobile-menu').find('li').each(function () {
            var $this = $(this);
    
            if ( $this.find('ul').length ) {
                $('<span/>', {
                    'class': 'mmenu-btn'
                }).appendTo($this.children('a'));
            }
        });
    
        // Mobile Menu toggle children menu
        $('.mmenu-btn').on('click', function (e) {
            var $parent = $(this).closest('li'),
                $targetUl = $parent.find('ul').eq(0);
    
                if ( !$parent.hasClass('open') ) {
                    $targetUl.slideDown(300, function () {
                        $parent.addClass('open');
                    });
                } else {
                    $targetUl.slideUp(300, function () {
                        $parent.removeClass('open');
                    });
                }
    
            e.stopPropagation();
            e.preventDefault();
        });
    
        // Sidebar Filter - Show & Hide
        var $sidebarToggler = $('.sidebar-toggler');
        $sidebarToggler.on('click', function (e) {
            $body.toggleClass('sidebar-filter-active');
            $(this).toggleClass('active');
            e.preventDefault();
        });
    
        $('.sidebar-filter-overlay').on('click', function (e) {
            $body.removeClass('sidebar-filter-active');
            $sidebarToggler.removeClass('active');
            e.preventDefault();
        });
    
        // Clear All checkbox/remove filters in sidebar filter
        $('.sidebar-filter-clear').on('click', function (e) {
            $('.sidebar-shop').find('input').prop('checked', false);
    
            e.preventDefault();
        });
    
        // Sticky Content - Sidebar - Social Icons etc..
        // Wrap elements with <div class="sticky-content"></div> if you want to make it sticky
        if ( $.fn.stick_in_parent && $(window).width() >= 992 ) {
            $('.sticky-content').stick_in_parent({
                offset_top: 80,
                inner_scrolling: false
            });
        }

        // Quantity Input - Cart page - Product Details pages
        function quantityInputs() {
            if ( $.fn.inputSpinner ) {
                $("input[type='number']").inputSpinner({
                    decrementButton: '<i class="icon-minus"></i>',
                    incrementButton: '<i class="icon-plus"></i>',
                    groupClass: 'input-spinner',
                    buttonsClass: 'btn-spinner',
                    buttonsWidth: '26px'
                });
            }
        }
    
        function owlCarousels($wrap, options) {
            if ( $.fn.owlCarousel ) {
                var owlSettings = {
                    items: 1,
                    loop: true,
                    margin: 0,
                    responsiveClass: true,
                    nav: true,
                    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
                    dots: true,
                    smartSpeed: 400,
                    autoplay: false,
                    autoplayTimeout: 15000
                };
                if (typeof $wrap == 'undefined') {
                    $wrap = $('body');
                }
                if (options) {
                    owlSettings = $.extend({}, owlSettings, options);
                }
    
                // Init all carousel
                $wrap.find('[data-toggle="owl"]').each(function () {
                    var $this = $(this),
                        newOwlSettings = $.extend({}, owlSettings, $this.data('owl-options'));
    
                    $this.owlCarousel(newOwlSettings);
                    
                });   
            }
        }
    
        // Scroll To button
        var $scrollTo = $('.scroll-to');
        // If button scroll elements exists
        if ( $scrollTo.length ) {
            // Scroll to - Animate scroll
            $scrollTo.on('click', function(e) {
                var target = $(this).attr('href'),
                    $target = $(target);
                if ($target.length) {
                    // Add offset for sticky menu
                    var scrolloffset = ( $(window).width() >= 992 ) ? ($target.offset().top - 52) : $target.offset().top
                    $('html, body').animate({
                        'scrollTop': scrolloffset
                    }, 600);
                    e.preventDefault();
                }
            });
        }
    
        // Scroll Top Button - Show
        var $scrollTop = $('#scroll-top');
    
        $(window).on('load scroll', function() {
            if ( $(window).scrollTop() >= 400 ) {
                $scrollTop.addClass('show');
            } else {
                $scrollTop.removeClass('show');
            }
        });
    
        // On click animate to top
        $scrollTop.on('click', function (e) {
            $('html, body').animate({
                'scrollTop': 0
            }, 800);
            e.preventDefault();
        });
    
        var $megamenu = $('.megamenu-container .sf-with-ul');
        $megamenu.hover(function() {
            $('.demo-item.show').addClass('hidden');
            $('.demo-item.show').removeClass('show');
            // $viewAll.removeClass('disabled-hidden');
        });
    
    });
}
