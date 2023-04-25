var socket = io()
let side = 30
///օբյեկտներ պահելու զանգվածներ



function setup() {
        
        createCanvas(30 * side, 30 * side)
        background("gray")
        }
        


function changeColor(matrix) {
        console.log(matrix);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.2
                        textSize(toBot);
                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect(x * side, y * side, side, side)
                                text('🌿', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                                rect(x * side, y * side, side, side)
                                text('🦒', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                                rect(x * side, y * side, side, side)
                                text('🐅', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 4) {
                                fill("white")
                                rect(x * side, y * side, side, side)
                                text('🐑', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 5) {
                                fill("black")
                                rect(x * side, y * side, side, side)
                                text('🐺', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 6) {
                                fill("orange")
                                rect(x * side, y * side, side, side)
                                text('🔥', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 7) {
                                fill("blue")
                                rect(x * side, y * side, side, side)
                                text('👨‍🚒', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 8) {
                                fill("#d2691e")
                                rect(x * side, y * side, side, side)
                                text('☠️', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 9) {
                                fill("#5f2e00")
                                rect(x * side, y * side, side, side)
                                text('🧱', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 10) {
                                fill("#5c280a")
                                rect(x * side, y * side, side, side)
                                text('💣', x * side, y * side + toBot);
                        } else {
                                fill("gray")
                                rect(x * side, y * side, side, side)
                                text('', x * side, y * side + toBot);
                        }


                }
        }



      


}

socket.on('send matrix',changeColor)

function AddGrass(){
        socket.emit("addGrass");
    }
