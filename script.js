

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);

function startDraw(event) {
  isDrawing = true;
  draw(event);
}

function draw(event) {
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;
  if (!isDrawing) return;

  const x = event.pageX - canvas.offsetLeft;
  const y = event.pageY - canvas.offsetTop;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
}

function stopDraw() {
  isDrawing = false;
  ctx.beginPath();
}