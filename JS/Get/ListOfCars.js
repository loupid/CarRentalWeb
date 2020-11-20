function GetAllCarsList() {
    $.ajax({
        url: 'Php/CarsList.php',
        type: 'get',
        dataType: 'JSON',
        success: function (response) {
            var len = response.length;
            for (var i = 0; i < len; i++) {
               let username = response[i].username;
               let brandname = response[i].brandname;
               let carname = response[i].carname;
               let seatcount = response[i].seatcount;
               let typename = response[i].typename;
               let title = response[i].title;
               let price = response[i].price;
               let town = response[i].town;
               let description = response[i].description;
               let imgFileName = response[i].imgFileName;

                var tr_str = "<div class='card'>" +
                    "<img alt='Avatar' id='car_image' src='Images/" + imgFileName + "'>" +
                    "<div class='vehicle_details'>" +
                    "<b>" + title + "</b><br><br>" +
                    "<i class=\"fas fa-car-side icon\" style=\"color: black\"></i>" + carname +
                    "<i class=\"fas fa-users icon\" style=\"color: black; margin-left: 20px\"></i>" + seatcount + " passagers<br>" +
                    "<i class=\"fas fa-dollar-sign icon\" style=\"color: black\"></i>" + price + "$/jour" +
                    "<i class=\"fas fa-map-marked-alt icon\" style='margin-left: 20px;'></i>" + town + "<br>" +
                    "</div>" +
                    "</div>";
                
                $(".cards").append(tr_str);
            }
        }
    });
}
