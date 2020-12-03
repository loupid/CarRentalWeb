function renderpage(url,e) {
    e.document.getElementById('#connection')
    $.get(url, function (data) {
        $('#main_body').html(data);
    });
}