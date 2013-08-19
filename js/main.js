/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.navigation span').on('click',function(evt){
        $('.pane h1').removeClass('active');
        $('.' + evt.target.id + ' h1').addClass('active');

        $('html,body').animate({
            scrollTop: $('.' + evt.target.id).offset().top - 15
        }, 2000);
    })
    
    $('.pane').on('mouseenter',function(evt){
        $('.pane h1').removeClass('active');
        $('.' + evt.delegateTarget.classList[0] + ' h1').addClass('active');
    })
})
