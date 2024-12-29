# Live_Mult-Lanaguage_Captions
 Live Multi-Language Captions is a simple tool that provides real-time captions and translates spoken text into different languages. It helps people who need captions or translation in live events, making it easier to understand and communicate across language barriers.

## Setup Instructions

## Clone the repo:

    git clone [https://github.com/RJ10Rushikesh/live-multi-language-captions.git](https://github.com/RJ10Rushikesh/Live-Mult-Lanaguage-Captions)
    
    cd live-multi-language-captions/backend

## Install dependencies:

    npm install

## Start the backend:

    npm start The server will be running at http://localhost:5000.

## Extension
    Go to the extension folder:
    cd ../extension

## Add the extension to Chrome:
    Open Chrome and go to chrome://extensions/.
    Enable Developer Mode.
    Click Load unpacked and select the extension folder.
    Now the extension will be ready to use!

## Features
    Live Captions: Converts spoken text into captions.
    Language Translation: Translates the captions into any language.
    Chrome Extension: View live captions in the browser.

# Live Multi-Language Captions

## Project Description
This project is a MicroSaaS solution designed to provide real-time captions in multiple languages. It converts audio to text and translates the text into a target language, making content accessible to a global audience. The tool can be useful for webinars, live events, or any situation where multi-language communication is needed.

## Setup Instructions

1. **Clone the Repository**:
   Open your terminal and run:

   git clone <repository-url>

3. **Navigate to Backend Directory**:
   Go to the backend folder with:
   `cd backend`

4. **Install Backend Dependencies**:
   Run the command:
   `npm install`

5. **Start the Backend Server**:
   Launch the server with:
   `npm start`

6. **Navigate to Extension Directory**:
   Move to the extension folder with:
   `cd extension`

7. **Add the Extension to Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" (toggle it on in the top right).
   - Click "Load unpacked" and select the `extension` folder.

## Features Overview

- **Real-Time Captions**: Converts live audio to text.
- **Multi-Language Support**: Translates captions into a target language of your choice.
- **User-Friendly Interface**: Simple and intuitive design for easy use.

## How It Works

1. The user interacts with the browser extension to capture audio input.
2. The backend processes the audio to extract text and translates it using the `translate-google` package.
3. Translated captions are displayed in real-time in the extension popup.

## Screenshots

