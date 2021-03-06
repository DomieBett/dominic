import React from 'react';

class FocusModeConfig extends React.Component {
    render() {
        return (
            <div title={this.props.isInFocusMode ? 'minimise' : 'maximise'} onClick={this.props.onClick} className="Config focus-mode">
                <i className={this.props.isInFocusMode ? "fa fa-compress" : "fa fa-expand"}></i>
            </div>
        )
    }
}

export default FocusModeConfig;
