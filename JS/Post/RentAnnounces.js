$(document).ready((e)=>{
    setNavBar('../');

    getAnnounce();

    $('#btn_confirm_rent_announce').click(()=>{
        if (IsConnected()) {
            let url = new URL(window.location.href);
            let jsonData = {};
            jsonData.idannounce = url.searchParams.get('id');
            jsonData.iduserowner = getCookie('userid')
            $.ajax('../Php/AddRent.php', {
                type: 'post',
                data: jsonData,
                success: (response) => {
                    response = JSON.parse(response);
                    if (response.statusCode === 200) {
                        window.location = '../index.html';
                    } else alert('La location a echouer')
                }
            })
        }
        else window.location = 'login.html'
    });
})
