/**
 * Created by zaa on 27.12.2016.
 */
/**
 * Created by zaa on 23.12.2016.
 */
$(document).ready(function(){

        $('#addIngreds').on('click', '.grid-cl_1-4', function(e){

        /* Добавление ингридиентов в левуюколонку ваша пицца состоит из */

        event.stopPropagation();

        /* убираем ингридиент с правой колонки и добавляем в левую */
        $(this).fadeOut(0, function() {
            $(this).appendTo($('.ordPizzaIncl'));
        });

         $(this).fadeIn(200);

    });

    /* Блок "Ваша пицца состоит из", работа счетчика количества ингридиентов при клике на игридиенг, кол-во ингридиентов увеличивается*/


    $('#ordPizzaIncl').on('click', '.grid-cl_1-4', function(e){
        event.stopPropagation();
        var countIngredient = Number($(this).find('.count-ingredient').data('count'));
            countIngredient++;

            console.log(countIngredient);

            $(this).find('.count-ingredient').data('count', countIngredient);

            $(this).find('.count-ingredient').text(countIngredient);


    });


    /* Блок "Ваша пицца состоит из", работа счетчика количества ингридиентов при клике на ингридиент кол-во ингридиентов уменьшается */

    $('#ordPizzaIncl').on('click', '.remove-ingredient', function(e){

        e.stopPropagation();

        var countIngredient = Number($(this).siblings('.count-ingredient').data('count'));
        countIngredient--;


        $(this).siblings('.count-ingredient').data('count', countIngredient);

        $(this).siblings('.count-ingredient').text(countIngredient);

        /* если ингридиент меньше 1, скриваем и возвращаем его в правую колонку */

        if (countIngredient < 1){

            $(this).parent('.addit-item').fadeOut(0, function() {

                $(this).appendTo($('#addIngreds').children('.grid_composition').eq(indexItem));

            });
            $(this).parent('.grid-cl_1-4').fadeIn(0);


        }

    });


});