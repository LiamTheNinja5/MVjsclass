let color = 0;
let ody = 0;
function dark(){
    document.getElementById('s1').innerHTML = 'Dark';
    color = 1;
    if (ody == 0){
        document.getElementById('main').className = 'dark';
    } else {
        document.getElementById('main').className = 'dark opendyslexic';
    }

}

function light(){
    document.getElementById('s1').innerHTML = 'Light';
    color = 0;
    if (ody == 0){
        document.getElementById('main').className = 'light';
    } else {
        document.getElementById('main').className = 'light opendyslexic';
    }
}

function opendyslexic(){
    if (ody == 1){
        document.getElementById('s2').innerHTML = 'Off';
        document.getElementById('content').className = '';
        ody = 0;
    } else {
        document.getElementById('s2').innerHTML = 'On';
        document.getElementById('content').className = 'opendyslexic';
        ody = 1;
    }
}


function hideset(){
    document.getElementById('settings').style.display = "none"
    document.getElementById('showset').style.display = "inline"
}
function showset(){
    document.getElementById('showset').style.display = "none"
    console.log('gtbakigbekibg')
    document.getElementById('settings').style.display = "inline"
}






function debug(){
    console.log('ody: '+ody)
    console.log('color: '+color)
}