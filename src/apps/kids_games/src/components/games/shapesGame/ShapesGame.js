import React from 'react';
import { populateShapesData } from '../../../data/ShapesData';
import { getRandomColor } from '../../../utils/Color';
import { Speech } from '../../../utils/Speech';
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
        this.handleKeyboardClicks = this.handleKeyboardClicks.bind(this);

        this.state = {
            activeIndex: 0,
            currentColor: getRandomColor()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardClicks);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardClicks);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.activeIndex !== prevState.activeIndex) {
            const shape = shapes[this.state.activeIndex]();

            const speech = `This ${shape.name} is ${this.state.currentColor}`;

            Speech.speak(speech);
        }
    }

    handleKeyboardClicks(event) {
        if (event.key === 'ArrowRight')
            this.gotoNextShape(event);
        else if (event.key === 'ArrowLeft')
            this.gotoPreviousShape(event);
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
                <h3>Shapes</h3>
                <div className="ArrowContainer">
                    <LeftArrow onClick={e => this.gotoPreviousShape(e)}></LeftArrow>
                    <RightArrow onClick={e => this.gotoNextShape(e)}></RightArrow>
                </div>
                <div style={{ maxWidth: shapeSize }} className="ShapeContainer">
                    {shapes.map((shape, index) => {
                        return <Shape
                            key={index}
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
