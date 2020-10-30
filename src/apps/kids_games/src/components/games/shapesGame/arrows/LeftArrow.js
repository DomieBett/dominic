import React from 'react';
import './Arrow.css';

class LeftArrow extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} className="Arrow LeftArrow">
                <i className="fa fa-2x fa-angle-left"></i>
            </div>
        );
    }
}

export default LeftArrow;
