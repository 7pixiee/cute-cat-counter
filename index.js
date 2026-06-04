let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
     if(count===0)return;

    let savedTreats = count + " | ";
    saveEl.textContent += savedTreats;
    countEl.textContent = 0;
    count = 0;
}