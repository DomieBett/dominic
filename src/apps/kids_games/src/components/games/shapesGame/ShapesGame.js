import React from 'react';
import { getRandomColor } from '../../../utils/Color';
import LeftArrow from './arrows/LeftArrow';
import RightArrow from './arrows/RightArrow';
import Shape from './shapes/Shape';
import './ShapesGame.css';

const shapes = ['square', 'circle', 'oval'];

class ShapesGame extends React.Component {
    constructor(props) {
        super(props);

        this.gotoShape = this.gotoShape.bind(this);
        this.gotoPreviousShape = this.gotoPreviousShape.bind(this);
        this.gotoNextShape = this.gotoNextShape.bind(this);

        this.state = {
            activeIndex: 0
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
            activeIndex: index
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
            activeIndex: index
        });
    }

    gotoShape(index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="ShapeGameContainer">
                <div className="ArrowContainer">
                    <LeftArrow onClick={e => this.gotoPreviousShape(e)}></LeftArrow>
                    <RightArrow onClick={e => this.gotoNextShape(e)}></RightArrow>
                </div>
                <div className="ShapeContainer">
                    {shapes.map((shape, index) => {
                        return <Shape shape={shape} activeIndex={this.state.activeIndex} index={index} displayName={true}></Shape>
                    })}
                </div>
            </div>
        );
    }
}

export default ShapesGame;
