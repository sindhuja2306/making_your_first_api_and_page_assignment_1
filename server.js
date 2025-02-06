const express = require("express");
const app = express();
const port = 3000;

// Function to generate a cheerful message based on the current day
const getCheerfulMessage = () => {
    const messages = {
        Monday: "Let's kickstart the week with energy! 💪",
        Tuesday: "Keep pushing forward! You're doing great. 🚀",
        Wednesday: "Halfway through the week! Stay strong. 🌟",
        Thursday: "Almost there! Keep up the momentum. ⚡",
        Friday: "It's Friday! Time to wrap things up and relax. 🎉",
        Saturday: "Enjoy your weekend! You deserve it. 😎",
        Sunday: "Recharge and get ready for an amazing week ahead. ✨"
    };

    const dayOfWeek = new Date().toLocaleString("en-US", { weekday: "long" });
    return messages[dayOfWeek] || "Have a fantastic day! 😊";
};

// Define the greeting endpoint
app.get("/assistant/greet", (req, res) => {
    const userName = req.query.name || "Guest";
    const greetingMessage = `Hello, ${userName}! Welcome to your Virtual Assistant. 🤖`;
    const cheerfulMessage = getCheerfulMessage();

    res.json({ greeting: greetingMessage, message: cheerfulMessage });
});

// Start the server
app.listen(port, () => {
    console.log(`Virtual Assistant API is running at http://localhost:${port}`);
});
