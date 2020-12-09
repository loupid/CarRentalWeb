$(document).ready((e)=>{
    setNavBar('../');

    getAnnounce();

    $('#btn_confirm_rent_announce').click((e)=>{
        $.ajax('../Php/AddRent.php',{
            type: 'post',
            data: jsonData,
            success: (response) => {
                response = JSON.parse(response);
                debugger;
                if (response.statusCode === 200){
                    window.location = '../index.html?username=' + response.user;
                }
            }
        })
    });
})
