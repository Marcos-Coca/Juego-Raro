class Roulette{
    constructor(green,red,blue,yellow){
        this.red = red
        this.blue = blue
        this.green = green
        this.yellow = yellow
    }

    start(){
        console.log(this.red)
        alert("INICIÓ");
    }
}

function startGame(){
    const container = document.querySelector(".container").querySelectorAll(".box");
    console.log(container);
    const myRoulette = new Roulette(...container);
    myRoulette.start();

}

const getRandomInt = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min;
  }


