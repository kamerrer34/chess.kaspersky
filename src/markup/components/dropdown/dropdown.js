$('.js-dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    let $this = $(this);
    $this.toggleClass('active');
    $this.next('.dropdown__list').fadeToggle();
});

$('body').on('click', function () {
    let $dropdown = $('.dropdown');
    $dropdown.find('.js-dropdown-toggle').removeClass('active');
    $dropdown.find('.dropdown__list').fadeOut();
});
