// 4. Events
function InputHint(){

}

/**
 * 4.1.1. Set the value of the search input to the text of the label element
 */
InputHint.prototype.labelTextToSearchText = function () {
    var labelText = $('label[for=q]').text();
    $('input[name=q]').val(labelText);
}

/**
 * 4.1.2. Add a class of “hint” to the search input
 */
InputHint.prototype.addHintClass = function () {
    $('input[name=q]').addClass('hint');
}

/**
 * 4.1.3. Remove the label element
 */
InputHint.prototype.removeLabelElement = function () {
    this.hintText = $('label[for=q]').text();
    $('label[for=q]').remove();
}

/**
 * 4.1.4. Bind a focus event to the search input that removes the hint text and the “hint” class
 */
InputHint.prototype.bindSearchFocus = function () {
    $('input[name=q]').bind('focus', function () {
        $(this).val('').removeClass('hint');
    });
}

/**
 * 4.1.5. Bind a blur event to the search input that restores the hint text and “hint” class if no search text was entered
 */
InputHint.prototype.bindSearchBlur = function () {
    $('input[name=q]').bind('blur', function (e) {
        var labelText = $('label[for=q]').text();
        var input = $(this);
        if (!input.val()) {
            input.val(labelText);
            input.addClass('hint');
        }
    });
}