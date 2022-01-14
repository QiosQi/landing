(function () {
    'use strict';

    $(document).ready(function () {

        $('#accordionFlushTeam').on('shown.bs.collapse', function (event) {

            const imgSrc = event.target.dataset.indexName
            $('#teampic-port').attr('src', '/images/front/' + imgSrc + '.png');

        });

        $('#accordionFlushManage').on('shown.bs.collapse', function (event) {

            const imgSrc = event.target.dataset.indexName
            $('#managepic-port').attr('src', '/images/front/' + imgSrc + '.png');

        });

        $('.carousel').slick({
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            // prevArrow: '<i class='fas fa-chevron-left'></i>',
            // nextArrow: '<i class='fas fa-chevron-right'></i>',
            prevArrow: false,
            nextArrow: false,
            centerMode: true,
            responsive: [{
                breakpoint: 1224,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                }

            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: true,

                }
            }]
        });
    });

})(jQuery);