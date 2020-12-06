$(document).ready((e)=>{
    let url = new URL(window.location.href);
    let jsonData = {};
    jsonData.idannounce = url.searchParams.get('id');
    $.ajax('../Php/GetAnnounceInfo.php',{
        type: "get",
        data: jsonData,
        success: (response)=>{
            let result = JSON.parse(response);
            $('#imgfilepath').attr('src', '../Images/'+ result['imgfilepath']);

            $.each($('#form input').serializeArray(), function() {
                $('#'+this.name).val(result[this.name]);
            });

            $('#description').val(result['description']);
        }
    });

    $('#btn_confirm_rent_announce').click((e)=>{
        $.ajax('../Php/AddRent.php',{
            type: 'post',
            data: jsonData,
            success: (response) => {
                response = JSON.parse(response);
                if (response.statusCode === 200){
                    window.location = '../index.html?username=' + dataResult.user;
                }
            }
        })
    });
})
