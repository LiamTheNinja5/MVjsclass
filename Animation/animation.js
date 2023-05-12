
var starttime = new Date().getTime();
var countDownDate = new Date(starttime + 11000).getTime(); //its 11 not 10 because you need to account for loading time.



var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("timer").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    
    document.getElementById("timer").innerHTML = "TIME'S UP!!!";
    starta();
    
  }
}, 0);

function starta(){
  requestAnimationFrame(animate);
  show('box')
  requestAnimationFrame(animate1);
  show('color')
  requestAnimationFrame(animate2);
  show('circle')
  requestAnimationFrame(animate3);
  show('ccircle')

}


function show(id){
  document.getElementById(id).classList = 'show ' +id;
}


let box = document.getElementById("box");
  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    box.style.top = (Math.sin(angle) * 20) + "px";
    box.style.left = (Math.cos(angle) * 400) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
  }
  




  let color = document.getElementById("color");
  let boxColor = 0;
  let colors = ['red', 'orange', 'yellow', 'green', 'blue']
  let newvar = 0;
  function animate1(time) {
    if (newvar > 0.51) {newvar =0}

    if (boxColor >= 5){
      boxColor = 0;
      newvar = 0;
    } else {
      boxColor = (Math.round(boxColor + newvar));
      newvar = newvar + 0.01;
      
    }

    
    color.style.backgroundColor = colors[boxColor] ;
    requestAnimationFrame(newTime => animate1(newTime, time));
  }






  let ball = document.getElementById("circle");
  let size = 50;
  let small = true;
  function animate2(time) {

    if (size == 100) {small = true}
    if (size == 50) {small = false}

    if (small == false){
      size = size + 1;
    } else {
      size = size - 1;
    }



    ball.style.height = size + "px";
    ball.style.width = size + "px";
    requestAnimationFrame(newTime => animate2(newTime, time));
  }





  let ballC = document.getElementById("ccircle");
  let angle2 = Math.PI / 2;
  function animate3(time, lastTime) {
    if (lastTime != null) {
      angle2 += (time - lastTime) * 0.001;
    }
    ballC.style.top = (Math.sin(angle2) * 20) + "px";
    ballC.style.left = (Math.cos(angle2) * 200 + 300) + "px";
    requestAnimationFrame(newTime => animate3(newTime, time));
  }
