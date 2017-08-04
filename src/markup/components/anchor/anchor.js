$('.anchor').on('click', function (e) {
    e.preventDefault();
    let anchor = $(this).attr('href'),
        top = $(anchor).offset().top;

    $('body, html').animate({ scrollTop: top }, 500);
});
