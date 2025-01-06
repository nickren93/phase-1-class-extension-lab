// Your code here
class Polygon{
    constructor(array){
        this.arrayOfSides = array
    }

    get countSides(){
        return this.arrayOfSides.length
    }

    get perimeter(){
        return this.arrayOfSides.reduce(this.calculatePerimeter, 0)
    }

    calculatePerimeter(accumulator, side){
        return accumulator + side
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.arrayOfSides[0] + this.arrayOfSides[1] > this.arrayOfSides[2] && 
            this.arrayOfSides[0] + this.arrayOfSides[2] > this.arrayOfSides[1] &&
            this.arrayOfSides[1] + this.arrayOfSides[2] > this.arrayOfSides[0]
        ) {
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.arrayOfSides[0] === this.arrayOfSides[1] && 
            this.arrayOfSides[0] ===  this.arrayOfSides[2] &&
            this.arrayOfSides[0] === this.arrayOfSides[3]
        ) {
            return true
        }else{
            return false
        }
    }

    get area(){
        return this.arrayOfSides[0] * this.arrayOfSides[0]
    }
}