const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let color = 'black'
let x
let y

// x & y positioning is within the canvas not the page
function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    // starting position
    ctx.moveTo(x1, y1)
    // draw line to this ending position
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.stroke()
}

