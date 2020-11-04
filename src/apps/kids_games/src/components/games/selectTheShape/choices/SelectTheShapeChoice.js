import { Component } from "react";
import './SelectTheShapeChoice.scss';

class SelectTheShapeChoice extends Component {
    render() {
        return (
            <div className='SelectTheShapeChoice' style={this.props.choice.style}>
                <span>{this.props.letter} )</span>
            </div>
        )
    }
}

export default SelectTheShapeChoice;
