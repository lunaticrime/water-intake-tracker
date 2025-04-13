let countEl = document.getElementById("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let saveBtn = document.getElementById("save");
let resetBtn = document.getElementById("reset");

let messageEl = document.getElementById("message");
let count = 0


function increment(){
    // countEl.innerText = parseInt(count.innerText) + 1;
    count += 1;
    countEl.innerText = count;
}
function decrement(){
    // countEl.innerText = parseInt(count.innerText) - 1;
    count -= 1;
    countEl.innerText = count;
}
function save(){
    if(count === 0){
        messageEl.innerText = "Please drink some water! 💧";
        return;
    }else if(count < 0){
        messageEl.innerText = "You can't drink negative water! 😂";
        return;
    }else{
        messageEl.innerText = `Great job staying hydrated! 💦 \n You drank ${count} glass(es) of water today.\nKeep it up and your body will thank you!`
    }
}
function reset(){
    count = 0;
    countEl.innerText = count;
    messageEl.innerText = "";
}
incrementBtn.addEventListener("click",increment);
decrementBtn.addEventListener("click",decrement);
saveBtn.addEventListener("click",save);
resetBtn.addEventListener("click",reset);
