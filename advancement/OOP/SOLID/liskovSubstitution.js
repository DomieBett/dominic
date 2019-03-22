/**
 * WRONG
 */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.color = 'white';
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.height * this.width;
    }

    setColor(color) {
        this.color = color;
    }

    draw() {
        // draw shape on canvas
    }
}

class Square extends Rectangle {
    constructor(dimensions) {
        super(dimensions, dimensions);
    }

    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.height = height;
        this.width = height;
    }
}

/**
 * RIGHT
 * 
 * Classes that implement the Liskov Substitution appropriately.
 */
class Shape {
    constructor() {
        this.color = 'white';
    }

    setColor(color) {
        this.color = color;
    }

    draw() {
        // draw shape on canvas
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }
}

class Square extends Shape {
    constructor(length) {
        this.length = length;
    }

    setLength(length) {
        this.length = length;
    }
}
