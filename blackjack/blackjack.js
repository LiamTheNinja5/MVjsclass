//Declaring the variables hand and handValue with an empty array and 0 respectively 
let hand = []; 
let handValue = 0;
let card = 0;
let cardScore = 0;
//Function to initialize a game (e.g. draw two cards, calculate sum total, etc...) 
function test() { 
    hand = []; 
    handValue = 0; 

    //Drawing two cards
    hand.push(drawcard()); 
    hand.push(drawcard()); 

    //Reversing and sorting the 2 card values 
    hand.sort().reverse(); 
    console.log(hand+"!!!"); 

    //Calculating the sum value of the two cards drawn
    hand.forEach(sumCards); 
    console.log('first hand: '+handValue) 

    //Based on the total value, display appropriate alert messages
    if(handValue == 21){
        console.log(hand); 
        alert('DEALER HAS BLACKJACK!'); 
    } else if(handValue > 21){
        console.log(hand); 
        alert('DEALER BUSTED!'); 
    } else if(handValue >= 17){
        console.log(hand); 
        alert('DEALER SCORE IS: ' + handValue); 
    } else {
        let lastCard = drawcard(); 
        handValue = 0; 
        hand.push(lastCard) 
        hand.sort().reverse(); 
        console.log(hand+"@@@"); 
        hand.forEach(sumCards); 
        console.log(hand); 
        alert('DEALER HITS WITH A ' + lastCard + " || " + "DEALER TOTAL: " + handValue) 
    } 
    
    //reseting the variables for the next game 
    handValue = 0; 
    hand = []; 
} 

//Function for drawing card
function drawcard() { 
    let card = Math.floor(Math.random() * 13)+1; 
    let cardScore = undefined; 
    if (card == 1) {
        cardScore = 11;
    } else if (card >= 10) {
        cardScore = 10;
    } else {
        cardScore = card;
    }
    return (cardScore); 
}

//Function to calculate Sum Value of cards
function sumCards(thisCard){ 
    if(thisCard == 11){
        if((thisCard + handValue) > 21){
            thisCard = 1; 
        }
    }
    handValue += thisCard; 
    console.log('thisCard: '+thisCard) 
    console.log('handValue: '+handValue) 
     return handValue; 
} 
