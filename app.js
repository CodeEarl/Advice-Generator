const number = document.getElementById("num");
const text = document.getElementById("text");
const dice = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const result = await fetch(url);
    const {slip: {id, advice}} = await result.json();
    number.innerText = id;
    text.innerText = advice;
}
getAdvice()

dice.addEventListener('click', getAdvice);

const header = document.querySelector(".header");
var rot = 360;
dice.addEventListener('click', function(){
  dice.style = 'transform: rotate(' + rot + 'deg)';
  rot += 360;
  dice.classList.toggle('active');
  header.classList.toggle('on'); 
}) 