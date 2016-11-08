// 4.2	Add tabsbed navigation
function Tabs() {
  var module = $('.module');
  /**
   * 4.2.1. Hide all of the modules.
   */
  module.hide();
  /**
   * 4.2.2. Create an unordered list element before the first module.
   */
  var ul = $('<ul>').attr('id', 'new-ul');  
  /**
   * 4.2.3. Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
   */  
  module.each(function () {
    var text = $(this).find('h2').text();
    var id = $(this).attr('id');
    var li = $('<li>').text(text).attr('data-target', '#' + id);
    ul.append(li);
  });
  // inserting into DOM
  ul.insertBefore(module.first());
  /**
   * 4.2.4. Bind a click event to the list item that
   */
  var hideSiblings = function (el) {
    $(el).siblings().each(function () {
      $(this).removeClass('current');
      var id = $(this).attr('data-target');
      $(id).hide();
    });
  }

  var show = function (el) {
    $(el).addClass('current');
    var id = $(el).attr('data-target');
    $(id).show();
    hideSiblings(el);
  }

  ul.find('li').each(function () {
    $(this).bind('click', function () {
      show(this);
    });
  });
  /**
   * 4.2.5. Finally, show the first tab.
   */
  show(ul.find('li').first());
}

var tabs = new Tabs();
