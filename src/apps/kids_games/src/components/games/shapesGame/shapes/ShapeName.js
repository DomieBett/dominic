import React from 'react';
import './ShapeName.css';

class ShapeName extends React.Component {
    render() {
        return (
            <span style={{ color: this.props.color }} className="ShapeName">
                { `${this.props.color} ${this.props.name}`}
            </span>
        );
    }
}

export default ShapeName;
