// good luck !


//jquery test
$(document).ready(function(){
console.log('hello');
});


//apply color to squares at bottom
$('input').each(function() {
  var caseColor = $(this).attr('data-color')
  $(this).css('background-color' ,caseColor)
})
//end

$('#modify-texte').click(function() {
  $('div').toggleClass('colorToggle')
  if ($(this).is(':checked')) {
    $(this).css('color','red')
console.log('checked');
} else {
  console.log('unchecked');
}
})



var caseColor = $(this).attr('data-color')




$('input').click(function() {
  var caseColor = $(this).attr('data-color')
  $('body').css('background-color', caseColor);
console.log($(this).attr('data-color'));
})
