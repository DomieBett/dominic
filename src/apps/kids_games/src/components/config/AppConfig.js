import React from 'react';
import './AppConfig.css'
import FocusModeConfig from './configElements/FocusModeConfig';
import SettingsConfig from './configElements/SettingsConfig';
import SoundConfig from './configElements/SoundConfig';
import { Storage } from './../../utils/Storage';

class AppConfig extends React.Component {
    constructor(props) {
        super(props);

        this.toggleFocusMode = this.toggleFocusMode.bind(this);
        this.toggleSoundMute = this.toggleSoundMute.bind(this);

        this.state = {
            isMuted: false,
            isInFocusMode: false
        }
    }

    componentDidMount() {
        this.syncFromStorage();
    }

    syncFromStorage() {
        const settings = this.getFromStorage();

        this.setState({
            isMuted: settings.isMuted
        });
    }

    syncToStorage() {
        Storage.set('isMuted', this.state.isMuted);
    }

    getFromStorage() {
        return {
            isMuted: Storage.get('isMuted') === 'false' ? false : true
        }
    }

    toggleFocusMode() {
        this.setState({
            isInFocusMode: !(this.state.isInFocusMode)
        });
    }

    toggleSoundMute() {
        const isMuted = !(this.state.isMuted);

        this.setState({
            isMuted
        });

        Storage.set('isMuted', isMuted);
    }

    render() {
        return (
            <div className="AppConfig">
                <SoundConfig onClick={e => this.toggleSoundMute()} isMuted={this.state.isMuted}></SoundConfig>
                <FocusModeConfig onClick={e => this.toggleFocusMode()} isInFocusMode={this.state.isInFocusMode}></FocusModeConfig>
                <SettingsConfig></SettingsConfig>
            </div>
        );
    }
}

export default AppConfig;
