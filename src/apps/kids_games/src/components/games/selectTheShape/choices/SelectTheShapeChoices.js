import './SelectTheShapeChoices.scss';
import { Component } from 'react';
import SelectTheShapeChoice from './SelectTheShapeChoice';
import { Speech } from '../../../../utils/Speech';

const congratsChoices = [
    'Well done',
    'Congratulations',
    'Excellent',
    'Good work',
    'You are doing great',
];

class SelectTheShapeChoices extends Component {
    constructor(props) {
        super(props);

        this.onShapeSelect = this.onShapeSelect.bind(this);
    }

    onShapeSelect(e, choice) {
        e.preventDefault();

        return this.isCorrectChoice(choice)
            ? this.congratulate(choice)
            : this.tryAgain(choice);
    }

    isCorrectChoice(choice) {
        const correctChoice = this.props.correctChoice;
        return correctChoice === choice;
    }

    congratulate(selectedChoice) {
        let message = `${congratsChoices[Math.floor(Math.random() * congratsChoices.length)]}.`
        message += ` That is a ${selectedChoice.color} ${selectedChoice.name}`;

        Speech.speakThen(message, this.props.gotoNextGame);
    }

    tryAgain(selectedChoice) {
        let message = 'Nice attempt, but that is wrong.';
        message += ` You selected a ${selectedChoice.color} ${selectedChoice.name}.`;
        message += ` Try again`;

        Speech.speak(message);

        this.props.question();
    }

    generateShapeChoices() {
        const numberOfChoices = 2;

        const correctShapeIndex = Math.floor(Math.random() * numberOfChoices);

        const choices = this.generateUniqueWrongChoices(this.props.correctChoice, numberOfChoices - 1);

        choices.splice(correctShapeIndex, 0, this.props.correctChoice);

        return choices;
    }

    generateUniqueWrongChoices(correctChoice, quantity) {
        let numberOfShapes = quantity;
        let excludeLimit = 50;
        let shapes = [];
        let colorsToExclude = [];
        let shapesToExclude = [];

        colorsToExclude.push(correctChoice.color);
        shapesToExclude.push(correctChoice.name);

        while (numberOfShapes > 0 && excludeLimit > 0) {
            let randomShape = this.props.getRandomShape();
            let shouldExcludeShape = shapesToExclude.indexOf(randomShape.name) !== -1
                || colorsToExclude.indexOf(randomShape.color) !== -1

            if (shouldExcludeShape) {
                // limits the while loop from running forever.
                excludeLimit--;
                continue;
            }

            shapes.push(randomShape);
            colorsToExclude.push(randomShape.color);
            shapesToExclude.push(randomShape.name);

            numberOfShapes--;
        }

        return shapes;
    }

    render() {
        const shapeChoices = this.generateShapeChoices();

        return (
            <div className="SelectTheShapeChoices">
                {
                    shapeChoices.map((choice, index) => {
                        return <SelectTheShapeChoice
                            key={index}
                            index={index}
                            choice={choice}
                            isCorrect={this.isCorrectChoice(choice)}
                            onShapeSelect={this.onShapeSelect}>
                        </SelectTheShapeChoice>
                    })
                }
            </div>
        );
    }
}

export default SelectTheShapeChoices;
