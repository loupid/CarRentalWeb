$(document).ready((e)=>{
    setNavBar('../');

    getAnnounce();

    $('#btn_confirm_rent_announce').click((e)=>{
        if (IsConnected()) {
            let url = new URL(window.location.href);
            let jsonData = {};
            jsonData.idannounce = url.searchParams.get('id');
            $.ajax('../Php/RemoveRent.php', {
                type: 'post',
                data: jsonData,
                success: (response) => {
                    response = JSON.parse(response);
                    if (response.statusCode === 200) {
                        window.location = '../index.html';
                    } else alert('La retour a echouer')
                }
            })
        }
        else window.location = 'login.html'
    });
})