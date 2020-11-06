import './SelectTheShapeChoices.scss';
import { Component } from 'react';
import SelectTheShapeChoice from './SelectTheShapeChoice';

class SelectTheShapeChoices extends Component {
    constructor(props) {
        super(props);

        this.onShapeSelect = this.onShapeSelect.bind(this);
    }

    onShapeSelect(e, choice) {
        e.preventDefault();

        const correctChoice = this.props.correctChoice;

        if (choice === correctChoice) {
            console.log('That is correct', correctChoice.color, choice.color);
        } else {
            console.log('That is wrong', correctChoice.color, choice.color);
        }
    }

    generateShapeChoices() {
        const numberOfChoices = 4;

        const correctShapeIndex = Math.floor(Math.random() * numberOfChoices);

        const choices = this.generateUniqueWrongChoices(this.props.correctChoice, numberOfChoices - 1);

        choices.splice(correctShapeIndex, 0, this.props.correctChoice);

        return choices;
    }

    generateUniqueWrongChoices(correctChoice, quantity) {
        let numberOfShapes = quantity;
        let shapes = [];
        let colorsToExclude = [];
        let shapesToExclude = [];

        colorsToExclude.push(correctChoice.color);
        shapesToExclude.push(correctChoice.name);

        while (numberOfShapes > 0) {
            let randomShape = this.props.getRandomShape();
            let shouldExcludeShape = shapesToExclude.indexOf(randomShape.name) !== -1
                || colorsToExclude.indexOf(randomShape.color) !== -1

            if (shouldExcludeShape) {
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
                            onShapeSelect={this.onShapeSelect}>
                        </SelectTheShapeChoice>
                    })
                }
            </div>
        );
    }
}

export default SelectTheShapeChoices;
