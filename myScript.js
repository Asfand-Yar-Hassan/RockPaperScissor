
function computerPlay(compChoice) {
    let choiceNum=Math.floor(Math.random()*3);
    if(choiceNum===0){
        compChoice="Rock"
    }
    else if(choiceNum===1){
        compChoice="Paper"
    }
    else if(choiceNum===2){
        compChoice="Scissors"
    }
    return compChoice;
}
console.log(computerPlay)