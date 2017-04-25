/**
 * Created by zaa on 27.12.2016.
 */
/**
 * Created by zaa on 23.12.2016.
 */
$(document).ready(function(){
    var tabs = $('#addIngreds > .js-tabs');

    tabs.on('click', '.addit-item', function(e){

        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* При нажатии на продукт, вічисляются занчение атрибутов
        * linkPhoto для src для добавление ингридиентов на основной пицце
        *
        * */

        var linkPhoto = $(this).attr('data-ingimg');
        $('.cnstr-photo').append('<img class="cnstr-item-photo" style="z-index: 1;"' + 'src = '+ linkPhoto +'>' );
        /*---------------------------------*/
        var weight =  $(this).find('.addit-item-weight  > .val').text();

        var  oldweight = $('.itemWeight-value').text();

        $('.itemWeight-value').text(Number(oldweight) + Number(weight));


        var price = $(this).find('.addit-item-price > .val').text();

        var  oldprice = $('.itemPrice-value').text();

        $('.itemPrice-value').text(Number(oldprice) + Number(price));





    });
});
