function Controller() {  
  this.childCount = this.stack.children().length;    
  this.init();
}

Controller.prototype.init = function () {
  $('#add').click(this.onAdd.bind(this));
  $('#stack').delegate('.item', 'click', this.onItemClick);
}

Controller.prototype.onAdd = function () {
  this.childCount += 1;
  var div = $('<div>').addClass('item');
  div.text('Item ' + (childCount));
  $('#stack').prepend(div);
}

Controller.prototype.onItemClick = function () {
  if ($(this).prev().length) {
    $(this).addClass('selected');
    $(this)
      .siblings()
      .removeClass('selected');
  } else {
    this.childCount -= 1;
    $(this).remove();
  }
}