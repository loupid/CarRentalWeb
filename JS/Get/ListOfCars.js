    function GetAllCarsList(){
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
                    var description = response[i].description;

                    var tr_str = "<div class='card'>" +
                        "<img src='Images/Logo.PNG' alt='Avatar' class='car_image'>" +
                        "<div class='vehicle_details'>" +
                        "<h4 class='vehicle_name'><b>" + brandname + " " + carname + "</b></h4>" +
                        "<label class='vehicle_description'>" + description + "</label><br>" +
                        "<label class='vehicle_passenger_count'>" + seatcount + "</label><br>" +
                        "<label class='vehicle_price'>" + "200$/day" + "</label><br>" +
                        "<label class='vehicle_localisation'>" + "Montréal" + "</label>" +
                        "</div>" +
                        "</div>";
                    $(".cards").append(tr_str);
                }

            }
        });
    }
