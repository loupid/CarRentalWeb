function openNav() {
    $("#mySidenav").css({"marginLeft": "0px"});
    $("#icon_btn_burger").css({"color": "#fd5e53"});
}

function closeNav() {
    $("#mySidenav").css({"marginLeft": "-250px"});
    $("#icon_btn_burger").css({"color": "#ffffff"}).hover(function () {
        $(this).css("color", "#fd5e53")
    }, function () {
        $(this).css("color", "#ffffff")
    });
    $(".quick_filter").css({"left": "0%"});
}

function isRegisterValid(data){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(data['register_email'])){
        return false;
    }

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (data[key]) {
                if (key === "firstname" || key === "lastname" || key === "username" || key === "register_email") {
                    if (data[key].length > 50)
                        return false;
                }
                if (key === "phonenumber") {
                    if (data[key].length > 10)
                        return false
                }
                if (key === "register_password"){
                    if (data[key].length > 255)
                        return false;
                }
            }
            else return false;
        }
    }
    return true;
}

function setImageText() {
    var imageFile = document.getElementById('image');
    debugger;
    $("#span_image_choice").text(imageFile.files.item(0).name);
}