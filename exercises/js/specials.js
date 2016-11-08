/**
 * 6.2	Load content using JSON
 */
function Specials() {
  // declared as undefined to show that this object has these variables in used
  // somewhere in the code
  this.div = undefined;
  this.select = undefined;
  this.title = undefined;
  this.img = undefined;
  this.content = undefined;
  // used later to check if data has been loaded to avoid multiple calls to server
  this.data = undefined;

  this.init();
}

Specials.prototype.loadData = function () {
  if (this.data) {
    var currentSelection = this.data[[this.select.val()]];
    this.content.html(currentSelection.text);
    this.img.attr('src', '.' + currentSelection.image);
    this.title.html(currentSelection.title);
    this.div.css('color', currentSelection.color);
  } else {
    $.getJSON('data/specials.json', function (res) {
      this.data = res;
      this.loadData();
    }.bind(this));
  }
}

Specials.prototype.init = function () {
  var form = $('#specials>form');
  this.div = $('<div>');
  this.title = $('<h2>');
  this.img = $('<img>');
  this.content = $('<p>');
  this.div.append(this.title, this.img, this.content);
  this.div.insertAfter(form);

  this.select = form.find('select');
  this.select.change(this.loadData.bind(this));

  // remove submit button
  form.find('input').parent().remove();
}

var specials = new Specials();
