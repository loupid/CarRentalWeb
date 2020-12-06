$(document).ready(()=>{
    debugger;
    $('#form').submit(function (e) {
        let url = new URL(window.location.href);
        let idannounce = url.searchParams.get("id");
        let x = {};
        debugger;
        $.ajax('../Php/RentAnnounce',{
            type: "post",
            data: {idannounce: url.searchParams.get("id")},
            success: (response)=>{

                $.each($('#form input').serializeArray(), function() {
                    x[this.name] = this.value;
                });
            }
        });
        e.preventDefault();
    });
})