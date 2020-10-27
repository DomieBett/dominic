const shapes = {
    square: createSquare,
    circle: createCircle,
    rectangle: createRectangle,
    oval: createOval,
    triangle: createTriangle,
    line: createLine
}
const colors = [
    'red', 'blue', 'yellow', 'green', 'black', 'brown', 'orange', 'pink', 'grey'
];
const shapeSize = 200;
const autoplayButton = document.getElementById('autoplay');

let autoplayInterval;
let currentShapeIndex = 0;

/**
 * Returns a random color from the colors array
 */
function getRandomColor() {
    return colors[(Math.ceil(Math.random() * colors.length) - 1)];
}

/**
 * Returns an object skeleton with a basic div 
 * @param {number} width width of a square
 * @param {number} height height of a square
 */
function createBaseDivShape(width, height = null) {
    const elem = document.createElement('div');

    height = height || width;

    elem.style.width = `${width}px`;
    elem.style.height = `${height}px`;
    elem.className = 'shape';

    return {
        element: elem,
        color: getRandomColor(),
        name: null,
        fullName: null
    }
}

/**
 * 
 * @param {number} width width of a square
 */
function createSquare(width) {
    const shape = createBaseDivShape(width);

    shape.element.classList.add('square');
    shape.element.style.backgroundColor = shape.color;

    shape.name = 'square';

    return shape;
}

/**
 * Creates a rectangle
 * @param {number} width 
 * @param {number} height 
 */
function createRectangle(width, height) {
    height = height || (width * 2 / 3);
    const shape = createBaseDivShape(width, height);

    shape.name = 'rectangle';
    shape.element.classList.add(shape.name);
    shape.element.style.backgroundColor = shape.color;

    return shape;
}

/**
 * Creates a circle shape
 * @param {number} width - diameter of a circle
 */
function createCircle(width) {
    const shape = createBaseDivShape(width);

    shape.name = 'circle';
    shape.element.classList.add(shape.name);
    shape.element.style.backgroundColor = shape.color;

    return shape;
}

/**
 * Returns an object with oval details
 * @param {number} width width of the oval
 * @param {number} height height of the oval
 */
function createOval(width, height = null) {
    height = height || (width * 3 / 4)
    const shape = createBaseDivShape(width, height);

    shape.name = 'oval';
    shape.element.classList.add(shape.name);
    shape.element.style.backgroundColor = shape.color;

    return shape;
}

/**
 * Creates a triangle
 * @param {number} width - size of bottom of triangle
 */
function createTriangle(width) {
    const shape = createBaseDivShape(0, 0);

    shape.name = 'triangle';
    shape.element.classList.add(shape.name);
    shape.element.style.borderTop = `${0}px solid transparent`;
    shape.element.style.borderRight = `${width/2}px solid transparent`;
    shape.element.style.borderLeft = `${width/2}px solid transparent`;
    shape.element.style.borderBottom = `${width}px solid ${shape.color}`;

    return shape;
}

function createLine(length) {
    const shape = createBaseDivShape(length, 5);

    shape.name = 'line';
    shape.element.classList.add(shape.name);
    shape.element.style.backgroundColor = shape.color;
    shape.element.style.border = '0.2px solid black';

    return shape;
}

/**
 * Returns a shape of the type at the index
 * @param {number} index - index of a shape
 * @param {number} shapeSize - the size of the shape
 */
function getShapeAtIndex(index, shapeSize = 200) {
    const currentShape = shapes[Object.keys(shapes)[index]](shapeSize);

    return currentShape;
}

/**
 * Does the displaying for the shape and the its description
 */
function displayCurrentShape() {
    const currentShape = getShapeAtIndex(currentShapeIndex);

    const shapeColor = currentShape.color;
    const shapeName = currentShape.name;
    const fullShapeName = `${shapeColor} ${shapeName}`;

    const contentDiv = document.getElementById('shape-content');
    const shapeNameDiv = document.getElementById('shape-name');

    contentDiv.innerHTML = '';
    contentDiv.appendChild(currentShape.element);

    shapeNameDiv.textContent = fullShapeName;
    shapeNameDiv.style.color = `${shapeColor}`;

    return {
        shapeName,
        currentShape,
        shapeColor,
        shapeFullName: `${shapeColor} ${shapeName}`
    }
}

/**
 * Smart increment current shape index so it doesnt go past the bounds
 * @param {number} increment - negative or positive number
 */
function incrementCurrentShapeIndex(increment) {
    if ((currentShapeIndex + increment) > (Object.keys(shapes).length - 1)) {
        currentShapeIndex = 0;
    } else if ((currentShapeIndex + increment) < 0) {
        currentShapeIndex = (Object.keys(shapes).length - 1)
    } else {
        currentShapeIndex += increment;
    }
}

/**
 * Displays the shape on the currentShapeIndex and speaks
 * what shape it is.
 */
function displayAndSpeakCurrentShape() {
    window.speechSynthesis.cancel();

    const shapeDetails = displayCurrentShape();

    const message = new SpeechSynthesisUtterance();
    message.text = `This ${shapeDetails.shapeName} is ${shapeDetails.shapeColor}`;
    message.voice = window.speechSynthesis.getVoices()[0];

    return window.speechSynthesis.speak(message);
}

/**
 * Either cycles to the next shape or the previous shape depending on increment
 * @param {number} increment - positive/negative number to cycle towards
 */
function cycleShapes(increment) {
    incrementCurrentShapeIndex(increment);

    return displayAndSpeakCurrentShape();
}

function toggleAutoplay() {
    if (autoplayButton.classList.contains('pause')) {
        autoplayInterval = setInterval(() => {
            cycleShapes(1);
        }, 3000);
    } else {
        clearInterval(autoplayInterval);
    }
}

function pauseAutoplay() {
    autoplayButton.classList.remove('pause');
    clearInterval(autoplayInterval);
}

function setUpEventListeners() {
    // event listeners for the right and left keyboard buttons
    document.addEventListener('keydown', (evnt) => {
        pauseAutoplay();

        if (evnt.key === 'ArrowRight') {
            cycleShapes(1)
        } else if (evnt.key === 'ArrowLeft') {
            cycleShapes(-1);
        }
    });

    const rightArrow = document.getElementById('right-arrow');
    const leftArrow = document.getElementById('left-arrow');

    // event listeners for the arrows
    rightArrow.addEventListener('click', () => {
        pauseAutoplay();

        cycleShapes(1);
    });
    leftArrow.addEventListener('click', () => {
        pauseAutoplay();

        cycleShapes(-1);
    });

    const autoplayButton = document.getElementById('autoplay');
    autoplayButton.addEventListener('click', () => {
        autoplayButton.classList.toggle('pause');

        toggleAutoplay();
    });
}

setUpEventListeners();
displayCurrentShape();
// displayAndSpeakCurrentShape();
