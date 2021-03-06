/**
 * 6.1	Load External Content
 */

function Load() {
  this.headings = $('#blog>ul>li>h3');
  this.init();
}

Load.prototype.init = function () {
  this.createAndStore();
  this.bindClick();
}

/**
 * 1. Create a target div after the headline for each blog post and store a reference to it on the headline element using $.fn.data.
 */
Load.prototype.createAndStore = function () {
  this
    .headings
    .each(function () {
      var div = $('<div>');
      div.insertAfter(this);
      $(this).data('target', div);
    });
}

Load.prototype.bindClick = function () {
  this
    .headings
    .click(function (e) {
      var div = $(this).data('target');
      console.log(div);
      $(div).load('data/blog.html');
      e.preventDefault();
    });
}

var load = new Load();
