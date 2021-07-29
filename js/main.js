

let sectionOne = document.querySelector('.player--0')
let sectionTwo = document.querySelector('.player--1')

let playerTwoScore = document.querySelector("#score--1")
let playerOneScore = document.querySelector("#score--0")

let rollButton = document.querySelector(".btn--roll")
let holdButton = document.querySelector(".btn--hold")
let holdNew = document.querySelector(".btn--new")
let dicImg = document.querySelector(".dice");



let scoreOneCurrent = document.querySelector("#current--0")
let scoreTwoCurrent = document.querySelector("#current--1")
let scoreOneHold = 0;
let scoreTwoHold = 0;

let scoreOneProgress = 0;
let scoreTwoProgress = 0;

let firstPlay = true;


rollButton.addEventListener("click",function(){


    dicImg.style.opacity = "1";
    let randomDice = Math.floor(Math.random() * 6 + 1)   
    dicImg.setAttribute("src","img/dice-"+randomDice+".png");
    dicImg.classList.add("shake")
    
    setTimeout(function(){


        dicImg.classList.remove("shake")
    },1000)
    

    if(firstPlay){

        if(randomDice == 1){
            scoreOneProgress = 0;
            playerOneScore.textContent = 0;
            firstPlay = false;

            sectionOne.classList.remove("player--active") 
            sectionTwo.classList.add("player--active") 

    
        }else {
            
            scoreOneProgress = scoreOneProgress + randomDice  
            playerOneScore.textContent = scoreOneProgress;

        }
     
    }else {
        if(randomDice == 1){
            scoreTwoProgress = 0;
            playerTwoScore.textContent = 0;
            firstPlay = true;

            sectionOne.classList.add("player--active") 
            sectionTwo.classList.remove("player--active") 
            
        }else {
          
            scoreTwoProgress = scoreTwoProgress + randomDice  
            playerTwoScore.textContent = scoreTwoProgress;

        }

    }



})


holdButton.addEventListener("click",function(){

    if(firstPlay){
       
        playerOneScore.textContent = 0;

        scoreOneHold = scoreOneHold + scoreOneProgress;
        scoreOneCurrent.textContent = scoreOneHold
        firstPlay = false;
        sectionOne.classList.remove("player--active") 
        sectionTwo.classList.add("player--active") 
        dicImg.style.opacity = "0"
    }else {
        
        playerTwoScore.textContent = 0;
        scoreTwoHold = scoreTwoHold + scoreTwoProgress;
        scoreTwoCurrent.textContent = scoreTwoHold
        firstPlay = true;
        sectionOne.classList.add("player--active") 
        sectionTwo.classList.remove("player--active") 
        dicImg.style.opacity = "0"

    }

})


holdNew.addEventListener("click",function(){
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;

    scoreOneCurrent.textContent = 0;
    scoreTwoCurrent.textContent = 0;
    scoreOneHold = 0;
    scoreTwoHold = 0;
    
    scoreOneProgress = 0;
    scoreTwoProgress = 0;
    firstPlay = true;
    sectionOne.classList.add("player--active") 
    sectionTwo.classList.remove("player--active") 
    dicImg.style.opacity = "0"


})