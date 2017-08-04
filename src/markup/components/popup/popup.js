import 'magnific-popup';
import 'malihu-custom-scrollbar-plugin'

$('.js-open-post').magnificPopup({
    items: {
        src: '#popup',
        type: 'inline',
    },
    callbacks: {
        open: function() {
            this.content.find('.js-scroller').mCustomScrollbar({
                theme: 'simple'
            });
        }
    }
});
