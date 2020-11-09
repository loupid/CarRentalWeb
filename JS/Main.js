function openNav() {
    $("#mySidenav").css({"width": "250px"});
    $("#main_body").css({"marginLeft": "250px"});
    $("#icon_btn_burger").css({"color": "#fd5e53"});
    $(".quick_filter").css({"margin": "0 7.5% 10% 7.5%"});
}

function closeNav() {
    $("#mySidenav").css({"width": "0"});
    $("#main_body").css({"marginLeft": "0"});
    $("#icon_btn_burger").css({"color": "#ffffff"}).hover(function () {
        $(this).css("color", "#fd5e53")
    }, function () {
        $(this).css("color", "#ffffff")
    });
    $(".quick_filter").css({"margin": "0 30% 10% 30%"});
}
