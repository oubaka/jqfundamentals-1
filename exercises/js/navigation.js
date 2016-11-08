function Navigation() {
  this.showDropDown();
}

/**
 * 5.2. Create Drop down menus.
 */
Navigation.prototype.showDropDown = function () {  
  $('#nav li').hover(function (e) {
    var child = $(this).find('ul');
    if (child) {
      child.addClass('hover').show();
    }
    $(this).addClass('hover');
  }, function (e) {
    var child = $(this).find('ul');
    if (child) {
      child.removeClass('hover').hide();
    }
    $(this).removeClass('hover');
  });
}

var nav = new Navigation();
