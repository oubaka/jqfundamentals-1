// 4. Events
function InputHint() {
  /**
   * 4.1.1. Set the value of the search input to the text of the label element
   */
  var labelText = $('label[for=q]').text();
  var input = $('input[name=q]');
  input
    .val(labelText)
    .addClass('hint'); // 4.1.2. Add a class of “hint” to the search input

  $('label[for=q]').remove(); // 4.1.3. Remove the label element

  /**
   * 4.1.4. Bind a focus event to the search input that removes the hint text and the “hint” class
   */
  input.bind('focus', function () {
    $(this).val('').removeClass('hint');
  });

  /**
   * 4.1.5. Bind a blur event to the search input that restores the hint text and “hint” class if no search text was entered
   */
  input.bind('blur', function (e) {
    var input = $(this);
    if (!input.val()) {
      input.val(labelText);
      input.addClass('hint');
    }
  });
}