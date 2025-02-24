const apiKey = "your rapid api key"; 
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, "user");

    // Show typing indicator
    const typingIndicator = addMessage("⏳ Thinking...", "bot");

    // Call AI API with streaming response
    fetchResponse(message, typingIndicator);

    userInput.value = "";
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return messageDiv;
}

async function fetchResponse(userMessage, typingIndicator) {
    try {
        const response = await fetch("https://llama-3-3-70b.p.rapidapi.com/chat_completions", {
            method: "POST",
            headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "llama-3-3-70b.p.rapidapi.com",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: userMessage }],
                temperature: 0.7,
                top_p: 1
            })
        });

        const result = await response.json();
        const aiResponse = result?.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";

        // Replace typing indicator with response
        typingIndicator.innerHTML = `<p>${aiResponse}</p>`;
    } catch (error) {
        typingIndicator.innerHTML = `<p>⚠️ Error: Failed to get response.</p>`;
    }
}
