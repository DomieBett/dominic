const query = document.getElementById('query');
const speakButton = document.getElementById('speak');
const browserCompatibilityMessage = 'This browser doesnt support speech recognition. Please use chrome browser';

let SpeechRecog, recognition;

function detectBrowser() {
    const ua = detect.parse(navigator.userAgent);

    return {
        family: ua.browser.family,
    }
}

function startSpeechRecognition() {
    if (detectBrowser().family !== 'Chrome') {
        query.textContent = browserCompatibilityMessage;
    } else {
        speakButton.classList.add('active');
        query.textContent = '';
        recognition.start();
    }
}

/**
 * performs query from speech recognition
 * @param {string} query query string
 */
function performQuery(query) {
    const cleanQuery = query.toLowerCase().trim();

    if (cleanQuery === 'next') {
        pauseAutoplay();
        cycleShapes(1);
    } else if (cleanQuery === 'previous') {
        pauseAutoplay();
        cycleShapes(-1);
    }
}

(() => {
    if (detectBrowser().family !== 'Chrome') {
        query.textContent = browserCompatibilityMessage;
        return;
    } else {
        SpeechRecog = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecog();

        function setUpEventListeners() {
            recognition.onresult = (event) => {
                speakButton.classList.remove('active');
                if (event.results.length > 0) {
                    const result = event.results[0][0].transcript;
                    query.textContent = result;
                    performQuery(result);
                }
            }

            speakButton.addEventListener('click', () => {
                startSpeechRecognition();
            });

            document.addEventListener('keypress', (event) => {
                if (event.code === "Space") {
                    startSpeechRecognition();
                }
            });
        }

        setUpEventListeners();
    }
})();
