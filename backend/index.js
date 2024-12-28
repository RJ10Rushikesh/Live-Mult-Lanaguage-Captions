const express = require('express');
const bodyParser = require('body-parser');
const translate = require('translate-google');  // Updated translation package
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/process-audio', async (req, res) => {
    const { text, targetLang } = req.body;
    
    try {
        const translatedText = await translate(text, { to: targetLang });
        res.json({ translatedText });
    } catch (error) {
        console.error('Error during translation:', error);
        res.status(500).json({ error: 'Translation failed' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
