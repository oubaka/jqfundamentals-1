/**
 * 5.3	Create a Slideshow
 */

function Slideshow() {
  this.slides = [];
  this.currentSlide = undefined;
  this.previousSlide = undefined;
  this.onSlide = [];
  this.navs = [];  

  this.init();
}

Slideshow.prototype.init = function () {
  /**
   * 1. Move the #slideshow element to the top of the body.
   */
  $('#slideshow').prependTo('body');
  this.cycle();
  this.showNavigation();
}

/**
 * 2. Write code to cycle through the list items inside the element; fade one in, display it for a few seconds, then fade it out and fade in the next one.
 */
Slideshow.prototype.cycle = function () {
  this.slides = $('#slideshow>li');
  this.slideTask();
  setInterval(this.slideTask.bind(this), 5000);
}

Slideshow.prototype.slideTask = function () {
  if (this.currentSlide) {
    var next = this.currentSlide.next();
    this.previousSlide = this.currentSlide;
    if (next.length) {
      this.currentSlide = next;
    } else {
      this.currentSlide = this.slides.first();
    }
  } else {
    // first start
    this.currentSlide = this.slides.first();
    this.currentSlide.nextAll().hide();
    this.currentSlide.prevAll().hide();
  }

  if (this.previousSlide) {
    this.previousSlide.fadeOut({
      complete: function () {
        this.currentSlide.fadeIn();
      }.bind(this)
    });
  }

  // invoke listener callbacks
  this.onSlide.forEach(function (callback) {
    callback.call(this, this.currentSlide);
  }.bind(this));
}

Slideshow.prototype.callback = function (currentSlide) {
  var index = this.slides.index(currentSlide);
  this.navs.forEach(function (val, i) {
    if (index == i) {
      val.addClass('selected');
    } else {
      val.removeClass('selected');
    }
  });
}

Slideshow.prototype.createNav = function () {
  var ul = $('<ul>').addClass('nav');
  this.slides.each(function (index) {
    var li = $('<li>');
    li.text('item ' + (1 + index));
    ul.append(li);
    this.navs.push(li);
  }.bind(this));
  ul.insertAfter('#slideshow');
}

/**
 * 4. For an extra challenge, create a navigation area under the slideshow that shows how many images there are and which image you're currently viewing. (Hint: $.fn.prevAll will come in handy for this.)
 */
Slideshow.prototype.showNavigation = function () {  
  this.onSlide.push(this.callback);
  this.createNav.call(this);
  callback.call(this, this.currentSlide);
}

var slideshow = new Slideshow();
