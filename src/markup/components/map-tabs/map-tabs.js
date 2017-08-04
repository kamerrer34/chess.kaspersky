$('.map-tabs__head-link').on('click', function () {
    let $self = $(this),
        index = $self.index(),
        $container = $self.closest('.map-tabs');

    $container.find('.map-tabs__head-link').removeClass('active');
    $self.addClass('active');
    $container.find('.map-tabs__container').removeClass('active');
    $container.find('.map-tabs__container').eq(index).addClass('active');
});
