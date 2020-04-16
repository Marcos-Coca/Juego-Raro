class Roulette{
    constructor(red,blue,green,yellow){
        this.red = red
        this.blue = blue
        this.green = green
        this.yellow = yellow
    }

    start(){
        alert("INICIÓ");
    }
}

function startGame(){
    const container = document.querySelector(".container");
    console.log(container);
    const myRoulette = new Roulette();

}

const getRandomInt = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min;
  }


