class Bomb {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 10
        
        this.directions = []

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char,char1) {
        this.getNewCoordinates()
        let found = []


        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }

    traqacnel() {
        
        let emptyCell = this.chooseCell(8,9)
        let newCell = random(emptyCell)

        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in xochndotArr) {
                if (newX == xochndotArr[i].x && newY == xochndotArr[i].y) {
                    xochndotArr.splice(i, 1)
                    this.energy-=1
                    break
                }
            }

            for (let i in tuynArr) {
                if (newX == tuynArr[i].x && newY == tuynArr[i].y) {
                    tuynArr.splice(i, 1)
                    break
                }
            }
            matrix[newY][newX] = 10
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY


        } else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 10
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        if(this.energy < 0){
            this.die()
            }
        }
    }
    

    die(){

        
        for (let i = 0; i < bombArr.length; i++) {
            if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
                bombArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0

        // for (let x = 0; x < matrix.length; x++) {
        //     for (let y = 0; y < matrix[x].length; y++) {
        //         if (matrix[x][y] == 10) {
        //             matrix[x][y] = 
        //         }
        //     }
        // }
       
    }
}


