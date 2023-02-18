
let hand = [];
let handValue = 0;
let thisCard=[];
// Draw a new card
const drawcard = function () {
    let card = Math.floor(Math.random() * 52);
    let suit = undefined;
    let cardscore = undefined;


    if (card <= 13) {
        suit = "Hearts";
    } else if (card <= 26) {
        suit = "Spades";
    } else if (card <= 39) {
        suit = "Diamonds";
    } else {
        suit = "Clubs";
    }

    let cardv = card % 13 + 1;
    if (cardv == 1) {
        cardScore = 11;
    } else if (cardv > 10) {
        cardScore = 10;
    } else {
        cardScore = cardv;
    }
    let thisCard=[card, cardv, cardScore]
    return (thisCard)



}




// function sumCards(hand) {
//     handValue = handValue + thisCard[2];
//     return handValue;
// }

function sumCards(thisCard){
    handValue = handValue + thisCard[2];
     return handValue;

}



function test() {

    //draw card 1
    hand.push(drawcard());
    hand.forEach(sumCards);
    console.log(hand);
        console.log(handValue); 
    while (true) {
        hand.push(drawcard());
        hand.forEach(sumCards);

        console.log(hand);
        console.log(handValue); 
        if (handValue < 17) {
            alert(handValue + ": DEALER HITS");
            console.log(hand);
            console.log(handValue); console.log(hand);
            console.log(handValue);
                
            break;
        } else if (handValue < 22) {
            alert('TOTAL IS: '+handValue);
            console.log(hand);
            console.log(handValue);        
            break;
        } else {
            alert(handValue + ': DEALER BUSTS');
            console.log(hand);
            console.log(handValue);        
            break;
        }

    }
   
    handValue = 0;
    hand = [];

    // //draw card 2
    // hand.push(drawcard());
    // hand.forEach(sumCards);

    // console.log(hand);
    // console.log(handValue);
    // handValue=0;
    // hand=[];
    // //document.getElementById("demo").innerHTML = handValue;

}
