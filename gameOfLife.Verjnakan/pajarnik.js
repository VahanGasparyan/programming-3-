let LivingCreature = require("./LivingCreature")
  module.exports = class Pajarnik extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.kyanq = 30
        this.directions = [];
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

    chooseCell(char, char1) {
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

    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7

            let pajar = new Pajarnik(newX, newY)

            pajarnikArr.push(pajar)


        }
    }


    marel() {
        let emptyCell = this.chooseCell(6, 8)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            this.kyanq += 5
            let newX = newCell[0]
            let newY = newCell[1]

            for (let i in krakArr) {
                if (newX == krakArr[i].x && newY == krakArr[i].y) {
                    krakArr.splice(i, 1)
                    break
                }
            }
            
            for (let i in tuynArr) {
                    if (newX == tuynArr[i].x && newY == tuynArr[i].y) {
                        tuynArr.splice(i, 1)
                        this.kyanq -= 50
                        break
                    }
                }
            

                matrix[newY][newX] = 7
                matrix[this.y][this.x] = 0


                this.x = newX
                this.y = newY

                if (this.kyanq > 20) {
                    this.mul()
                }

            } else {
                this.move()
            }
        }
        

        move() {
            let emptyCell = this.chooseCell(0)
            let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]

                matrix[newY][newX] = 7
                matrix[this.y][this.x] = 0

                this.x = newX
                this.y = newY

                this.kyanq--

                if (this.kyanq < 0) {
                    this.die()
                }
            }
        }

        die() {
            matrix[this.y][this.x] = 0

            for (let i in pajarnikArr) {
                if (this.x == pajarnikArr[i].x && this.y == pajarnikArr[i].y) {
                    pajarnikArr.splice(i, 1)
                }
            }
        }



    }