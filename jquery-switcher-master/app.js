var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !

	//ajout image qu'on change
	$('#holder').append('<img class="myimage" src=""/>')

	console.log($('button[data-animal="cat"]'));

	$('button').click(function() {
		var animal = $(this).attr("data-animal")
		var imgAnimal = 'img/'+species[animal]
console.log(imgAnimal);


		$('.myimage').attr('src',imgAnimal)
		console.log($('.myimage'));
		


		



			console.log(species[animal]);
	})
	
	
	
	
	
	
	
	
	
	
	// //cat img
	// $('button[data-animal="cat"]').click(function(){
	// 	$('#holder').css("background-image", "url(./img/cat.jpg)");

	// })

	 
}

$(document).ready(function(){
	main();
});

