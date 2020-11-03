import React from 'react';

class SoundConfig extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} title={this.props.isMuted ? 'unmute' : 'mute'} className="Config mute"><i className={this.props.isMuted ? "fa fa-volume-off" : "fa fa-volume-up"}></i></div>
        )
    }
}

export default SoundConfig;