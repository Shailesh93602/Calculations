const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*num1)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let minscore = JSON.parse(localStorage.getItem("minscore"));

if(!minscore){
    minscore = 0;
}

scoreEl.innerText = `score: ${minscore}`

questionEl.innerText = `What is ${num1}-${num2}?`

const correctAns = num1 - num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns) {
        minscore++;
        updateLocalstorage()
    }
    else{
        minscore--;
        updateLocalstorage()
    }
})

function updateLocalstorage(){
    localStorage.setItem("minscore", JSON.stringify(minscore))
}


// const zeroEl = document.getElementById("substract");

// zeroEl.addEventListener("click", ()=>{
//     minscore = 0;
//     updateLocalstorage()
// })

// for clock
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