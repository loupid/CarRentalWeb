function renderpage(url){
    $.get(url,function (data){
        $('#main_body').html(data);
    });
}
