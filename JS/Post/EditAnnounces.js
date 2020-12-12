$(document).ready(() => {
    setNavBar('../')
    getAnnounce();
    let url = new URL(window.location.href);

    $('#btn_confirm_remove_announce').click((e) => {
        if (confirm("Voulez vous vraiment supprimer l'annonce")){
            let x = {};
        x.idannounce = url.searchParams.get('id');
        $.ajax('../Php/RemoveAnnounce.php', {
            method: 'post',
            data: x,
            success: (res) => {
                res = JSON.parse(res);
                if (res.statusCode === 200){
                    alert('Votre announce à été supprimé')
                    window.location = '../HTML/myAnnounces.html'
                }
                else if (res.statusCode === 201){
                    alert('Votre annonce est en location')
                }
            }
        }
        );
        }

          e.preventDefault();
    });

    $('#form').submit(function(e) {
        let file_data = $('#image').prop('files')[0];
        if(file_data) {
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
        }else {
            file_data = {};
            file_data.name = $("#span_image_choice").text();
        }

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

        x.idannounce = url.searchParams.get('id');

        $.ajax('../Php/EditAnnounce.php', {
            type: 'post',
            data: x,

            success: (dataResult) => {
                dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode === 200) {
                    window.location = '../index.html';
                    alert("modification de l'annonce reussi");
                } else {
                    alert("Erreur lors de l'enregistrement");
                }
            }
        });
        e.preventDefault();
    });
});