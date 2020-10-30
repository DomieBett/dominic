import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <div className="cardHeader">{this.props.name}</div>
                <div className="cardContent">
                    <div className="cardThumbnail">
                        {this.props.children}
                    </div>
                </div>
                <div className="cardFooter"></div>
            </div>
        )
    }
}

export default Card;
