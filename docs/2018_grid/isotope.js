let $container = $('#grid-container').imagesLoaded(function(){
  $container.isotope({
    itemSelector: '.grid-item',
    // percentPosition: true,
    masonry: {
      columnWidth: 40,
      gutter: 0,
      fitWidth: true
    }
  });
});