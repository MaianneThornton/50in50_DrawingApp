const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    // position of mouse once pressed
    x = e.offsetX
    y = e.offsetY
    // console.log("mousedown:", x, y)

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    // resets mouse positioning
    x = undefined
    y = undefined
    // console.log("mouseup:", x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        // console.log("mousemove:", x2, y2);

        x = x2
        y = y2
    }
})

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
    // * 2 to get the line size equal to the radius of the circle
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
    // append 5 on to the size
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click', () => {
    // append 5 on to the size
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)
// console.log(color.target);

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
