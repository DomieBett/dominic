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

        window.speechSynthesis.speak(message);

        return message;
    }

    /**
     * After speech ends, perform the callback operation
     */
    static speakThen(text, callback, queueSpeech = false) {
        const spoken = Speech.speak(text, queueSpeech);

        return spoken ? spoken.addEventListener('end', callback) : callback();
    }
}
