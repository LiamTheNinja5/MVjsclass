const order = [];
const userinput = [];
let pos = 0;

function start(){
        document.getElementById('start').style.display = "none";
        document.getElementById('game').style.display = "inline";
        addnum();
}

function addnum(){
    let num = Math.floor((Math.random() * 4)+1);
    order.push(num);
    alert('Order: '+order)
}

function btn(numb){
    document.getElementById('tell').innerHTML = "You clicked the right box"
    setTimeout(untell, 1500)
    userinput.push(numb);
    test('userinput: '+ userinput);
    test('order: '+ order);
    if (userinput.length == order.length) {
    if (order[pos]==userinput[pos]) {
        
        
        pos = pos +1;
        document.getElementById('score').innerHTML = order.length;
        userinput.length = 0
        addnum();
        
    } else {
        document.write('Game over. </br> Youre score is: '+order.length+'</br></br> <button onClick="window.location.reload();">Start Over</button>')
    }
}
}


 function test(testinput){
    console.log(testinput);
 }

 function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 

 function untell(){
    document.getElementById('tell').innerHTML = "[]"
 }