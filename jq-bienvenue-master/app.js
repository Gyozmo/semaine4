console.log('have fun !');



$(document).ready(function(){

$('#city').after('<button class="valider">Valider</button>')

$("button").click(function(){

var firstname = $('#first_name').val();
var lastname = $('#last_name').val();
var city = $('#city').val();

console.log(firstname,lastname, city);

var object = {

objFirstname:firstname,
objLastname:lastname,
objCity:city



}

$('#username').text(object.objFirstname+' '+object.objLastname)

console.log(object);



});

});