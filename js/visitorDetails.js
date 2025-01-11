// Function to send message to Telegram
function sendMessageToTelegram(name, email, subject, body) {
    const telegramBotToken = "7843178345:AAEvfMAG6bn-eQz1FOF2vIqLPiaK5k9KnLI";
    const chatId = "1490578252";
    const telegramMessage = `New Message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${body}`;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
    })
    .then((response) => {
        if (response.ok) {
            console.log("Message sent to Telegram successfully!");
        } else {
            console.error("Failed to send message to Telegram.");
        }
    })
    .catch((error) => console.error("Error sending message to Telegram:", error));
}

// Function to fetch the visitor's IP and send to Telegram
function sendIpToTelegram(ip) {
    const telegramBotToken = "7856056302:AAE2-4JJUoP1phavFSI0YY8lFLjNSEtDIJU";
    const chatId = "1490578252";
    const message = `New Visitor IP: ${ip}`;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
    })
    .then((response) => {
        if (response.ok) {
            console.log("IP sent to Telegram successfully!");
        } else {
            console.error("Failed to send IP to Telegram.");
        }
    })
    .catch((error) => console.error("Error sending IP to Telegram:", error));
}

// Fetch the IP address of the visitor
fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => sendIpToTelegram(data.ip))
    .catch((error) => console.error("Error fetching IP:", error));
