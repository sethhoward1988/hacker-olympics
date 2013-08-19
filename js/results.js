/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.stats .image').on('click',function(evt){
        $(evt.target).parent().parent().next().find('.code').slideToggle()
    })
    
    $('.info .image').on('click',function(evt){
        var klass = '.' + $(evt.target).attr('person');
        var element = $('#top_code .codeview.' + klass);
        if((element).css('display') == 'none'){
            $('#top_code .codeview').each(function(){
                $(this).slideUp();
            })
            var klass = '.' + $(evt.target).attr('person');
            $('#top_code .codeview.' + klass).slideDown();
        } else {
            $('#top_code .codeview').each(function(){
                $(this).slideUp();
            })
        }
    })
    $('.honorable .image').on('click',function(evt){
        var klass = '.' + $(evt.target).attr('person');
        var element = $('#honorable_code .codeview.' + klass);
        if((element).css('display') == 'none'){
            $('#honorable_code .codeview').each(function(){
                $(this).slideUp();
            })
            var klass = '.' + $(evt.target).attr('person');
            $('#honorable_code .codeview.' + klass).slideDown();
        } else {
            $('#honorable_code .codeview').each(function(){
                $(this).slideUp();
            })
        } 
    })    
})