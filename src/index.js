function startGame(){
    const colors = document.querySelector(".container").querySelectorAll(".box");
    document.querySelector(".start").style.display = "none";
    sequence(colors,1);
    /*for(let i = 1; i <= 10; i++){
    sequence(colors,i);
    }*/
}

const getRandomInt = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const sequence = (colors,i) =>{
    for(let j = 0; j < i; j++){
        TurnOn(colors[getRandomInt(0,colors.length)]);
    }
}

const TurnOn = color=>{
   color.classList.remove("off");
}

