import Masonry from 'masonry-layout'

$('.gallery-list').each(function() {
    let grid = this;

    let msnry = new Masonry(grid, {
        itemSelector: '.gallery-list__link',
        columnWidth: '.gallery-list__link'
    });
});
