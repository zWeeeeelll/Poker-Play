const buttonPlayer1 = document.querySelector("#play-1");
const buttonPlayer2 = document.querySelector("#play-2");

const cardsPlayer1 = document.querySelector("#cards-player1");
const cardsPlayer2 = document.querySelector("#cards-player2");
const results = document.querySelector("#results");
const playAgain = document.querySelector("#play-again");

let cards = [];
let resultPlayer1 = 0;
let resultPlayer2 = 0;
let val = 0;

playAgain.addEventListener("click", function(){
  location.reload();
});


buttonPlayer1.addEventListener("click", function(){

  playGame();
  cardsPlayer1.innerHTML = cards.join('');
  cards = [];
  resultPlayer1 = val;
  console.log(resultPlayer1);
  val = 0;


  buttonPlayer1.setAttribute("disabled", true)
  buttonPlayer1.classList.add("opacity")
  buttonPlayer2.removeAttribute("disabled", false)
  buttonPlayer2.classList.remove("opacity");
});

buttonPlayer2.addEventListener("click", function(){

  playGame();
  cardsPlayer2.innerHTML = cards.join('');
  resultGame();
  cards = [];
  resultPlayer2 = val;
  console.log(resultPlayer2);
  val = 0;

  if(resultPlayer2 > resultPlayer1){
    results.innerHTML = 'Player 2 Wins ! Carta mais alta'
  } else {
    'Player 1 Wins ! Carta mais alta';
  }

  buttonPlayer2.setAttribute("disabled", true)
  buttonPlayer2.classList.add("opacity")

});


function playGame() {
  
  
  for(let i = 0; i < 5; i++){
    let num = 2 + Math.floor(Math.random() * 13)
    let naipes = ['D ', 'H ', 'S ', 'C '];
    val += num;

    if(num === 10) {
      num = 'T'
    } else if(num === 11) {
      num = 'J';
    } else if(num === 12){
      num = 'Q';
    } else if(num === 13) {
      num = 'K';
    } else if(num === 14) {
      num = 'A';
    }

    cards.push(num);
    cards.push(naipes[Math.round(Math.random() * 3)]);
  }
  

    
    console.log(cards.join(''));
    return cards;
}

let deck = [];
let deckLevelCard = 0;
let naipe = [];
let naipeLevelCard = 0;
let score = 0;

function resultGame() {
  cards.map(function (valor, indice, array){
    if (indice % 2 === 0){
      deck.push(valor);
    } else {
      naipe.push(valor.trim())
    }
  })
}

//Finish
function isRoyalFlush(){
  let royalFlush;


    if(deck.toString() === 'TJQKA'){
      royalFlush++
    };

    for (let j = naipe.length; j > 0; j--) {
      if(naipe[j] === naipe[j-1]){
        royalFlush++
    }
  }

  if(royalFlush === 6){
    score += 60;
  }
}

//Finish
function isFlush(){
  let flush;

  for (let i = 0; i < naipe.length; i++) {
    if(naipe[i] === naipe[i+1]){
      flush++
    }
  }

  if(flush === 5){
    return score += 40;
  }
  return;
}

//Finish
function isQuadra(){
  let quadra;
    
  for (let i = 0; i < deck.length; i++) {
    if(deck[i] === deck[i+1]){
      quadra++
    };
  }

  if(quadra === 4){
    return score += 50;
  }
  
  return

}

//Finish
function isStraight() {
  let straight;

  for (let i = 0; i < deck.length; i++) {
    if(deck[i] === deck[i+1]){
      straight++
    };
  }

  if(straight === 5){
    return score += 35;
  }

  return;
}

//Finish
function isStraightFlush() {
  let straightDeck;
  let straightNaipe;

  for (let i = 0; i < deck.length; i++) {
    if(deck[i] === deck[i+1]){
      straightDeck++
    };
    for (let j = naipe.length; j > 0; j--) {
      if(naipe[j] === naipe[j-1]){
        straightNaipe++
    }
  }
  }

  if(straightDeck === 5 && straightNaipe === 5){
    return score += 55;
  }
  return;
}