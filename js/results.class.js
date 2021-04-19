export default class Round {
  constructor(naipe, deck){
    this.naipe = naipe;
    this.deck = deck;
  }

  //Finish
  isHightCard(){

  for (let i = 0; i < this.deck.length; i++) {
    if(this.deck[i] > this.deck[i+1]){
      val = this.deck[i];
      }
    }
    return val;
  }

  //Finish
  isPar(){
    let par = 0;

    for (let i = 0; i < this.deck.length; i++) {
      //Adicionar mais um for
      if(this.deck[i] === this.deck[i+1]){
        par++
      }
    }

    if(par >= 1){
      return true;
    } else { 
      return false;
    }

  }

  //Finish
  // isFullHouse() {
  //   if(isTrinca() && isPar()){
  //     return true;
  //   }
  // }

  // isTwoPar(){
  //   let par;

  //   for (let i = 0; i < this.deck.length; i++) {
  //     if(this.deck[i] === this.deck[i+1]){
  //       par++
  //     }
  //     for(let j = this.deck.length; j > 0; j--){
  //       if(this.deck[j] === this.deck[j-1]){
  //         par++
  //       }
  //     }
  //   }

  //   if(par === 4){
  //     return true;
  //   }
  // }

  //Finish
  isTrinca(){
  
    let trinca;

    for (let i = 0; i < this.deck.length; i++) {
      if(this.deck[i] === this.deck[i+1]){
        trinca++
      }
    }
    if(trinca >= 2){
      return true;
    } else {
      return false;
    }
  }

  //Finish
  isRoyalFlush(){
    let royalFlush;


      if(deck.toString() === '1011121314'){
        royalFlush++
      };

      for (let j = this.naipe.length; j > 0; j--) {
        if(this.naipe[j] === this.naipe[j-1]){
          royalFlush++
      }
    }

    if(royalFlush === 6){
      return true;
    }
  }

  //Finish
  isFlush(){
    let flush;

    for (let i = 0; i < this.naipe.length; i++) {
      if(this.naipe[i] === this.naipe[i+1]){
        flush++
      }
    }

    if(flush === 5){
      return true;
    }
  }

  //Finish
  isQuadra(){
    let quadra;
      
    for (let i = 0; i < this.deck.length; i++) {
      if(this.deck[i] === this.deck[i+1]){
        quadra++
      };
    }

    if(quadra === 4){
      return true;
    } 
  }

  //Finish
  isStraight() {
    let straight;

    for (let i = 0; i < this.deck.length; i++) {
      if(this.deck[i] === this.deck[i+1]){
        straight++
      };
    }

    if(straight === 5){
      return true;
    }

  }

  //Finish
  isStraightFlush() {
    let straightDeck;
    let straightNaipe;

    for (let i = 0; i < this.deck.length; i++) {
      if(this.deck[i] === this.deck[i+1]){
        straightDeck++
      };
      for (let j = this.naipe.length; j > 0; j--) {
        if(this.naipe[j] === this.naipe[j-1]){
          straightNaipe++
      }
    }
    }

      if(straightDeck === 5 && straightNaipe === 5){
        return true;
      }
    }

    result(){
      console.log(this.deck);
      console.log(this.naipe);
      // console.log("isHitghtCard", this.isHightCard());
      console.log("isPar",this.isPar())
      console.log("isQuadra",this.isQuadra())
      console.log("isStraight",this.isStraight())
      console.log("isTrinca",this.isTrinca())
      console.log("isStraightFlush",this.isStraightFlush())
      //console.log("isRoyalFlush",this.isRoyalFlush())
      // if(this.isPar()) return 20;
      // //if(this.isTwoPar()) return 25;
      // if(this.isTrinca()) return 30;
      // if(this.isStraight()) return 35;
      // if(this.isFlush()) return 40;
      // //if(this.isFullHouse()) return 45;
      // if(this.isQuadra()) return 50;
      // if(this.isStraightFlush()) return 55;
      // if(this.isRoyalFlush()) return 60;
      
    }
  }