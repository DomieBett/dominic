import React from 'react';
import './Arrow.css';

class RightArrow extends React.Component {
    render() {
        return (
            <div className="Arrow RightArrow" onClick={this.props.onClick}>
                <i className="fa fa-2x fa-angle-right"></i>
            </div>
        );
    }
}

export default RightArrow;
