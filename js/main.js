

var check = document.querySelector(".check")
var messageBox = document.querySelector(".message").textContent
let winNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;
let hightScore = 0;
let hightScore1 = 0;

check.addEventListener("click",function(){
  
    let guessNumber = Number(document.querySelector(".guess").value)
    
    function win(){

        document.querySelector(".number").innerText = winNumber;
        document.querySelector("body").style.background = "#60b347";
        document.querySelector(".message").innerText = "You Win";
        
        if(winNumber > hightScore){
            hightScore = winNumber
            document.querySelector(".highscore").innerText = winNumber
        }
    }
 

    function wasteTry(){
        score--;
        document.querySelector(".score").innerText = score

    }

    if(!guessNumber){
        document.querySelector(".message").innerText = "no Number!!!"
    }else {
        if(guessNumber === winNumber){

            win()
        }else {
    
            wasteTry()
          
            if(guessNumber > winNumber) {
                document.querySelector(".message").innerText = "Too High"
    
            }else {
                document.querySelector(".message").innerText = "Too Low"
    
            }
    
        }
    }
    
    
})



let again = document.querySelector(".again")

again.addEventListener("click",function(){

    document.querySelector(".number").innerText = "?";
    document.querySelector(".guess").value = " ";
    winNumber = Math.floor(Math.random() * 10 + 1)
    document.querySelector("body").style.background = "#222";
    document.querySelector(".message").innerText = "Start guessing.."

})

