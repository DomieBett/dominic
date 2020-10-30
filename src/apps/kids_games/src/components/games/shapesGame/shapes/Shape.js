import React from 'react';
import './Shape.css';

class Shape extends React.Component {
    render() {
        return (
            <div className={`${this.props.index === this.props.activeIndex ? 'Shape active' : 'Shape'} ${this.props.shape}`}>
                {
                    this.props.displayName ? <span className='shapeName'>{this.props.shape}</span> : ''
                }
            </div>
        );
    }
}

export default Shape;
