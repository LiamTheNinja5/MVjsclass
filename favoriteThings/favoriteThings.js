//call the objects to output a name
function liam(){
    person.liam();
}

function henry(){
    person.henry();
}

function cole(){
    person.cole();
}

function miles(){
    person.miles();
}

function mal(){
    person.mal();
}


const person = {
    liam: function() {
        document.getElementById('name').innerHTML = liamFav.name;
        document.getElementById('food').innerHTML = liamFav.favFood;
        document.getElementById('drink').innerHTML = liamFav.favDrink;
        document.getElementById('game').innerHTML = liamFav.favGame;
        document.getElementById('color').innerHTML = liamFav.favColor;
        document.getElementById('sport').innerHTML = liamFav.favSport;
    },

    henry: function() {
        document.getElementById('name').innerHTML = henryFav.name;
        document.getElementById('food').innerHTML = henryFav.favFood;
        document.getElementById('drink').innerHTML = henryFav.favDrink;
        document.getElementById('game').innerHTML = henryFav.favGame;
        document.getElementById('color').innerHTML = henryFav.favColor;
        document.getElementById('sport').innerHTML = henryFav.favSport;
    },

    cole: function() {
        document.getElementById('name').innerHTML = coleFav.name;
        document.getElementById('food').innerHTML = coleFav.favFood;
        document.getElementById('drink').innerHTML = coleFav.favDrink;
        document.getElementById('game').innerHTML = coleFav.favGame;
        document.getElementById('color').innerHTML = coleFav.favColor;
        document.getElementById('sport').innerHTML = coleFav.favSport;
    },

    miles: function() {
        document.getElementById('name').innerHTML = milesFav.name;
        document.getElementById('food').innerHTML = milesFav.favFood;
        document.getElementById('drink').innerHTML = milesFav.favDrink;
        document.getElementById('game').innerHTML = milesFav.favGame;
        document.getElementById('color').innerHTML = milesFav.favColor;
        document.getElementById('sport').innerHTML = milesFav.favSport;
    },

    mal: function() {
        document.getElementById('name').innerHTML = malFav.name;
        document.getElementById('food').innerHTML = malFav.favFood;
        document.getElementById('drink').innerHTML = malFav.favDrink;
        document.getElementById('game').innerHTML = malFav.favGame;
        document.getElementById('color').innerHTML = malFav.favColor;
        document.getElementById('sport').innerHTML = malFav.favSport;
    },
};

// names and favs
const liamFav = {
    name: "Liam",
    favFood: "pizza",
    favDrink: "gatorade",
    favGame: "Holdfast",
    favColor: "red",
    favSport: "Swimming"
    
};

const henryFav = {
    name: "Henry",
    favFood: "pizza",
    favDrink: "milk",
    favGame: "Apex Legends",
    favColor: "yellow",
    favSport: "diving"
    
};


const coleFav = {
    name: "Cole",
    favFood: "gold fish",
    favDrink: "water",
    favGame: "running around the house",
    favColor: "green",
    favSport: "running"
    
};

const milesFav = {
    name: "Miles",
    favFood: "mac and cheese",
    favDrink: "water",
    favGame: "race to the tresure",
    favColor: "orange",
    favSport: "Swimming"
    
};

const malFav = {
    name: "Mal",
    favFood: "pizza",
    favDrink: "water",
    favGame: "Minecraft",
    favColor: "yellow",
    favSport: "Bowling"
    
};


//utils

function debug(message){
    console.log(message);
}

function display(message){
    console.log(message);
    alert(message);
}
