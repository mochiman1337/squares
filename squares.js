let squarearea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30;//30-50

for (let i = 0; i < squareCount; i++) {
    let square = document.createElement("div");
    square.className = "square";
    squarearea.append(square);
}