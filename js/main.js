$(document).ready(function () {
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    })
})