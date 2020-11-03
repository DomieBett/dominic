import React from 'react';
import './GamesDashboard.css';
import ShapesCard from './cards/ShapesCard';
import SelectTheShapeCard from './cards/SelectTheShapeCard';

class GamesDashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard GamesDashboard">
                <div className="dashboard-cards">
                    <ShapesCard history={this.props.history}></ShapesCard>
                    <SelectTheShapeCard history={this.props.history}></SelectTheShapeCard>
                </div>
            </div>
        );
    }
}

export default GamesDashboard;
