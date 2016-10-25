function Sandbox() {

}

// 2.1	Selecting

/**
 * 2.1.1. Select all of the div elements that have a class of “module”
 */
Sandbox.prototype.getModuleDivs = function () {
    var divs = $('div.module');
    console.log(divs.length, divs);
    return divs;
}

/**
 * 2.1.2. Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
 */
Sandbox.prototype.getThirdItem1 = function () {
    var thirdItem = $('ul>li:eq(2)')[0];
    console.log(thirdItem);
    return thirdItem;
}

// This is the best method because it does not have to iterate through all the dom elements
Sandbox.prototype.getThirdItem2 = function () {
    var thirdItem = $('#myListItem');
    console.log(thirdItem);
    return thirdItem;
}

Sandbox.prototype.getThirdItem3 = function () {
    thirdItem = $('ul>li:nth-child(3)')[0];
    console.log(thirdItem);
    return thirdItem;
}

/**
 * 2.1.3. Select the label for the search input using an attribute selector.
 */
Sandbox.prototype.getSearchLabel = function () {
    var searchLabel = $('label[for=q]');
    console.log(searchLabel);
    return searchLabel;
}

/**
 * 2.1.4. Figure out how many elements on the page are hidden
 */
Sandbox.prototype.getHiddenElements = function () {
    var hiddenElements = $('[hidden]').length;
    console.log('Hidden elements: ', hiddenElements);
    return hiddenElements;
}

/**
 * 2.1.5. Figure out how many image elements on the page have an alt attribute.
 */
Sandbox.prototype.getImgWithAlt = function () {
    var imgWithAlt = $('img[alt]').length;
    console.log('images with alt attr: ', imgWithAlt);
    return imgWithAlt;
}

/**
 * 2.1.6. Select all of the odd table rows in the table body.
 */
Sandbox.prototype.getOddTableRows = function () {
    var oddTableRows = $('tbody>tr:odd');
    console.log('odd table rows: ', oddTableRows);
    return oddTableRows;
}

// 2.2	Traversing

/**
 * 2.2.1. Select all of the image elements on the page; log each image’s alt attribute.
 */
Sandbox.prototype.logImageAttr = function () {
    $('img').each(function (index, img) {
        console.log($(this).attr('alt'));
    });
}

/**
 * 2.2.2. Select the search input text box, then traverse up to the form and add a class to the form.
 */
Sandbox.prototype.selectAndTravers = function () {
    $('input[name=q]').parent('form').addClass('form-class');
}

/**
 * 2.2.3. Select the list item inside #myList that has a class of “current” and remove that class from it; add a class of “current” to the next list item.
 */
Sandbox.prototype.myListAddRemoveClass = function () {
    var current = $('#myList>li.current').removeClass('current');
    var next = current.next();
    if (next) {
        next.addClass('current');
    }
}

/**
 * 2.2.4. Select the select element inside #specials; traverse your way to the submit button.
 */
Sandbox.prototype.specialsSelectAndTraverse = function () {
    var submit = $('#specials select[name=day]').parent().next('li').find('.input_submit');
    console.log(submit);
}

/**
 * 2.2.5. Select the first list item in the #slideshow element; add the class “current” to it, and then add a class of “disabled” to its sibling elements.
 */
Sandbox.prototype.slideActivateDisable = function () {
    $('#slideshow').children().first()
        .addClass('current')
        .siblings().addClass('disabled');
}

// 2.3 Manipulating

/**
 * 2.3.1. Add five new list items to the end of the unordered list #myList.
 */
Sandbox.prototype.myListAddItems = function () {
    var newItem = '';
    for (var i = 8; i < 13; i++) {
        newItem += '<li>new item ' + i + '</li>';        
    }
    $('#myList').append(newItem);
}

/**
 * 2.3.2. Remove the odd list items
 */
Sandbox.prototype.myListRemoveOddItems = function () {
    $('#myList').children(':odd').remove();
}

/**
 * 2.3.3. Add another h2 and another paragraph to the last div.module
 */
Sandbox.prototype.divModuleAddH2 = function () {
    var header = $('<h2>').text('New Header');
    var paragraph = $('<p>').text('Hello new paragraph');
    $('div.module').last().append(header, paragraph);
}

/**
 * 2.3.4. Add another option to the select element; give the option the value “Wednesday” 
 */
Sandbox.prototype.selectAddOption = function () {
    var option = $('<option>').attr('value', 'Wednesday').text('Wednesday');
    option.insertAfter($('select[name=day] option').get(2));
}

/**
 * 2.3.5. Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
 */
Sandbox.prototype.addNewDivModule = function () {
    var image = $('img').first().clone();
    $('<div>')
    .addClass('module')
    .append(image)
    .insertAfter($('div.module').last());
}