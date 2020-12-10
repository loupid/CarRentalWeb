function GetAllAvailableCarsList(item, isQuickFilter) {
    let data = {};
    if (!isQuickFilter){
        data.searchby = item;
    }
    else{
        data = item;
    }

    $.ajax({
        url: 'Php/CarsList.php',
        type: 'get',
        data: data,
        dataType: 'JSON',
        success: function (response) {
            createCards(response,'','rentAnnounce');
        }
    });
}

function GetOwnRentsCarsList(searchby) {
    let data = {};
    data.searchby = searchby;
    data.iduserclient = getCookie('userid');

    $.ajax({
        url: '../Php/GetMyRents.php',
        type: 'get',
        data: data,
        dataType: 'JSON',
        success: function (response) {
            createCards(response,'../','returnAnnounce');
        }
    });
}

function GetOwnAnnouncesCarsList(searchby) {
    let data = {};
    data.searchby = searchby;
    data.iduserowner = getCookie('userid');

    $.ajax({
        url: '../Php/GetMyAnnounces.php',
        type: 'get',
        data: data,
        dataType: 'JSON',
        success: function (response) {
            createCards(response,'../','editAnnounce');
        }
    });
}