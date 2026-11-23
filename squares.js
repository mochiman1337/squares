let squarearea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30;//30-50
document.querySelector("#add").onclick = addSquare;//Add square button
document.querySelector("#change").onclick = changeColors;//Change color button

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor=getRandomColor();

    //Random sizes between 45 to 100px my choice!
    //100px makes more interesting variety of shapes
    let size = parseInt(Math.random()*56)+45;//Formula: Range = Max - Min +1
    square.style.width = size+"px";
    square.style.height = size+"px";

    //Also modified this for the random size feature
    square.style.top = parseInt(Math.random()*(300-size-4))+"px";// we are subtracting 4 and size because 2px border
    square.style.left = parseInt(Math.random()*(700-size-4))+"px";//total border is 4px to W x H

    square.onclick = squareClick;//Added for z-index change on square click
    squarearea.append(square);
}

//Change Color function
//Used squares instead since we are changing multiple squares colors at once. Also confusing naming
//If i use let = square, it also works. This is just for readability
function changeColors(){
    let squares = document.querySelectorAll(".square");
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}

//Make a function that will change the z-index value to bring it to the top of other squares
//Second click should delete it from window
function squareClick(){
    let squares = document.querySelectorAll(".square");
    let zvalue = 0;

    for(let i = 0; i < squares.length; i++){
        let z = parseInt(squares[i].style.zIndex);//If never click it starts as NaN, empty string
        if(z > zvalue){
            zvalue = z;
        }
    }

    //The && is important to the second click deletion.
    //If zvalue>0 and highest zvalue then it will remove() it!
    if(parseInt(this.style.zIndex) == zvalue && zvalue > 0){
        this.remove();//remove() is a built-in JS DOM method. Dont forget "this" to make work
    }
    else{
        this.style.zIndex = zvalue + 1;//this is the neeed part for second click value tracker
    }
}

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