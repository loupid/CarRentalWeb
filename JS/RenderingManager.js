function renderpage(url,e) {
    debugger;
    e.document.getElementById('#connection')
    $.get(url, function (data) {
        $('#main_body').html(data);
    });
}