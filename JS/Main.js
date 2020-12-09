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

function setNavBar(racine){
    let username = getCookie('username')
    let $register = $('#register');
    if (username) {
        $('#btn_login').text(username);
        $register.text('Se déconnecter').attr('href', racine + 'HTML/register.html');
    } else {
        $('#connexion').attr('href', 'HTML/login.html')
    }

    if ($register.text() === "S'inscrire") {
        $register.attr("href", 'HTML/register.html');
    }

    if ($register.text() === "Se déconnecter") {
        $register.attr("href", 'HTML/login.html');
    }

    $('#btn_burger').attr('onclick',openNav());
}

function isRegisterValid(data){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(data['email'])){
        return false;
    }

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (data[key]) {
                if (key === "firstname" || key === "lastname" || key === "username" || key === "email") {
                    if (data[key].length > 50)
                        return false;
                }
                if (key === "phonenumber") {
                    if (data[key].length > 14)
                        return false
                }
                if (key === "password"){
                    if (data[key].length > 255)
                        return false;
                }
            }
            else return false;
        }
    }
    return true;
}

function getAnnounce(){
    let url = new URL(window.location.href);
    let jsonData = {};
    jsonData.idannounce = url.searchParams.get('id');
    $.ajax('../Php/GetAnnounceInfo.php',{
        type: "get",
        data: jsonData,
        success: (response)=>{
            let result = JSON.parse(response);

            let imgUrl = "../Images/" + result['imgfilepath'];
            imgUrl = !imageExists(imgUrl) ? "../Images/default_car.png" : imgUrl;

            $('#imgfilepath').attr('src', imgUrl);

            $.each($('#form input').serializeArray(), function() {
                $('#'+this.name).val(result[this.name]);
            });

            $('#description').val(result['description']);
        }
    });
}

function setImageText() {
    let imageFile = document.getElementById('image');
    $("#span_image_choice").text(imageFile.files.item(0).name);
}

function imageExists(image_url){
    let http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status !== 404;
}

//Cookie Management
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}