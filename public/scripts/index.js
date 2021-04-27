import Round from './results.class.js';

const buttonPlayer1 = document.querySelector("#play-1");
const buttonPlayer2 = document.querySelector("#play-2");

const cardsPlayer1 = document.querySelector("#cards-player1");
const cardsPlayer2 = document.querySelector("#cards-player2");
const results = document.querySelector("#results");
const playAgain = document.querySelector("#play-again");

let cards = [];
let resultPlayer1 = 0;
let resultPlayer2 = 0;
let score;
let deck = [];
let naipe = [];
let val = [];

let valDebug = [4, 4, 1, 2, 2];
let naipeDebug = ["D", "D", "D", "D", "D"];

playAgain.addEventListener("click", function(){
  location.reload();
});

  
 
  
  function resultGame() {

    cards.map(function (valor, indice, array){
      if (indice % 2 === 0){
        deck.push(valor);
      } else {
        naipe.push(valor.trim())
      }
    })
  }
  

buttonPlayer1.addEventListener("click", function(){

  playGame();
  cardsPlayer1.innerHTML = cards.join('');
  resultGame();
  console.log(valDebug);
  console.log(naipeDebug);

  score = new Round(naipeDebug, valDebug);
  //console.log(score);
  resultPlayer1 = score.result();
  console.log(resultPlayer1);


  cards = [];
  score = null;
  val = [];
  deck = [];
  naipe = [];
  


  buttonPlayer1.setAttribute("disabled", true)
  buttonPlayer1.classList.add("opacity")
  buttonPlayer2.removeAttribute("disabled", false)
  buttonPlayer2.classList.remove("opacity");
});

buttonPlayer2.addEventListener("click", function(){

  playGame();
  cardsPlayer2.innerHTML = cards.join('');
  resultGame();
  console.log(naipeDebug);
  console.log(valDebug);
  score = new Round(naipeDebug, valDebug); 
  //console.log(score);
  resultPlayer2 = score.result();
  console.log(resultPlayer2);


  cards = [];
  score = null;
  val = [];
  deck = [];
  naipe = [];
  


  if(resultPlayer1 > resultPlayer2){
    results.innerHTML = 'Player 1 Wins !'
  } else {
    results.innerHTML = 'Player 2 Wins !';
    return;
  }

  buttonPlayer2.setAttribute("disabled", true)
  buttonPlayer2.classList.add("opacity")

});



function playGame() {


  for(let i = 0; i < 5; i++){
   
    let num = 2 + Math.floor(Math.random() * 13);
    let naipes = ['D ', 'H ', 'S ', 'C '];
    val.push(num);

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
    return;
}