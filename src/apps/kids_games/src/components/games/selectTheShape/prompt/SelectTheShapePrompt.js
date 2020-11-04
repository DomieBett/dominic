import React from 'react';
import './SelectTheShapePrompt.scss';

class SelectTheShapePrompt extends React.Component {
    render() {
        return (
            <div className="SelectTheShapePrompt">
                Where is the: <span style={{ color: this.props.shapeColor }}>{this.props.shapeColor} {this.props.shapeName}</span>
            </div>
        );
    }
}

export default SelectTheShapePrompt;