let numSquares = 6
let colors = []
let pickedColor
let headerBG = "steelblue"

let squares = document.querySelectorAll(".square")
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector("#message") //# is needed b/c it's an id'
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")

init()

function init(){
    setModeButtons()
    setSquares()
    reset()

    resetButton.addEventListener("click", function () {
        reset()
    })
}

function setModeButtons(){
    //mode buttons event listeners
    for(let i=0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            
            //if this.textContent === "Easy" numSquares = 3, else numSquares = 6
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            
            reset()
        })
    }
}

function setSquares(){
    for (let i = 0; i < squares.length; i++) {

        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked sqare
            let clickedColor = this.style.backgroundColor
            //compare color to pickedColor for victory conditions
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                ChangeColors(clickedColor)
                h1.style.backgroundColor = clickedColor
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset(){
    //gen new colors
    colors = genRandColors(numSquares)
    //pick new randocm color from array
    pickedColor = pickColor()
    //change colors of squares
    colorDisplay.textContent = pickedColor

    this.textContent="New Colors"

    messageDisplay.textContent=""

    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        }
        else{
            squares[i].style.display = "none"
        }
        //change each color to match correct color
    }

    h1.style.backgroundColor = headerBG
}

function ChangeColors(color) {
    //loop through squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match correct color
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    let randomColor = Math.floor(Math.random() * colors.length)
    return colors[randomColor]
}

function genRandColors(numColors) {
    //make an array
    let colorsArr = []
    //add numColors random colors to array
    for (let i = 0; i < numColors; i++) {
        //get random color and push into colorsArr
        colorsArr.push(randColor())
    }
    //return array
    return colorsArr
}

function randColor() {
    // pick a red, green, blue from 0-255
    let rgb = []
    for (let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 256)
    }
    //return as rgb(r, g, b) string
    return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")"
}