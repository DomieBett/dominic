import React from 'react';
import { Link } from 'react-router-dom';
import './GamesDashboard.css';
import ShapesCard from './ShapesCard';

class GamesDashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard GamesDashboard">
                <div className="dashboard-cards">
                    <ShapesCard history={this.props.history}></ShapesCard>
                </div>
            </div>
        );
    }
}

export default GamesDashboard;
