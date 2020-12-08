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
            $("#carCount").text(len.toString());
            for (let i = 0; i < len; i++) {
                let id = response[i].idannounce;
                let brandname = response[i].brandname;
                let carname = response[i].carname;
                let seatcount = response[i].seatcount;
                let title = response[i].title;
                let price = response[i].price;
                let location = response[i].location;
                let imgFileName = response[i].imgfilepath;

                let imgUrl = "Images/" + imgFileName;
                imgUrl = !imageExists(imgUrl) ? "Images/default.png" : imgUrl;

                let card = `
                    <a class='card_item' href="HTML/rentAnnounce.html?id=${id}">
                        <li class='card'>
                            <div class='car_image' style='background-image: url("${imgUrl}")'></div>
                            <div class='vehicle_details'>
                                <span class="title"> ${title}</span><br>
                                <div class="spec">
                                    <div>
                                        <i class=\"fas fa-car-side icon\"></i> Voiture 
                                        <span>${brandname} ${carname}</span>
                                    </div>
                                    <div>
                                        <i class=\"fas fa-users icon\"></i> Nombre de passagers
                                        <span>${seatcount} passagers</span>
                                    </div>
                                    <div>
                                        <i class=\"fas fa-dollar-sign icon\"></i> Prix
                                        <span>${price} $/jour</span>
                                    </div>
                                    <div>
                                        <i class=\"fas fa-map-marked-alt icon\"></i> Location
                                        <span>${location}</span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn">Voir l'article</button>
                        </li>
                    </a>
                `;

                cards.append(card);
            }
        }
    });
}


