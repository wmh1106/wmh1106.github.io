let eraser = document.getElementById('eraser')
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
canvas.width = $(window).width()
canvas.height = $(window).height();



let using = false
let lastPoint = {
    x: 0,
    y: 0
}

let eraserOnOff = false
eraser.addEventListener('click', function(ev) {
    eraserOnOff = true
    ev.currentTarget.className = 'show x'
})

brush.addEventListener('click',function(ev){
    eraserOnOff = false
    ev.currentTarget.className = 'show'
})



document.addEventListener('mousedown', function(ev) {
    using = true
    if (eraserOnOff) {
        context.clearRect(ev.pageX-5,ev.pageY-5,10,10)
    } else {
        lastPoint = {
            x: ev.pageX,
            y: ev.pageY
        }
    }

})
document.addEventListener('mousemove', function(ev) {
    
    if(eraserOnOff){
        if (using) {
            context.clearRect(ev.pageX-5,ev.pageY-5,10,10)
        }
    }else{
        if (using) {
            drawLine(lastPoint.x, lastPoint.y, ev.pageX, ev.pageY, 1)
            lastPoint = {
                x: ev.pageX,
                y: ev.pageY
            }
        }
    }
})
document.addEventListener('mouseup', function() {
    using = false
})



function drawCircle(x, y, radius) {
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.stroke()
    context.closePath()
}

function drawLine(startX, startY, endX, endY) {
    context.beginPath()
    context.moveTo(startX, startY)
    context.lineTo(endX, endY)
    context.stroke()
    context.closePath()
}