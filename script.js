'use strict'

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent=' 🎉Correct Number!' ;

// document.querySelector('.number').textContent=13;

// document.querySelector('.score').textContent=10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value= 5;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;

//for testing purpose
// console.log(secretNumber);

let score =20;
let highscore = 0;

document.querySelector('.check').addEventListener
('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  
  //when no iput
  if(!guess){
    document.querySelector('.message').textContent = " 😒No Number!";

  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    
    document.querySelector('.number').textContent = secretNumber;


    document.querySelector('body').style.backgroundColor = '#087529';

    document.querySelector('.number').style.width ="20rem ";
    
   
  }else if( guess > secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent= '📈 Too High';
    score= score--;
    document.querySelector('.score').textContent= score;
    }else{
      document.querySelector('.message').textContent= 'You Lose';
    }
  }else if(guess<secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent= '📉Too Low';
    score--;
    document.querySelector('.score').textContent=score;
    }else{
    document.querySelector('.message').textContent= 'You Lose';
    }  

  }
  
  
});

document.querySelector('.again').addEventListener('click', function() {
  // document.location.reload();
  //HIGHSCORE FUNCTIONALITY
  if(score>highscore){
   highscore=score;
  document.querySelector('.highscore').textContent= score;
  }
  document.querySelector('body').style.backgroundColor='#222';
  score =20;
  document.querySelector('.score').textContent=20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent='?';
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.guess').value='';

});








// let temp = Math.random();
// // console.log(temp);
// const secretNumber = Math.trunc((temp*20)+1);
// // document.getElementById("question1").innerHTML=secretNumber ;
// console.log(secretNumber);

// const xyz=window.document.getElementById("inputNumber");
// console.log(xyz.innerText);

// function myFunction() {  
//   let text = document.getElementById("inputNumber").value;
//   console.log(text);
//     if(text==secretNumber) {

//       document.getElementById("question1").innerHTML=secretNumber;
//     }
//     else
//     {

//       document.getElementById("question1").innerHTML = "?";
//     } 
// }



