/**
 * 6.2	Load content using JSON
 */
function Specials(){
    this.div = null;
    this.select = null;
    this.title = null;
    this.img = null;
    this.content = null;
    this.data = null;

    this.appendTargetDiv();
}

Specials.prototype.loadData = function(){
    if(this.data){
        var currentSelection = this.data[[this.select.val()]];
        console.log(currentSelection);
        this.content.html(currentSelection.text);
        this.img.attr('src', '.' + currentSelection.image);
        this.title.html(currentSelection.title);
        this.div.css('color', currentSelection.color);
    }else{        
        $.getJSON('data/specials.json', function(res){            
            this.data = res;
            this.loadData();
        }.bind(this));
    }
}

Specials.prototype.appendTargetDiv = function(){
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
    $('#specials>form input').parent().remove();
}