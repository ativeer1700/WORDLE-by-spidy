let height = 6;
let width = 5;

let row=0;
let col=0;

var gameOver = false;
const words= ["FIZZY","STARE","SPIDY","ABOUT","AGAIN"];
let word = words[Math.floor(Math.random() * words.length)];

window.onload = function(){
    initialize();
}

function initialize(){
    for( let r=0; r<height ; r++){
        for(let c=0; c<width; c++){
            let box = document.createElement("span");
            box.id = r.toString() + "-" + c.toString();
            box.classList.add("box");
            box.innerText = " ";
            document.getElementById("board").appendChild(box);

        }
    }

    document.addEventListener("keyup",(e)=> {
        if(gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ"){
            if(col < width){
                let currbox = document.getElementById(row.toString() + '-' + col.toString());
                if (currbox.innerText == ""){
                    currbox.innerText = e.code[3]
                    col += 1;
                }
                
            }
        }
        else if (e.code == "Backspace"){
            if(0 < col && col <= width){
                col -=1 ;
            }
             let currbox = document.getElementById(row.toString() + '-' + col.toString());
             currbox.innerText = "";
        }
        else if (e.code == "Enter"){
            update();
            row+=1;
            col=0;
        }

        if(!gameOver && row == height){
            gameOver = true;
            document.getElementById("answer").innerText =word;
        }
    })
}

function update(){
    let  correct =0;
    for (let c=0; c<width; c++){
        let currbox = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currbox.innerText;

        if( word[c] == letter){
            currbox.classList.add("correct");
        }
        else if  (word.includes(letter)){
            currbox.classList.add("present");
        }
        else {
            currbox.classList.add("absent");
        }
        if (correct == width){
            gameOver = true;
        }
    }
}