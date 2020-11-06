import { Component } from "react";
import './SelectTheShapeChoice.scss';

class SelectTheShapeChoice extends Component {
    getChoiceLetter() {
        const letterA = 97;

        return String.fromCharCode(letterA + this.props.index);
    }

    render() {
        return (
            <div
                className={`SelectTheShapeChoice ${this.props.choice.name}`}
                style={this.props.choice.style}
                onClick={e => this.props.onShapeSelect(e, this.props.choice)}>
                <span>{this.getChoiceLetter()} )</span>
            </div>
        )
    }
}

export default SelectTheShapeChoice;
