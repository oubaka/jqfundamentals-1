function Controller(){
    this.add = $('#add');
    this.stack = $('#stack');

    this.add.click(this.onAdd.bind(this));
    this.stack.delegate('.item', 'click', this.onItemClick);
    console.log(this.add);
}

Controller.prototype.onAdd = function(){
    var div = $('<div>').addClass('item');
    div.text('Item ' + (this.stack.children().length + 1));
    this.stack.prepend(div);    
}

Controller.prototype.onItemClick = function(e){
    if($(this).prev().length){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
    }else{
        $(this).remove();
    }
}