
let button = document.getElementById("letsPlay");
let totalScore;
let lastRoll;
let activePlayer;
let score;
let button2 = document.getElementById("letsPlayAgain");
let button3 = document.getElementById("keepScore");

function init() {
  score = [0,0];
  totalScore = 0;
  activePlayer = 0;
  gameStarted = true;
  document.getElementById("score-0").textContent = '0';
  document.getElementById("score-1").textContent = '0';
  document.getElementById("playerScore-0").textContent = '0';
  document.getElementById("playerScore-1").textContent = '0';
  document.getElementById("playerName-0").textContent = 'Player 1';
  document.getElementById("playerName-1").textContent = 'Player 2';
  document.querySelector(".background-0").classList.remove('active');
  document.querySelector(".background-1").classList.remove('active');
  document.querySelector(".background-0").classList.add('active');
}

function nextPlayer(){
  if(activePlayer===0){
    activePlayer = 1;
    //panel0[0].classList.toggle('active');
  } else{
      activePlayer = 0; 
      //panel1[0].classList.toggle('active');    
    } 
    totalScore = 0;
    document.querySelector(".background-0").classList.remove('active');
		document.querySelector(".background-1").classList.remove('active');
		document.querySelector(".background-" + activePlayer).classList.add('active');
} 

     
 
button2.addEventListener('click', function () {
  init();
  document.getElementById("gameRule").style.display ="none";
  document.getElementById("letsPlay").style.display =""; 
  document.getElementById("keepScore").style.display ="none";
  document.getElementById("letsPlayAgain").style.display ="none"; 
  document.getElementById("hidelost-0").style.display ="none"; 
  document.getElementById("hidelost-1").style.display ="none"; 
  document.getElementById("hidewinner-0").style.display ="none";
  document.getElementById("hidewinner-1").style.display ="none";
  document.getElementById("rolldice").style.display = "none"; 
  document.getElementById("dice").style.display="none"; 
});

 button.addEventListener('click', function () {
    document.getElementById("letsPlayAgain").style.display ="";
    document.getElementById("keepScore").style.display ="";
    document.getElementById("faceD1").style.display="none";
    document.getElementById("faceD5").style.display="none";
    document.getElementById("faceD3").style.display="none";
    document.getElementById("faceD6").style.display="none";
    document.getElementById("faceD2").style.display="none";
    document.getElementById("faceD4").style.display="none";
    document.getElementById("dice").style.display="none";
    document.getElementById("rolldice").style.display = "";  
    document.getElementById("score-0").style.display ="";
    document.getElementById("score-1").style.display ="";
    document.getElementById("playerScore-0").style.display ="";
    document.getElementById("playerScore-1").style.display ="";
    document.getElementById("hidelost-0").style.display ="none";
    document.getElementById("hidelost-1").style.display ="none";
    document.getElementById("hidewinner-0").style.display ="none";
    document.getElementById("hidewinner-1").style.display ="none";
     
      //panel1[0].classList.toggle('active');
      //panel0[0].classList.toggle('active');
  let roll = Math.floor (Math.random() *6)+1; 


setTimeout(function($roll){
    document.getElementById("rolldice").style.display="none";
    document.getElementById("dice").style.display="";
    switch(roll)   
    { case 1:
        faceD1.style.display="";  
      break;   
      case 2:
        faceD2.style.display=""; 
        break; 
      case 3:
        faceD3.style.display=""; 
        break; 
      case 4:
        faceD4.style.display=""; 
        break; 
      case 5:
        faceD5.style.display=""; 
        break; 
      case 6:
        faceD6.style.display=""; 
        break; 
    }



if (roll !== 1) {
  // get the round score from dice rolls
  totalScore += roll;
  // update the current players score with round score, based on active player
  document.getElementById('score-'+ activePlayer).textContent = totalScore;
  // check if last dice roll is equal to current dice roll
} else {
  
  document.getElementById('score-'+ activePlayer).textContent = 0; 
  document.getElementById("hidelost-"+ activePlayer).style.display ="";
  nextPlayer();


}
},3000);
});

button3.addEventListener('click', function () {
  if (gameStarted){
    score[activePlayer] += totalScore;
    document.getElementById('playerScore-'+ activePlayer).textContent = score[activePlayer];
    document.getElementById('score-'+ activePlayer).textContent = 0; 
    
  if (score[activePlayer] >= 50){

  document.getElementById("letsPlay").style.display ="none";
  document.getElementById("hidewinner-"+ activePlayer).style.display ="";
  document.getElementById("letsPlayAgain").style.display ="";
  document.getElementById("keepScore").style.display = "none";
  } else {
    
    nextPlayer(); 
  }
}
});
