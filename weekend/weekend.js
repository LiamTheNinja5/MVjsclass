//gets the day from 0(sunday) to 6(saterday)
const d = new Date();
let day = d.getDay();
let dayleft = 0;

function daycheck(){
    if (day>0 && day<6){
        weekday();
    } else {
        weekend();
    }
}



function weekday(){
    dayleft = 6 - day;
    document.getElementById('output').innerHTML = "There are ["+(dayleft)+"] days including today until the weekend";
    dayleft = 0;
}

function weekend(){
    if (day == 0){
        dayleft = 1;
    } else {
        dayleft = 2;
    }
    document.getElementById('output').innerHTML = "ITS THE WEEKEND! <br> There are ["+(dayleft)+"] Days left including today"
    dayleft = 0;
}