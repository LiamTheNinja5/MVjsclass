
//Count down to Time Trials

var countDownDate = new Date("June 15, 2024 01:00:00").getTime();
var timer = document.getElementById("timer");
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        timer.innerHTML = "The next Time trials date has not been announced.";
    }
}, 1000);
//Interactive navigation links or menus 
function link(number) {
    //send back to index.html
    if (number > 5) {
        location.href = '/MVjsclass/NKAT_D/index.html';
    }
    //send to link
    if (number == 1) {
        location.href = '/MVjsclass/NKAT_D/Levels.html';
    }

    if (number == 2) {
        location.href = '/MVjsclass/NKAT_D/Timecuts.html';
    }

    if (number == 3) {
        location.href = '/MVjsclass/NKAT_D/Merch.html';
    }

    if (number == 4) {
        location.href = 'https://www.gomotionapp.com/team/minkat/page/home';
    }

    if (number == 5) {
        location.href = 'https://usaswimming.org';
    }



}

//check for valid email
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'+"/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

        alert("Valid email address!");
 
        document.form1.text1.focus();

    } else {

        alert("Invalid email address!");

        document.form1.text1.focus();

    }

}

//A text field where the visitor enters information that shows the outcome through calculations 
function CaculateTime() {
    var a = 0;
    var b = 0;
    var c = 0;
    a = a + document.getElementById("utime1").value;
    b = b + document.getElementById("utime2").value;
    c = c + document.getElementById("utime3").value;
    DisplayTime(((parseInt(a)*60+parseInt(b)+(parseInt(c)*.01))-49.99).toFixed(2))
  } 


function DisplayTime(display){
    document.getElementById('timedisplaybox').style.display = 'inline';
    if (display > 0 ){
        document.getElementById("timedisplay").innerHTML= display;
    } else {
        document.getElementById("timedisplaybox").innerHTML= 'Good Job! <br> You made The Olympic time trials!';
        document.getElementById('timetrials').style.backgroundColor = 'green';
    }
    
} 

function annoyUsers(){
    // this was the worst thing I ever decided to code.
    alert('!!NEW FETUER ALERT!!\nEnter you 100 Free time to see how close you are to olympic time trials!');
    console.log('ahahhahah you have been annoyed >=)')
    
    
}