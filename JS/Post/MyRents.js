$(document).ready(() => {

    setNavBar('');

    GetOwnRentsCarsList();

    $('#btn_search').click(()=>{
        GetOwnRentsCarsList($('#searchBox').val());
    });
})