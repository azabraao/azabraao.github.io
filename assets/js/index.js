$(document).ready(function(){
    $('.js-portifolio-item').on('click',function(){
        $(this).find('.portifolio__item-description').toggle();
        $(this).toggleClass("js-unset-height");
    });

    $(".js-hability-percentage" ).each(function(index){
        let percent = $(this).data("percentage");
        $(this).width(percent);
    });
    
    habilitie__list_odered = $(".js-hability-percentage" ).sort((a,b) => $(b).data('percentage') - $(a).data('percentage'));
    
    $(habilitie__list_odered).each((index,item) => {$(item).parent().css("order",index)});

});