class Roulette{
    private start:HTMLElement;
    private container:HTMLElement;
    private finalSentence:HTMLElement;
    private popUpContainer:HTMLElement;
    private colors:NodeList;
    private colorSequence:Node[];
    private level:number;
    private levelUp:number;
    constructor(colors:NodeList){
        this.level = 1;
        this.colors = colors;
        this.start =  document.querySelector(".start");
        this.container = document.querySelector(".container");
        this.popUpContainer = document.querySelector('.popup_container');
        this.finalSentence = document.createElement('p');
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
            await this.turnOn(this.getRandomInt(0,this.colors.length));
         }
     this.listener();
    }
    private turnOn(color:number){
        return new Promise((resolve)=>{
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
              if(this.colorSequence[this.levelUp] !== e.target){
                    return this.fail();
              }
                this.levelUp++;
                if(this.levelUp === this.level){return this.next_level();}
           
        });

}
    private next_level(){
        this.container.removeEventListener('click',this.container.fn);
        this.level++;
        (this.level === 11)? this.win():this.startGame();
    }

    private fail(){
        this.finalSentence.innerHTML = 'You Lose';
        const loseSimbol = document.createElement('span');
        loseSimbol.innerHTML = `  <span class="simbol"><span class="lose">&times;</span></span>`
        this.end(loseSimbol);
    }

    private win(){
        this.finalSentence.innerHTML = 'You Win';
        const winSimbol = document.createElement('span');
        winSimbol.innerHTML = `<span class="win">&#10003;</span>`
        this.end(winSimbol);
    }

    
    private end(simbol:HTMLElement){
        this.container.removeEventListener('click',this.container.fn);
        const popUpText = document.getElementById('popUpText');
        popUpText.appendChild(simbol);
        popUpText.appendChild(this.finalSentence);
        this.popUpContainer.style.display = 'inline-block';

        this.popUpContainer.addEventListener('click',()=> {
            this.popUpContainer.style.display = 'none';
            this.start.style.display = 'initial';
            while (popUpText.firstChild) {
                popUpText.removeChild(popUpText.firstChild);
            }
        });
    }

}

function startGame(){
    const container:NodeList = document.querySelector(".container").querySelectorAll(".box");
    const myRoulette = new Roulette(container);
}

