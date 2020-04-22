class Roulette{
    constructor(colors,start){
        this.start = start;
        this.colors = colors;
        this.level = 5;
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
            this.listener();
        }catch(error){
            console.error(error);
        }
      
     }
    }
    turnOn(color,i){
        return new Promise((resolve,reject)=>{
            this.colors[color].classList.remove("off");
            setTimeout(()=>{this.colors[color].classList.add("off");},500);
            setTimeout(()=>{resolve()},1000);
            
        });
        
    }
    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
      }

    listener(){
        this.container.addEventListener('click',e =>{
        if(e.target != this.start){
           if(this.colorSequence[this.levelUp] === e.target){
                this.levelUp++;
                console.log(this.levelUp)
                if(this.levelUp === this.level){
                   return this.next_level();
                }
             }else{
                 this.fail();
             }
           
            }
        });
}

    fail(){
        this.container.removeEventListener('click',()=>{});
        this.levelUp = 0;
        this.level = 1;
        console.log("FAIL");
        if(confirm){
        this.startGame();
        }
    }

    next_level(){
        this.container.removeEventListener('click',()=>{});
        this.level+=1;
        console.log("LOCAL LEVEL IS: ",this.level);
        console.log("SUCESS");
        this.startGame();
    }

}

function startGame(){
    const container = document.querySelector(".container").querySelectorAll(".box");
    const start = document.querySelector(".start");
    const myRoulette = new Roulette(container,start);
    myRoulette.startGame();
}



