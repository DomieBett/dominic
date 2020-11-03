import React from 'react';
import Card from '../../../shared/Card';
import './ShapesCard.scss';

class ShapesCard extends React.Component {
    render() {
        return (
            <div className="ShapesCard" onClick={() => this.props.history.push('/games/shapes')}>
                <Card name="Shapes">
                    <div className="card-thumbnail">
                        <div className="shape square"></div>
                        <div className="shape circle"></div>
                        <div className="shape triangle"></div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default ShapesCard;
