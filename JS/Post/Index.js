$(document).ready((e) => {

    setNavBar('');

    GetAllAvailableCarsList();

    $('#btn_search').click(()=>{
        GetAllAvailableCarsList($('#searchBox').val());
    });

    $('#qf_btn_search').click((e)=>{
        let x = {};
        $.each($('#form input').serializeArray(), function() {
            x[this.name] = this.value;
        });
        GetAllAvailableCarsList(x,true);
    });

})