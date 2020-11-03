import React from 'react';
import './SelectTheShapeCard.scss';
import Card from '../../../shared/Card';

class SelectTheShapeCard extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.history.push('/games/select-the-shape')} className="SelectTheShapeCard">
                <Card name="Select the Shape">
                    <div className="card-thumbnail">
                        <div className="shape square"></div>
                        <div className="cursor"></div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default SelectTheShapeCard;
