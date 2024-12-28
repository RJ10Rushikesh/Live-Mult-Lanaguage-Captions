import React, { useState } from 'react';

const App = () => {
    const [captions, setCaptions] = useState("");
    const [language, setLanguage] = useState("hi");

    // Function to handle audio and translate
    const handleAudio = async (audioText) => {
        const response = await fetch('https://your-netlify-url/.netlify/functions/processAudio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: audioText, targetLang: language })
        });

        const data = await response.json();
        setCaptions(data.translatedText);
    };

    return (
        <div>
            <h1>Live Multi-Language Captioning</h1>
            <button onClick={() => handleAudio("Hello, this is a test")}>Get Captions</button>
            <p>{captions}</p>
        </div>
    );
};

export default App;
