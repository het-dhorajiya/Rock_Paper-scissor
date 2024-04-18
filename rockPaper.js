let computerSelect = ["Rock", "Paper", "Scissors"];
const rock = document.querySelector('.box1');
const paper = document.querySelector('.box2');
const scissor = document.querySelector('.box3');
const display = document.querySelector('.display');
const won= document.querySelector(".won");
const loss = document.querySelector(".loss");
const box4 = document.querySelector(".box4");
const reset = document.querySelector(".reset");
const com = document.querySelector('.com');
let i = 0;
let j = 0;
document.querySelector(".select").addEventListener('click', (e) => {
    const selected = e.target.innerText;
    console.log(selected);
    const cpselect = computerSelect[Math.floor(Math.random() * 3)];
    com.innerText = `computer = ${cpselect}`;

    if (selected == cpselect) {
        console.log("same");
        display.innerText = "Match Is Tie!!";
    }
    if ((selected =="Scissors" && cpselect == "Paper") || (selected == "Rock" && cpselect =="Scissors") || (selected =="Paper" && cpselect =="Rock")) {
        i++;    
        won.innerText=`won = ${i}`;
        display.innerText = "you win!!";
    }
    if ((selected == "Paper" && cpselect == "Scissors") || (selected == "Scissors" && cpselect =="Rock") || (selected =="Rock" && cpselect =="Paper")) {
        j++;
        loss.innerText = `lost = ${j}`;
        display.innerText = "computer win";
    }
 
})
reset.addEventListener('click',()=>{
    won.innerText=`won = 0`;
    loss.innerText = `lost = 0`;
    
})