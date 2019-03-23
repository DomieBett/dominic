/**
 * WRONG
 */
class Animal {
    constructor(name) {
        this.name = name;
    }

    fly() {
        console.log('Up up and away.');
    }

    walk() {
        console.log('Two steps forwards, One step back');
    }

    bark() {
        console.log('Woof');
    }
}

class Bird extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}

/**
 * RIGHT
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Bird extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    fly() {
        console.log('Chirpity flap birdy');
    }
}
