import React from 'react';
import { populateShapesData } from '../../../data/ShapesData';
import { getRandomColor } from '../../../utils/Color';
import { capitalizeFirstLetter } from '../../../utils/Text';
import ComingSoon from '../../shared/ComingSoon';
import SelectTheShapeChoices from './choices/SelectTheShapeChoices';
import SelectTheShapePrompt from './prompt/SelectTheShapePrompt';
import './SelectTheShape.scss';

const shapeSize = 150;
const shapes = populateShapesData(shapeSize);

class SelectTheShape extends React.Component {
    constructor(props) {
        super(props);

        this.getRandomShape = this.getRandomShape.bind(this);

        this.state = {
            currentShape: this.getRandomShape(),
        }
    }

    getRandomShape() {
        const randomShape = shapes[(Math.ceil(Math.random() * shapes.length) - 1)];

        const randomColor = getRandomColor();

        return randomShape(randomColor);
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
                    currentShape={this.state.currentShape}
                    getRandomShape={this.getRandomShape}>
                </SelectTheShapeChoices>
            </div>
        )
    }
}

export default SelectTheShape;
