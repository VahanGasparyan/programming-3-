
let side = 30
///օբյեկտներ պահելու զանգվածներ



function setup() {
        
        createCanvas(30, matrix.length * side)
        }
        


function draw() {
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



        for (let i in grassArr) {
                grassArr[i].mul()
        }


        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }



        for (let i in predatorArr) {
                predatorArr[i].eat()
        }


        for (let i in vochxarArr) {
                vochxarArr[i].eat()
        }


        for (let i in gaylArr) {
                gaylArr[i].eat()
        }

        for (let i in krakArr) {
                krakArr[i].varel()
        }

        for (let i in pajarnikArr) {
                pajarnikArr[i].marel()
        }

        for (let i in bombArr) {
                bombArr[i].traqacnel()
        }




}
