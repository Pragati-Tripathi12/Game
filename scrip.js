choice=['snake','water','gun']
const pdisp=document.getElementById("Pchoice");
const cdisp=document.getElementById("Cchoice");
const rdisp=document.getElementById("res");
const pscore=document.getElementById("pscore")
const cscore=document.getElementById("cscore")
let playerscore=0;
let compscore=0;
function game(pchoices){
    const cchoices=choice[Math.floor(Math.random()*3)];
    let result="";
    if(pchoices===cchoices){
        result="IT'S A TIE!"
    }
    else{ 
        switch(pchoices){
            case "snake":
                result=(cchoices==='water')?"YOU WON!":"YOU LOSE!";
                break;
            case "water":
                result=(cchoices==='gun')?"YOU WON!":"YOU LOSE!";
                break;
            case "gun":
                result=(cchoices==='snake')?"YOU WON!":"YOU LOSE!";
                break;
        }
     
    }
    pdisp.textContent=`PLAYER: ${pchoices}`;
    cdisp.textContent=`COMPUTER: ${cchoices}`;
    rdisp.textContent=result;

    if (result==="YOU WON!"){
        playerscore++;
        pscore.textContent=`YOUR SCORE: ${playerscore}`;

    }
    else if (result==="YOU LOSE!"){
        compscore++;
        cscore.textContent=`COMPUTER SCORE: ${compscore}`;

    }
}