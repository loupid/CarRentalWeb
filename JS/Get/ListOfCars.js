function GetAllCarsList(item, isQuickFilter) {
    let cards = $(".cards");
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
            cards.empty();
            let len = response.length;
            for (let i = 0; i < len; i++) {
                let id = response[i].idannounce;
                let brandname = response[i].brandname;
                let carname = response[i].carname;
                let seatcount = response[i].seatcount;
                let title = response[i].title;
                let price = response[i].price;
                let location = response[i].location;
                let imgFileName = response[i].imgfilepath;


                if (!imgFileName){
                    imgFileName = "default_car.png";
                }

                let card ="<a href=\"HTML/rentAnnounce.html?id=" + id + "\">" +
                    "<li class='card'>" +
                    "<img alt='Avatar' id='car_image' src='Images/" + imgFileName + "'>" +
                    "<div class='vehicle_details'>" +
                    "<b>" + title + "</b><br><br>" +
                    "<i class=\"fas fa-car-side icon\" style=\"color: black\"></i>" + brandname + " " + carname +
                    "<i class=\"fas fa-users icon\" style=\"color: black; margin-left: 20px\"></i>" + seatcount + " passagers<br>" +
                    "<i class=\"fas fa-dollar-sign icon\" style=\"color: black\"></i>" + price + "$/jour" +
                    "<i class=\"fas fa-map-marked-alt icon\" style='margin-left: 20px;'></i>" + location + "<br>" +
                    "</div>" +
                    "</li>" +
                    "</a>";

                cards.append(card);
            }
        }
    });
}
