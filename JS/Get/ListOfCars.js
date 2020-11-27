function GetAllCarsList() {
    $.ajax({
        url: 'Php/CarsList.php',
        type: 'get',
        dataType: 'JSON',
        success: function (response) {
            let len = response.length;
            for (let i = 0; i < len; i++) {
                let id = response[i].idannounce;
                let brandname = response[i].brandname;
                let carname = response[i].carname;
                let seatcount = response[i].seatcount;
                let title = response[i].title;
                let price = response[i].price;
                let town = response[i].town;
                let imgFileName = response[i].imgFileName;

                debugger;

                let card ="<a href=\"HTML/addAnnounce.html?id=" + id + "\">" +
                    "<li class='card'>" +
                    "<img alt='Avatar' id='car_image' src='Images/" + imgFileName + "'>" +
                    "<div class='vehicle_details'>" +
                    "<b>" + title + "</b><br><br>" +
                    "<i class=\"fas fa-car-side icon\" style=\"color: black\"></i>" + brandname + carname +
                    "<i class=\"fas fa-users icon\" style=\"color: black; margin-left: 20px\"></i>" + seatcount + " passagers<br>" +
                    "<i class=\"fas fa-dollar-sign icon\" style=\"color: black\"></i>" + price + "$/jour" +
                    "<i class=\"fas fa-map-marked-alt icon\" style='margin-left: 20px;'></i>" + town + "<br>" +
                    "</div>" +
                    "</li>" +
                    "</a>";

                $(".cards").append(card);
            }
        }
    });
}
