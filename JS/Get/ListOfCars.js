function GetAllCarsList() {
    $.ajax({
        url: 'Php/CarsList.php',
        type: 'get',
        dataType: 'JSON',
        success: function (response) {
            var len = response.length;
            for (var i = 0; i < len; i++) {
                var username = response[i].username;
                var brandname = response[i].brandname;
                var carname = response[i].carname;
                var seatcount = response[i].seatcount;
                var typename = response[i].typename;
                var title = response[i].title;
                var price = response[i].price;
                var town = response[i].town;
                var description = response[i].description;

                var tr_str = "<div class='card'>" +
                    "<img src='Images/Logo.PNG' alt='Avatar' id='car_image'>" +
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
