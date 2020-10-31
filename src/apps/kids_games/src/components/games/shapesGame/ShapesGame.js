import React from 'react';
import { populateShapesData } from '../../../data/ShapesData';
import { getRandomColor } from '../../../utils/Color';
import LeftArrow from './arrows/LeftArrow';
import RightArrow from './arrows/RightArrow';
import Shape from './shapes/Shape';
import ShapeName from './shapes/ShapeName';
import './ShapesGame.css';

const shapeSize = 200;
const shapes = populateShapesData(shapeSize);

class ShapesGame extends React.Component {
    constructor(props) {
        super(props);

        this.gotoShape = this.gotoShape.bind(this);
        this.gotoPreviousShape = this.gotoPreviousShape.bind(this);
        this.gotoNextShape = this.gotoNextShape.bind(this);

        this.state = {
            activeIndex: 0,
            currentColor: getRandomColor()
        }
    }

    gotoNextShape(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        if (index >= (shapes.length - 1)) {
            index = 0;
        } else {
            index++;
        }

        this.setState({
            activeIndex: index,
            currentColor: getRandomColor()
        });
    }

    gotoPreviousShape(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        if (index < 1) {
            index = shapes.length - 1;
        } else {
            index--;
        }

        this.setState({
            activeIndex: index,
            currentColor: getRandomColor()
        });
    }

    gotoShape(index) {
        this.setState({
            activeIndex: index,
            currentColor: getRandomColor()
        });
    }

    render() {
        return (
            <div className="ShapeGameContainer">
                <div className="ArrowContainer">
                    <LeftArrow onClick={e => this.gotoPreviousShape(e)}></LeftArrow>
                    <RightArrow onClick={e => this.gotoNextShape(e)}></RightArrow>
                </div>
                <div style={{ maxWidth: shapeSize }} className="ShapeContainer">
                    {shapes.map((shape, index) => {
                        return <Shape
                            shape={shape}
                            activeIndex={this.state.activeIndex}
                            currentColor={this.state.currentColor}
                            index={index}></Shape>
                    })}

                    <ShapeName
                        name={shapes[this.state.activeIndex]().name}
                        color={this.state.currentColor}
                    ></ShapeName>
                </div>
            </div>
        );
    }
}

export default ShapesGame;
