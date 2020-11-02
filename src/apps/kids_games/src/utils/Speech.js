import { Storage } from "./Storage";

export class Speech {
    static speak(text, queueSpeech = false) {
        const isMuted = Storage.get('isMuted') !== 'false';

        if (isMuted) {
            return;
        }

        if (!queueSpeech) {
            window.speechSynthesis.cancel();
        }

        const message = new SpeechSynthesisUtterance();
        message.text = text;

        return window.speechSynthesis.speak(message);
    }
}
