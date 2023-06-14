let temp = Math.random();
// console.log(temp);
const secretNumber = Math.trunc((temp*20)+1);
// document.getElementById("question1").innerHTML=secretNumber ;
console.log(secretNumber);

const xyz=window.document.getElementById("inputNumber");
console.log(xyz.innerText);

function myFunction() {  
  let text = document.getElementById("inputNumber").value;
  console.log(text);
    if(text==secretNumber) {

      document.getElementById("question1").innerHTML=secretNumber;
    }
    else
    {

      document.getElementById("question1").innerHTML = "?";
    } 

}



