let $container = $('#grid-container').imagesLoaded(function(){
  $container.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: 10
      // fitWidth: true
    }
  });
});