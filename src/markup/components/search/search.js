import 'select2';

$('.js-select').each(function() {
    let $select = $(this),
        place = $select.attr('data-place'),
        cont = $select.closest('.search');

    $select.select2({
        language: 'ru',
        theme: 'search',
        placeholder: place,
        dropdownParent: cont
    })
});
