var socket = io()
let side = 30
///օբյեկտներ պահելու զանգվածներ



function setup() {

        createCanvas(30 * side, 30 * side)
        background("gray")
}

socket.on("Spring", function (data) {
        weath = data;
})
socket.on("Summer", function (data) {
        weath = data;
})
socket.on("Autumn", function (data) {
        weath = data;
})
socket.on("Winter", function (data) {
        weath = data;
})

var weath = "Spring"

function changeColor(matrix) {

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.2
                        textSize(toBot);
                         if (matrix[y][x] == 1) {
                                rect(x * side, y * side, side, side)
                                text('🌿', x * side, y * side + toBot);
                                if (weath == "Spring") {
                                        fill("green");
                                } else if (weath == "Summer") {
                                        fill("yellow");
                                } else if (weath == "Autumn") {
                                        fill("orange");
                                } else if (weath == "Winter") {
                                        fill("lightblue")
                                }
                        }
                        // if (matrix[y][x] == 1) {
                        //         fill("green")
                        //         rect(x * side, y * side, side, side)
                        //         text('🌿', x * side, y * side + toBot);
                         else if (matrix[y][x] == 2) {
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
                        }  else {
                                        fill("gray")
                                        rect(x * side, y * side, side, side)
                                        // text('', x * side, y * side + toBot);
                                }
                        }
                        
                }
        
        }





        

        socket.on('send matrix', changeColor)
        function Spring() {
                socket.emit("Spring");
        }
        function Summer() {
                socket.emit("Summer");
        }
        function Autumn() {
                socket.emit("Autumn");
        }
        function Winter() {
                socket.emit("Winter");
        }
        function kill() {
                socket.emit('killAll');
        }
        function AddGrass() {
                socket.emit("addGrass");
        }
        function AddGrassEater() {
                socket.emit("addGrassEater");
        }
        function AddPredator() {
                socket.emit("addPredator");
        }
        function AddVochxar() {
                socket.emit("addVochxar");
        }
        function AddGayl() {
                socket.emit("addGayl");
        }
        function AddKrak() {
                socket.emit("addKrak");
        }
        function AddPajarnik() {
                socket.emit("addPajarnik");

        }
        function AddTuyn() {
                socket.emit("addTuyn");

        }
        function AddXochndot() {
                socket.emit("addXochndot");

        }
        function AddBomb() {
                socket.emit("addBomb");

        }