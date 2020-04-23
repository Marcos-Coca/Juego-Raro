class Roulette{
    constructor(colors,start){
        this.start = start;
        this.colors = colors;
        this.level = 1;
        this.container = document.querySelector(".container");
        
    }
    startGame(){
        this.start.style.display = "none";
        this.colorSequence = [];
        this.levelUp = 0;
        console.log("GLOBAL LEVELUP IS: ",this.levelUp);
        this.sequence();
    }

    async sequence(){
        for(let i = 0; i < this.level; i++){
        try{
            await this.turnOn(this.getRandomInt(0,this.colors.length),i);
            console.log(this.colorSequence[i]);
        }catch(error){
            console.error(error);
        }
     }
     this.listener();
    }
    turnOn(color,i){
        return new Promise((resolve,reject)=>{
            this.colors[color].classList.remove("off");
            this.colorSequence[i] = this.colors[color];
            setTimeout(()=>{this.colors[color].classList.add("off");},500);
            setTimeout(()=>{resolve()},1000);
        
        });
        
    }
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
      }

    listener(){
        this.container.addEventListener('click',this.container.fn = (e)=>{
            e.stopImmediatePropagation();
            console.log('Oye me pulsaste');
              if(this.colorSequence[this.levelUp] === e.target){
                 this.levelUp++;
                if(this.levelUp === this.level){
                   return this.next_level();
                }
             }else{
                 console.log('Fail')
                // return this.fail();
             }
           
        });

}

   /* fail(){
        this.container.removeEventListener('click',()=>{});
        this.levelUp = 0;
        this.level = 1;
        console.log("FAIL");
        if(confirm){
        this.startGame();
        }
    }*/

    next_level(){
        this.container.removeEventListener('click',this.container.fn);
        this.level++;
        console.log("LOCAL LEVEL IS: ",this.level);
        console.log("SUCESS");
        (this.level === 11)? this.end():this.startGame();
    }
    end(){
        console.log("You Win");
    }

}

function startGame(){
    const container = document.querySelector(".container").querySelectorAll(".box");
    const start = document.querySelector(".start");
    const myRoulette = new Roulette(container,start);
    myRoulette.startGame();
}


const sequence = (colors,i) =>{
    for(let j = 0; j < i; j++){
        TurnOn(colors[getRandomInt(0,colors.length)]);
    }
}

const TurnOn = color=>{
   color.classList.remove("off");
}

