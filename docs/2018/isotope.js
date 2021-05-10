let $container = $('#grid-container').imagesLoaded(function(){
  $container.isotope({
    itemSelector: '.grid-item',
    // percentPosition: true,
    masonry: {
      columnWidth: 100,
      gutter: 5,
      fitWidth: true
    }
  });
});