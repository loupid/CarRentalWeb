function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main_body").style.marginLeft = "250px";
    document.getElementById("icon_btn_burger").style.color = "#fd5e53";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main_body").style.marginLeft= "0";
    document.getElementById("icon_btn_burger").style.color= "#ffffff";
}