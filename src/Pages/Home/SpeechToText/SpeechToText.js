import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const SpeechToText = () => {
    const {
        transcript,

        resetTranscript,

    } = useSpeechRecognition();

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true })
        console.log('lisitening starts');
    }, [])
    return (
        <div>
            <h2>This is speech to text</h2>
            <form>
                <textarea value={transcript}></textarea>
                <button onClick={resetTranscript}>Clear text</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    SpeechRecognition.stopListening();
                    console.log('listening stop');
                }}>Stop Listen</button>
            </form>
        </div>
    );
};

export default SpeechToText;