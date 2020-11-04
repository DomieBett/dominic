import './SelectTheShapeChoices.scss';
import { Component } from 'react';
import SelectTheShapeChoice from './SelectTheShapeChoice';

class SelectTheShapeChoices extends Component {
    generateShapeChoices() {
        const currentShapePosition = Math.floor(Math.random() * 4);
        const letters = ['a', 'b', 'c', 'd'];

        return [0, 1, 2, 3].map((position) => {
            let shape = (position === currentShapePosition)
                ? this.props.currentShape
                : this.props.getRandomShape()

            if (position === currentShapePosition) {
                shape = this.props.currentShape;
            } else {
                shape = this.props.getRandomShape();
            }

            return {
                letter: letters[position],
                shape
            }
        });
    }

    render() {
        const shapeChoices = this.generateShapeChoices();

        return (
            <div className="SelectTheShapeChoices">
                {
                    shapeChoices.map((choice) => {
                        return <SelectTheShapeChoice letter={choice.letter} choice={choice.shape}></SelectTheShapeChoice>
                    })
                }
            </div>
        );
    }
}

export default SelectTheShapeChoices;
