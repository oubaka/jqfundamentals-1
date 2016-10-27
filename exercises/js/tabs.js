// 4.2	Add tabsbed navigation
function Tabs(){
    /**
     * 4.2.1. Hide all of the modules.
     */
    $('.module').hide();
    /**
     * 4.2.2. Create an unordered list element before the first module.
     */
    var ul = $('<ul>').attr('id', 'new-ul');
    ul.insertBefore($('.module').first());
    /**
     * 4.2.3. Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
     */
     $('.module').each(function(){
        var text = $(this).find('h2').text();
        var id = $(this).attr('id');
        var li = $('<li>').text(text).attr('data-target', '#' + id);
        $('#new-ul').append(li);
    });
    /**
     * 4.2.4. Bind a click event to the list item that
     */
    var hideSiblings = function(el){
        $(el).siblings().each(function(){
            $(this).removeClass('current'); 
            var id = $(this).attr('data-target');
            $(id).hide();
        });
    }

    $('#new-ul li').each(function(){
        $(this).bind('click', function(){        
            $(this).addClass('current');    
            var id = $(this).attr('data-target');            
            $(id).show();
            hideSiblings(this);
        });
    });
    /**
     * 4.2.5. Finally, show the first tab.
     */
    $('#new-ul li').first().trigger('click');
}