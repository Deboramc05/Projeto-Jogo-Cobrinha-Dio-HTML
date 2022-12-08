let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d"); 
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function criarBG() {
    context.fillStyle = "99FFFF";
    context.fillRect(0, 0, 16 * box, 16 * box);
  }
  
  function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
      context.fillStyle = "#000099";
      context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}