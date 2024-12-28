const translate = require('translate-google');
exports.handler = async (event, context) => {
    const { text, targetLang } = JSON.parse(event.body);
    
    try {
        const translatedText = await translate(text, { to: targetLang });
        return {
            statusCode: 200,
            body: JSON.stringify({ translatedText })
        };
    } catch (error) {
        console.error('Error during translation:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Translation failed' })
        };
    }
};
