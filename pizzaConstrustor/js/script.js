/**
 * Created by zaa on 23.12.2016.
 */
$(document).ready(function(){
    var tabs = $('#addIngreds');
    $('.js-tabs > .js-tabs-page', tabs).each(function(i){
        if (i != 0) $(this).hide(0);
    });
    tabs.on('click', '.js-tab-nav a', function(e){

        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.js-tab-nav a',tabs).removeClass('active');
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.js-tabs > .js-tabs-page', tabs).hide(0);
        $(tabId).show();
    });
});