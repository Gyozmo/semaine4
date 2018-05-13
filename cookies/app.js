$(document).ready(function(){
	//votre code
$('img').click(function() {
  let string = $(this).text();
  let strToNbr = parseInt($('.counter').text())

$('span').text(strToNbr+=1)

var number = Math.floor(Math.random() * 6);
console.log(number);

var array = ['tu perd ton temps','Trouve un hobby','Fais du sport','Mais pourquoi tu traine ici','Rien de mieux a faire ?','Essai le rameur','Achete toi un poney']

console.log(array[number]);





if ($('span').text() == 20) {
  alert(array[number])
} else if ($('span').text() == 40) {
 alert(array[number])
} else if ($('span').text() == 60) {
  alert(array[number])
} else if ($('span').text() == 80) {
  alert(array[number])
location.reload();
}


})
});
