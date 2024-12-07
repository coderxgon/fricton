const https = require('https');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Function to send a message to a chat
function sendMessage(chatId, text) {
    const options = {
        hostname: 'api.telegram.org',
        port: 443,
        path: `/bot${BOT_TOKEN}/sendMessage`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const postData = JSON.stringify({
        chat_id: chatId,
        text: text
    });

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(postData);
    req.end();
}

// Example usage: Send a message to a specific chat
const chatId = 'YOUR_CHAT_ID'; // Replace with your chat ID
const message = 'Hello from your Node.js bot!';
sendMessage(chatId, message);
