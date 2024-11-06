$(document).ready(function () {
    $(".date-mobile").mask("+7 (999) 999-99-99");


    $('.submit').click(function (){
    var form = JQuery(this).closest('form');
    
    if (form.valid() ){
        var actURL = form.attr('action');
        JQuery.ajax({
            url: actURL,
            type: 'post',
            dataType: 'html',
            data: form.serialize(),
            success: function(data){
                form.find('.status').html('Письмо успешно отправлено');
            },
            error: function(){
                form.find('.status').html('серверная ошибка');
            }
        })
    }
    })
});