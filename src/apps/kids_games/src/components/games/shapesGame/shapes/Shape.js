import React from 'react';
import './Shape.css';

class Shape extends React.Component {
    render() {
        const shape = this.props.shape(this.props.currentColor);

        return (
            <div
                style={shape.style}
                className={`Shape ${shape.name} ${this.props.index === this.props.activeIndex ? 'active' : ''}`}>
            </div>
        );
    }
}

export default Shape;
