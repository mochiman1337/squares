let squarearea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30;//30-50
document.querySelector("#add").onclick = addSquare;

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor=getRandomColor();
    square.style.top = parseInt(Math.random()*(300-50))+"px";
    square.style.left = parseInt(Math.random()*(700-50))+"px";
    square.onclick=//some function for z-index
    squarearea.append(square);
}

//Make a function that will change the z-index value to bring it to the top of other squares

//Make a function to randomize the size of the squares you can use 45-55px or pick own

for (let i = 0; i < squareCount; i++) {
    addSquare();
}

function getRandomColor(){
    let possibleLetters = "0123456789ABCDEF";
    let color="#";
    //Do something to make a random value?
    for(let i = 0;i <6; i++){
        let position = parseInt(Math.random()*
        possibleLetters.length)
        color+=possibleLetters.charAt(position);
    }
    return color;
}