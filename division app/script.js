let num1 = JSON.parse(Math.ceil(Math.random()*100))
const num2 = Math.ceil(Math.random()*(num1/2))

num1 = num1 - (num1%num2);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let divscore = JSON.parse(localStorage.getItem("divscore"));

if(!divscore){
    divscore = 0;
}

scoreEl.innerText = `score: ${divscore}`

questionEl.innerText = `What is ${num1}÷${num2}?`

const correctAns = num1 / num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns) {
        divscore++;
        updateLocalstorage()
    }
    else{
        divscore--;
        updateLocalstorage()
    }
})

function updateLocalstorage(){
    localStorage.setItem("divscore", JSON.stringify(divscore))
}

// const zeroEl = document.getElementById("divide");

// zeroEl.addEventListener("click", ()=>{
//     divscore = 0;
//     updateLocalstorage()
// })

if(divscore===50){
    alert("You are genious");
}

//for clock
// const hourEl = document.getElementById("hour");
// const minuteEl = document.getElementById("minute");
// const secondEl = document.getElementById("second");

// function updateClock(){
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;
//     hourEl.innerText = h;
//     minuteEl.innerText = m;
//     secondEl.innerText = s ;
//     setTimeout(()=>{
//         updateClock()
//     },1000);
// }
// updateClock();