class Roulette{
    constructor(colors,start){
        this.start = start;
        this.colors = colors;
        this.level = 4;
        
    }
    startGame(){
        this.start.style.display = "none";
        this.colorSequence = [];
        this.levelUp = 0;
        this.container = document.querySelector(".container");
        this.sequence();

    }

    sequence(){
        for(let i = 0; i < this.level; i++){
           setTimeout(()=>{
               this.turnOn(this.getRandomInt(0,this.colors.length),i)
            },1000*i); 
        }
        this.listener();
    }
    turnOn(color,i){
        console.log(color)
        this.colors[color].classList.remove("off");
        setTimeout(()=>{this.colors[color].classList.add("off")},500);
        this.colorSequence[i] = this.colors[color];
    }
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
      }

    listener(){
        this.container.addEventListener('click',e =>{
            if(e.target != this.start){
           if(this.colorSequence[this.levelUp] === e.target){
                this.levelUp++;

             }else{
                 alert("FAIL")   
             }
        }
        });
    
}

    fail(){
        alert("FAIL");
    }

}


function startGame(){
    const container = document.querySelector(".container").querySelectorAll(".box");
    const start = document.querySelector(".start");
    const myRoulette = new Roulette(container,start);
    myRoulette.startGame();
}



