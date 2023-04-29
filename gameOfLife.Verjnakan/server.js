var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log("server is run");
});

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

matrix = matrixGenerator(30, 20, 13, 4, 7, 5, 5, 10, 7, 1)
io.sockets.emit('send matrix', matrix)

grassArr = []
grassEaterArr = []
predatorArr = []
vochxarArr = []
gaylArr = []
krakArr = []
pajarnikArr = []
tuynArr = []
xochndotArr = []
bombArr = []



 Grass = require("./Grass")
 GrassEater = require("./GrassEater")
 Vochxar = require("./Vochxar")
 Predator = require("./Predator")
 Gayl = require("./Gayl")
 Bomb = require("./Bomb")
 Pajarnik = require("./Pajarnik")
 Krak = require("./Krak")
 Tuyn = require("./Tuyn")
 Xochndot = require("./Xochndot")


function createObject() {
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
                vochxarArr.push(vochx)
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
    io.sockets.emit('send matrix', matrix)
}

function game() {
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
    io.sockets.emit('send matrix', matrix)

}

setInterval(game, 300)


//////////////////// Events ///////////////////////

var weath;

function Spring(){
    weath = "Spring";
    io.sockets.emit("Spring",weath);
}
function Summer(){
    weath = "Summer";
    io.sockets.emit("Summer",weath);
}
function Autumn(){
    weath = "Autumn";
    io.sockets.emit("Autumn",weath);
}
function Winter(){
    weath = "Winter";
    io.sockets.emit("Winter",weath);
}


function kill() {
    grassArr = [];
    grassEaterArr = [];
    predatorArr = [];
    vochxarArr = [];
    gaylArr = [];
    krakArr = [];
    pajarnikArr = [];
    tuynArr = [];
    bombArr = [];
    xochndotArr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddGrass() {
    for (var i = 0; i < matrix.length; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);

        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGrassEater() {
    for (var i = 0; i < 30; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
         if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            let grEat = new GrassEater(x, y);
            grassEaterArr.push(grEat);
         }

    }
}


function AddPredator() {
    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            var pre = new Predator(x, y);
            predatorArr.push(pre);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddVochxar() {
    for (var i = 0; i < 15; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            var vochx = new Vochxar(x, y);
            vochxarArr.push(vochx);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddGayl() {
    for (var i = 0; i < 8; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            var gay = new Gayl(x, y);
            gaylArr.push(gay);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddKrak() {
    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            var kra = new Krak(x, y);
            krakArr.push(kra);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddPajarnik() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7;
            var pajar = new Pajarnik(x, y);
            pajarnikArr.push(pajar);
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddTuyn() {
    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 8;
            var tuy = new Tuyn(x, y);
            tuynArr.push(tuy);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddXochndot() {
    for (var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 9;
            var xoch = new Xochndot(x, y);
            xochndotArr.push(xoch);
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function AddBomb() {
    for (var i = 0; i < 5; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 10;
            var bo = new Bomb(x, y);
            bombArr.push(bo);
        }
    }
    io.sockets.emit("send matrix", matrix);
}


io.on('connection', function (socket) {
    createObject();
    socket.on("Spring", Spring);
    socket.on("Summer", Summer);
    socket.on("Autumn", Autumn);
    socket.on("Winter",Winter)
    socket.on("addGrass", AddGrass);
    socket.on("addGrassEater", AddGrassEater);
    socket.on("addPredator", AddPredator);
    socket.on("addVochxar", AddVochxar);
    socket.on("addGayl", AddGayl);
    socket.on("addKrak", AddKrak);
    socket.on("addPajarnik", AddPajarnik);
    socket.on("addTuyn", AddTuyn);
    socket.on("addXochndot", AddXochndot);
    socket.on("addBomb", AddBomb);
    socket.on('killAll',kill );
})




var statistics = {};
setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.predator = predatorArr.length;
    statistics.vochxar = vochxarArr.length;
    statistics.gayl = gaylArr.length;
    statistics.pajarnik = pajarnikArr.length;
    statistics.krak = krakArr.length;
    statistics.tuyn = tuynArr.length;
    statistics.bomb = bombArr.length;
    statistics.xochndot = xochndotArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
    })
}, 1000);
