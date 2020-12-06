$(document).ready(() => {
    let url = new URL(window.location.href);
    let username = url.searchParams.get("username");
    let $register = $('#register');
    if (username) {
        $('#btn_login').text(username);
        $('#about').attr('href', 'HTML/addAnnounce.html').text('Ajouter une annonce');
        $register.text('Se déconnecter').attr('href', 'HTML/register.html');
    } else {
        $('#connexion').attr('href', 'HTML/login.html')
    }

    if ($register.text() === "S'inscrire") {
        $register.attr("href", 'HTML/register.html');
    }

    if ($register.text() === "Se déconnecter") {
        $register.attr("href", 'HTML/login.html');
    }
    GetAllCarsList();

    $('#btn_search').click((e)=>{
        GetAllCarsList($('#searchBox').val());
    });

    $('#qf_btn_search').click((e)=>{
        let x = {};
        $.each($('#form input').serializeArray(), function() {
            x[this.name] = this.value;
        });
        debugger;
        GetAllCarsList(x,true);
    });

})