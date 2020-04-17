class Roulette{
    constructor(colors,start){
        this.start = start;
        this.colors = colors;
        this.level = 1;
        this.colorSequence = [];
    }

    sequence(){
       // this.start.style.display = "none";
        for(let i = 0; i < this.level; i++){
           setTimeout(()=>{
               this.turnOn(this.getRandomInt(0,this.colors.length),i)
            },1000*i); 
        }
        this.check();
    }
    turnOn(color,i){
        console.log(color)
        this.colors[color].classList.remove("off");
        setTimeout(()=>{this.colors[color].classList.add("off")},500);
        this.colorSequence[i] = color;
    }
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
      }

    check(){
        
    }
}

function startGame(){
    const container = document.querySelector(".container").querySelectorAll(".box");
    const start = document.querySelector(".start");
    const myRoulette = new Roulette(container,start);
    myRoulette.sequence();
}



