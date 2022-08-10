const owlCarousel = (selector, $wrap, options) => {
    const $ = window.$;

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

        if (!selector) return;

        var $this = $(selector);
        var newOwlSettings = $.extend({}, owlSettings, $this.data('owl-options'));
        $this.owlCarousel(newOwlSettings);
    }
}

export const Dom = {
    owlCarousel
}