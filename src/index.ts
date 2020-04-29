
class Roulette{
    private start:HTMLElement;
    private colors:NodeList;
    private level:number;
    private container:HTMLElement;
    private colorSequence:Node[];
    private levelUp:number;
    constructor(colors:NodeList){
        this.start =  document.querySelector(".start");
        this.colors = colors;
        this.level = 1;
        this.container = document.querySelector(".container");
        this.startGame();
    
    }
   private startGame(){
        this.start.style.display = "none";
        this.colorSequence = [];
        this.levelUp = 0;
        this.sequence();
    }

    private async sequence(){
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
    private turnOn(color:number,i:number){
        return new Promise((resolve,reject)=>{
            this.colors[color].classList.remove("off");
            this.colorSequence.push(this.colors[color]);
            setTimeout(()=>{this.colors[color].classList.add("off");},500);
            setTimeout(()=>{resolve()},1000);
        });
        
    }
    private getRandomInt(min:number, max:number):number{
        return Math.floor(Math.random() * (max - min)) + min;
      }

    private listener(){
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

    private next_level(){
        this.container.removeEventListener('click',this.container.fn);
        this.level++;
        console.log("LOCAL LEVEL IS: ",this.level);
        console.log("SUCESS");
        (this.level === 11)? this.end():this.startGame();
    }
    private end(){
        console.log("You Win");
    }

}

function startGame(){
    const container:NodeList = document.querySelector(".container").querySelectorAll(".box");
    const myRoulette = new Roulette(container);
}

