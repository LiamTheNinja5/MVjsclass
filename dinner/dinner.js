var guestList = [];
var toppingList= [];
var toppingNames = [    
    'mushroom',
    'onion',
    'peppers',
    'olives',
    'pepperoni',
    'ham',
    'pineapple',
    'extraCheese',
    'sausage',
    'bacon'
];


var totalGuests=0;
var slices=0;

var mushroom=0;
var onion=0;
var peppers=0;
var olives=0;
var pepperoni=0;
var ham=0;
var pineapple=0;
var extraCheese=0;
var sausage=0;
var bacon=0;

var toppings = [    
    mushroom,
    onion,
    peppers,
    olives,
    pepperoni,
    ham,
    pineapple,
    extraCheese,
    sausage,
    bacon,
];


function addGuest(name,pos){
    let confirmAdd =confirm('Do you want to add '+'"'+name.name+'" '+ 'to the list?')
    if(confirmAdd == true){

    //if a guest likes a topping add a number to the var
    slices = slices + name.slices;

    mushroom = mushroom + name.mushroom;
    onion = onion + name.onion;
    peppers = peppers + name.peppers;
    olives = olives + name.olives;
    pepperoni = pepperoni + name.pepperoni;
    ham = ham+ name.ham;
    pineapple = pineapple + name.pineapple;
    extraCheese = extraCheese + name.extraCheese;
    sausage = sausage+ name.sausage;
    bacon = bacon+ name.bacon;

    
    // push the guests name to the output
    guestList.push(' '+name.name)

    //remove button when added
    document.getElementById('pos'+ pos).style.display ='none'; 
    debug("added "+ pos +" to list");

    // find toppings
    totalGuests= totalGuests + 1;

    toppingList = [];
    for(let i=0; i<10; i++){
        toppings = [    
            mushroom,
            onion,
            peppers,
            olives,
            pepperoni,
            ham,
            pineapple,
            extraCheese,
            sausage,
            bacon,
        ];
        if(toppings[i] == totalGuests){
            
            toppingList.push(toppingNames[i])
        }
    }
    update();
    }
       
}

function clearguests(){
    debug('emptyed guestlist');

    // clear toppings
    slices=0;
    mushroom=0;
    onion=0;
    peppers=0;
    olives=0;
    pepperoni=0;
    ham=0;
    pineapple=0;
    extraCheese=0;
    sausage=0;
    bacon=0;

    // clear arrays
    guestList.length = 0;
    toppingList = [];

    //clear guests
    totalGuests = 0;

    //reset buttons
    for(let i=0; i<9; i++){     
    document.getElementById('pos'+ i).style.display ='';
    update(); 
    }



}

function update(){
    // update the output

    if(toppingList.length === 0){
        toppingList = [' Cheese(plain)']
    }

    document.getElementById('list').innerHTML=
    'Guests: '+guestList
    +"<br>"+'Slices:'+slices
    +"<br>"+'Toppings:'+toppingList;
    
}

function check(topping){
    if(topping == guestList.length){
        return true
    } else {
        return false
    }
}
// peope
const jane = {
    name:'Jane',
    stat:0,
    slices:2,
    mushroom:1,
    onion:1,
    peppers:1,
    olives:1,
    pepperoni:0,
    ham:0,
    pineapple:0,
    extraCheese:0,
    sausage:0,
    bacon:0,
}

const lisa = {
    name:'Lisa',
    stat:0,
    slices:3,
    mushroom:0,
    onion:0,
    peppers:0,
    olives:0,
    pepperoni:1,
    ham:1,
    pineapple:1,
    extraCheese:0,
    sausage:0,
    bacon:0,
}

const taylor = {
    name:'Taylor',
    stat:0,
    slices:3,
    mushroom:0,
    onion:0,
    peppers:0,
    olives:0,
    pepperoni:1,
    ham:0,
    pineapple:0,
    extraCheese:1,
    sausage:1,
    bacon:1,
}

const chris = {
    name:'Chris',
    stat:0,
    slices:2,
    mushroom:1,
    onion:1,
    peppers:1,
    olives:0,
    pepperoni:0,
    ham:1,
    pineapple:0,
    extraCheese:0,
    sausage:1,
    bacon:1,
}

const alyssa = {
    name:'Alyssa',
    stat:0,
    slices:1,
    mushroom:0,
    onion:0,
    peppers:0,
    olives:0,
    pepperoni:1,
    ham:0,
    pineapple:0,
    extraCheese:0,
    sausage:0,
    bacon:1,
}

const will = {
    name:'Will',
    stat:0,
    slices:2,
    mushroom:0,
    onion:1,
    peppers:1,
    olives:1,
    pepperoni:0,
    ham:0,
    pineapple:0,
    extraCheese:1,
    sausage:1,
    bacon:1,
}

const jessica = {
    name:'Jessica',
    stat:0,
    slices:2,
    mushroom:0,
    onion:1,
    peppers:1,
    olives:0,
    pepperoni:1,
    ham:1,
    pineapple:1,
    extraCheese:0,
    sausage:0,
    bacon:1,
}


//utils

function debug(message){
    console.log(message);
}

function display(message){
    console.log(message);
    alert(message);
}

function test(){
    console.log('slices, toppings')
    console.log(
        slices,
        mushroom,
        onion,
        peppers,
        olives,
        pepperoni,
        ham,
        pineapple,
        extraCheese,
        sausage,
        bacon)

    console.log('guest list')
    console.log(guestList)
}



// Old code
// function addGuest(name,pos){
//     if(name.stat==0){
//         name.stat=1;
//         slices =+ name.slices;
//         mushroom =+ name.mushroom;
//         onion =+ name.onion;
//         peppers =+ name.peppers;
//         olives =+ name.olives;
//         pepperoni =+ name.pepperoni;
//         ham =+ name.ham;
//         pineapple =+ name.pineapple;
//         extraCheese =+ name.extraCheese;
//         sausage =+ name.sausage;
//         bacon =+ name.bacon;
//         guestList.guest1 = name;
//         document.getElementById('pos'+pos).innerHTML = "Remove guest"
//         debug("added "+ pos +" to list");
//     } else {
//         name.stat=0;
//         slices = slices - name.slices;
//         mushroom = mushroom - name.mushroom;
//         onion = onion - name.onion;
//         peppers = peppers - name.peppers;
//         olives = olives - name.olives;
//         pepperoni = pepperoni - name.pepperoni;
//         ham = ham - name.ham;
//         pineapple = pineapple - name.pineapple;
//         extraCheese = extraCheese - name.extraCheese;
//         sausage = sausage - name.sausage;
//         bacon = bacon - name.bacon;
//         guestList.guest1 = "";
//         document.getElementById('pos'+pos).innerHTML = "Add guest"
//         debug("removed "+ pos +" from list");
//     }
       
// }

// function addGuest(name,pos){
//     if(name.stat==0){
//         name.stat=1;
//         guestList.push(pos)
//         document.getElementById('pos'+ pos).outerHTML = "<p>on list</p>"
//         debug("added "+ pos +" to list");
//     } else {
//         name.stat=0;
//         document.getElementById('pos'+ pos).outerHTML = "<p>off list</p>"
//         debug("removed "+ pos +" from list");
//     }
       