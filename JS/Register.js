$(document).ready(() => {
    $('#form').submit((e) => {

        let data = {};
        $.each($('#form').serializeArray(), function() {
            data[this.name] = this.value;
        });
        if (isRegisterValid(data)) {
            $.ajax('../Php/Register.php', {
                type: 'post',
                data: data,
                success: (dataResult) => {
                    dataResult = JSON.parse(dataResult);
                    if (dataResult.statusCode === 200) {
                        window.location = 'login.html';
                        alert("Inscription réussi")
                    } else if (dataResult.statusCode === 201) {
                        alert("Erreur lors de l'enregistrement");
                    }
                }
            });
        }else alert("Erreur dans l'entrer des données")
        e.preventDefault();
    });
});