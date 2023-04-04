function matrixGenerator(matrixSize, grass, grassEater, predator, vochxar, gayl, krak, pajarnik, tuyn, bomb) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        //GrassEater 2

        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        //3 predator


        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        //vochxar

        for (let i = 0; i < vochxar; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }
        //gayl

        for (let i = 0; i < gayl; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
        }

        //krak

        for (let i = 0; i < krak; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 6
        }

        //pajarnik

        for (let i = 0; i < pajarnik; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 7
        }
        //uteliq


        for (let i = 0; i < tuyn; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 8
        }

        for (let i = 0; i < matrixSize; i++) {
                for (let j = 0; j < matrixSize; j++) {
                        if (i == j || i + j == matrix.length < 1) {
                                matrix[i][j] = 9
                        }
                }
        }



        for (let i = 0; i < bomb; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 10
        }








        return matrix
}

let matrix = matrixGenerator(30, 20, 13, 4, 7, 5, 5, 10, 7, 1)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var vochxarArr = []
var gaylArr = []
var krakArr = []
var pajarnikArr = []
var tuynArr = []
var xochndotArr = []
var bombArr = []


function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pre = new Predator(x, y)
                                predatorArr.push(pre)
                        } else if (matrix[y][x] == 4) {
                                let vochx = new Vochxar(x, y)
                                predatorArr.push(vochx)
                        } else if (matrix[y][x] == 5) {
                                let gay = new Gayl(x, y)
                                gaylArr.push(gay)
                        } else if (matrix[y][x] == 6) {
                                let kra = new Krak(x, y)
                                krakArr.push(kra)
                        } else if (matrix[y][x] == 7) {
                                let pajar = new Pajarnik(x, y)
                                pajarnikArr.push(pajar)
                        } else if (matrix[y][x] == 8) {
                                let tuy = new Tuyn(x, y)
                                tuynArr.push(tuy)
                        } else if (matrix[y][x] == 9) {
                                let xoch = new Xochndot(x, y)
                                xochndotArr.push(xoch)
                        } else if (matrix[y][x] == 10) {
                                let bo = new Bomb(x, y)
                                bombArr.push(bo)
                        }


                }
        }

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
