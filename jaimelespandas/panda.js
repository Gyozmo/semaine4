
$(document).ready(function(){


    // $( 'button[data-type="roux"]'&&'[data-tendance="amour"]' ).click(function() {
    //     $('button[data-type="roux"]'&&'[data-tendance="amour"]').after("ouai c cool ");
    // }

    //panda roux love
    $('button[data-type="roux"][data-tendance="amour"]').click(function(){
        $('button[data-type="roux"][data-tendance="amour"]').after('<div class="aimeRoux"><p>cool </p></div>')
    });

    //panda roux hate
    $('button[data-type="roux"][data-tendance="haine"]').click(function(){
        $('button[data-type="roux"][data-tendance="haine"]').after('<div class="haineRoux"><p>jm pas les roux  </p></div>')
    });

    //panda normal amour
    $('button[data-type="normaux"][data-tendance="amour"]').click(function(){
        $('button[data-type="normaux"][data-tendance="amour"]').after('<div class="aimeNormal"><p>jm les normaux </p></div>')
    });

    //panda normal haine
    $('button[data-type="normaux"][data-tendance="haine"]').click(function(){
        $('button[data-type="normaux"][data-tendance="haine"]').after('<div class="aimeNormal"><p>jm pas les normaux </p></div>')
    });

    // //panda wtf select all pandas
    // $('.panda').click(function(){
    //     $('.panda').after('<div class="aimeNormal"><p>les pandas c cool </p></div>')
    // });        




});