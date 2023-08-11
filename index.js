const diceFaceElem = document.getElementById("dice");
const diceRollBtnElem = document.getElementById("roll-btn");
const diceRollHistoryElem = document.getElementById("roll-history");

let diceRollHistoryList = [];

function rollDice(){
    const rollResult = Math.floor(Math.random() * 6 ) + 1;
    const diceFace = getDiceFace(rollResult);

    diceFaceElem.innerHTML = diceFace;
    diceRollHistoryList.push(rollResult);
    updateRollHistory();

}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

function updateRollHistory(){
    diceRollHistoryElem.innerHTML = "";
    for(let i = 0 ; i < diceRollHistoryList.length ; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1} : <span> ${ getDiceFace( diceRollHistoryList[i] )}</span>`;
        diceRollHistoryElem.appendChild(listItem);
    }
}





diceRollBtnElem.addEventListener("click" , () => {
   
    diceFaceElem.classList.add("roll-animation");
    setTimeout(() => {
        diceFaceElem.classList.remove("roll-animation");
        rollDice();  
    }, 1000);
});