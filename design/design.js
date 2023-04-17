let color = 0;
let ody = 0;
function dark(){
    color = 1;
    if (ody == 0){
        document.getElementById('main').className = 'dark';
    } else {
        document.getElementById('main').className = 'dark opendyslexic';
    }

}

function light(){
    color = 0;
    if (ody == 0){
        document.getElementById('main').className = 'light';
    } else {
        document.getElementById('main').className = 'light opendyslexic';
    }
}

function opendyslexic(){
    if (color == 1){
        document.getElementById('main').className = 'dark opendyslexic';
    }else{
        document.getElementById('main').className = 'light opendyslexic';
    }

}