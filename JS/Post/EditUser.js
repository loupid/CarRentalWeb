$(document).ready(() => {
    $('#phonenumber').inputmask("(999) 999-9999");

    let x = {};
    x.iduser = getCookie('userid');

    $.ajax('../Php/GetUserInfo.php', {
        type: 'get',
        data: x,
        success: (result) => {
            result = JSON.parse(result);
            $.each($(`#form input`).serializeArray(), function() {
                $('#'+this.name).val(result[this.name]);
            });
        }
    })

    $('#form').submit((e) => {
        let data = {};
        $.each($('#form').serializeArray(), function() {
            data[this.name] = this.value;
        });
        data.iduser = getCookie('userid');
        setCookie('username', data.username, (86400 * 5))
        if (isRegisterValid(data, !data.password)) {
            $.ajax('../Php/EditUser.php', {
                type: 'post',
                data: data,
                success: (dataResult) => {
                    dataResult = JSON.parse(dataResult);
                    if (dataResult.statusCode === 200) {
                        window.location = '../index.html';
                        alert("Modification réussi")
                    } else if (dataResult.statusCode === 201) {
                        alert("Erreur lors de l'enregistrement");
                    }
                }
            });
            $.ajax('../php/EditUserPassword.php',{
                type: 'post',
                data: data,
                success: (dataResult) => {
                    dataResult = JSON.parse(dataResult);
                    if (dataResult.statusCode === 200) {
                        window.location = '../index.html';
                        alert("Modification du mot de passe")
                    } else if (dataResult.statusCode === 201) {
                        alert("Erreur lors de l'enregistrement");
                    }
                }
            })
        }else alert("Erreur dans l'entrer des données")
        e.preventDefault();
    });
})