let number = 1;
let newP = true;


function myFunction(numb) {
    for (i=1; i < 5; i++){
        if (i==numb){
            document.getElementById("myDropdown"+numb).classList.toggle("show");
            log('test')
        }else {
            document.getElementById("myDropdown"+i).classList.remove('show');
    }
    }
    
    }

function hide(event){
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
  }
window.onclick = function(event){
   hide(event);
}

function hilight(num){
    for (i=1; i <= 4; i++){
        if (i==num){
            document.getElementById("dropdown"+num).classList.toggle("hilight");
            log('test');
        }else {
            document.getElementById("dropdown"+i).classList.remove('hilight');
    }
    }
    // select(number);
    // select(num);
    // number = num; 
}

function select(numb){
    hilight(numb);
}


window.addEventListener('keydown', keypress, false)
function keypress(e){

    //right
    if (e.keyCode== 39){
        
        if (number == 4) {
            select(number);
            number = 1;
            select(number);
        } else if (newP){
            newP = false
            select(number);
        } else{
            select(number);
            number = number+1;
            select(number);
        }

        

    }
    //left
    if (e.keyCode== 37){
        if (newP){
            newP = false
            select(number);
        } else if (number == 1) {
            select(number);
            number = 4;
            select(number);
        }else{
            select(number);
            number = number-1;
            select(number);
        } 

    }

    //space
    if (e.keyCode == 32 || e.keyCode == 13){
        myFunction(number);
        
        
    }
}


function log(message){
    console.log(message);
}