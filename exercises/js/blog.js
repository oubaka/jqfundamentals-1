function Blog() {
  this.clickAndSlide();
}

// 5.1	Reveal hidden text.

/**
 * 5.1. Reveal hidden text.
 */
Blog.prototype.clickAndSlide = function () {
  $('#blog h3').bind('click', function (e) {
    var heading = $(this);
    $('p.excerpt').slideUp();
    heading.next().slideDown();    
    e.preventDefault();
  });
}