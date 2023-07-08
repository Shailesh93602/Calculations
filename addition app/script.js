const num1 = Math.ceil(Math.random()*100)
const num2 = Math.ceil(Math.random()*100)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

const resetBtn = document.getElementById("resetbtn");

let addscore = JSON.parse(localStorage.getItem("addscore"));
// let addscore = document.getElementById("addscore");

if(!addscore){
    addscore = 0;
}
if(addscore<0){
    addscore = 0;
}

scoreEl.innerText = `score: ${addscore}`

questionEl.innerText = `What is ${num1}+${num2}?`

const correctAns = num1 + num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns) {
        addscore++;
        updateLocalstorage()
    }
    else{
        addscore--;
        updateLocalstorage()
    }
})
// Reset Button
formEl.addEventListener("reset", ()=>{
        addscore = 0;
        updateLocalstorage()
})

    
    
function updateLocalstorage(){
    localStorage.setItem("addscore", JSON.stringify(addscore))
}
    // function resetButton(){
    //     // document.getElementById("score").value = '';
    //     addscore = 0
    //     updateLocalstorage();
    //     console.log("Reseting")
    // }

// function clear(){
//     //document.getElementById("score").value = ''
//     addscore = 0;
//     updateLocalstorage();
// }
    
    // resetBtn.addEventListener('click', resetButton);
    
    // const zeroEl = document.getElementById("addition");
    
    // zeroEl.addEventListener("click", ()=>{
        //     addscore = 0;
        //     updateLocalstorage()
        // })
        
// // for clock
// const hourEl = document.getElementById("hour");
// const minuteEl = document.getElementById("minute");
// const secondEl = document.getElementById("second");

// function updateClock(){
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
// 95

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
