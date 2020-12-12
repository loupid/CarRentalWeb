$(document).ready(() => {

    setNavBar('../');

    GetOwnAnnouncesCarsList();

    $('#btn_search').click(()=>{
        GetOwnAnnouncesCarsList($('#searchBox').val());
    });
})