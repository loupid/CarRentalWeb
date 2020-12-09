$(document).ready(() => {
    $('#form').submit((e) => {

        let data = {};
        $.each($('#form').serializeArray(), function() {
            data[this.name] = this.value;
        });

        $.ajax('../Php/Login.php', {
            type: 'post',
            data: data,
            success: (response) => {
                debugger;
                if (response >= 1) {
                    window.location = '../index.html';
                } else {
                    alert("Le nom de l'utilisateur ou le mot de passe est incorrecte")
                }
            }
        });
        e.preventDefault();
    });
});