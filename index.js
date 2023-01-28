var canvas = document.getElementById('game');
var btn = document.getElementById('start');
var ctx = canvas.getContext("2d");
var snakeX = 0;
var snakeY = 0;
var snakeSize = 20;
var snakeSpeed = 20;

var appleX = 0;
var appleY = 0;

btn.onclick= (e)=>{
    e.preventDefault();
    setInterval(drawGame, 100)
    console.log("Hello")
   }

// Draw snake
function drawSnake() {
    ctx.fillStyle ="green";
    ctx.fillRect(snakeX, snakeY, snakeSize , snakeSize)
}
// Draw Apple

function drawApple() {
    ctx.fillStyle ="orange";
    ctx.fillRect(appleX, appleY, snakeSize , snakeSize)
}

// update the position of snake  
function updateSnake() {
    snakeX = snakeX + snakeSpeed; 
     if(snakeX > canvas.width){
        snakeX = 0;
     }
}


function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSnake();
    drawApple();
    updateSnake();

}
