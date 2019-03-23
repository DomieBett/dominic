/**
 * BAD
 * 
 * To calculate area, the mothod areaCalculator will have to get
 * more if statements if there is need for area calculation of
 * more shapes.
 */
class Square {
    constructor(length) {
        this.length = length;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

class Operations {
    areaCalculator(shape) {
        let areas = [];

        for(shape of shapes) {
            if (shape instanceof Square) {
                areas.push(Math.pow(shape.length, 2));
            } else if (shape instanceof Circle) {
                areas.push(Math.PI * Math.pow(shape.radius, 2));
            }
        }

        return areas;
    }
}

/**
 * GOOD
 * 
 * With this, the massAreaCalculator doesnt need any change but
 * can be extended to calculate area of more shapes. All that is
 * needed is for every shape to have the area method.
 */
class Square {
    constructor(length) {
        this.length = length;
    }

    area() {
        return Math.pow(this.length, 2);
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Operations {
    massAreaCalculator(shapes) {
        let areas = [];

        for(shape of shapes) {
            areas.push(shape.area());
        }

        return areas;
    }
}
