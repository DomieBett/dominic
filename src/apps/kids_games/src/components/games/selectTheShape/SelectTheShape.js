import React from 'react';
import { populateShapesData } from '../../../data/ShapesData';
import { getRandomColor } from '../../../utils/Color';
import { capitalizeFirstLetter } from '../../../utils/Text';
import SelectTheShapeChoices from './choices/SelectTheShapeChoices';
import SelectTheShapePrompt from './prompt/SelectTheShapePrompt';
import { Speech } from '../../../utils/Speech';
import './SelectTheShape.scss';

const shapeSize = 150;
const shapes = populateShapesData(shapeSize);

class SelectTheShape extends React.Component {
    constructor(props) {
        super(props);

        this.getRandomShape = this.getRandomShape.bind(this);
        this.gotoNextGame = this.gotoNextGame.bind(this);
        this.question = this.question.bind(this);

        this.state = {
            currentShape: this.getRandomShape(),
        }
    }

    componentDidMount() {
        this.introduceGame();
    }

    componentDidUpdate() {
        this.question();
    }

    getRandomShape() {
        const randomShape = shapes[(Math.ceil(Math.random() * shapes.length) - 1)];

        const randomColor = getRandomColor();

        return randomShape(randomColor);
    }

    gotoNextGame() {
        this.setState({
            currentShape: this.getRandomShape()
        });
    }

    introduceGame() {
        Speech.speak('Hi kids. Select the shape that matches the following.');
        this.question();
    }

    question() {
        Speech.speak(` Where do you see a ${this.state.currentShape.color} ${this.state.currentShape.name}`, true);
    }

    render() {
        return (
            <div className="SelectTheShape">
                <SelectTheShapePrompt
                    currentShape={this.state.currentShape}
                    shapeColor={capitalizeFirstLetter(this.state.currentShape.color)}
                    shapeName={capitalizeFirstLetter(this.state.currentShape.name)}>
                </SelectTheShapePrompt>

                <SelectTheShapeChoices
                    correctChoice={this.state.currentShape}
                    getRandomShape={this.getRandomShape}
                    gotoNextGame={this.gotoNextGame}
                    question={this.question}>
                </SelectTheShapeChoices>
            </div>
        )
    }
}

export default SelectTheShape;
