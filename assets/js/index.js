$(document).ready(function(){
    $('.js-portifolio-item').on('click',function(){
        $(this).find('.portifolio__item-description').toggle();
        $(this).toggleClass("js-unset-height");
    });
    $('.js-hability-percentage').data("percentage");
    
    $( ".js-hability-percentage" ).each(function(index){
        let percent = $(this).data("percentage");
        $(this).width(percent);
    });
});