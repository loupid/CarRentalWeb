$(document).ready((e) => {
    $('#form').submit(function (e) {
        debugger;
        var file_data = $('#image').prop('files')[0];
        var form_data = new FormData();
        form_data.append('file', file_data);

        $.ajax('../Php/Upload.php',{
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: (e) => {
            }
        });

        let x = {};
        $.each($('#form').serializeArray(), function() {
            x[this.name] = this.value;
        });

        if (!file_data.name){
            x.filename = "Logo.png"
        }else x.filename = file_data.name;

        if (!x.available){
            x.available = "off"
        }

        $.ajax('../Php/AddAnnounce.php', {
            type: 'post',
            data: x,
            success: (dataResult) => {
                debugger;
                dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode === 200) {
                    window.location = '../index.html?username=' + dataResult.user;
                    alert("Ajout de l'annonce reussi");
                } else if (dataResult.statusCode === 201) {
                    alert("Erreur lors de l'enregistrement");
                }
            }
        });
        e.preventDefault();
    });
})