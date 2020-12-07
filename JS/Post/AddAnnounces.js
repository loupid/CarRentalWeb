$(document).ready(() => {
    $('#form').submit(function (e) {
        let file_data = $('#image').prop('files')[0];
        let form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax('../Php/Upload.php', {
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: (e) => {
            }
        });

        debugger;
        let x = {};
        $.each($('#form').serializeArray(), function () {
            x[this.name] = this.value;
        });

        if (!file_data.name) {
            x.imgfilepath = "Logo.png"
        } else x.imgfilepath = file_data.name;

        if (!x.available) {
            x.available = 0;
        } else x.available = 1;

        $.ajax('../Php/AddAnnounce.php', {
            type: 'post',
            data: x,
            success: (dataResult) => {
                dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode === 200) {
                    window.location = '../index.html?username=' + dataResult.user;
                    alert("Ajout de l'annonce reussi");
                } else {
                    alert("Erreur lors de l'enregistrement");
                }
            }
        });
        e.preventDefault();
    });
})