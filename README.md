🚀 AI Chatbot – No-Code Solution
🔹 Overview
This is a no-code AI chatbot built using Llama 3.3 70B API via RapidAPI. With zero manual coding, this chatbot was created using Prompt Engineering and No-Code Tools, then deployed on Netlify.

🔹 Features
✅ No manual coding – Only Prompt Engineering!
✅ Uses Llama 3.3 70B API for AI-powered responses
✅ Simple HTML, CSS & JavaScript generated via AI
✅ Tested in an online code editor (CodePen)
✅ GitHub-hosted and Netlify-deployed

🔹 How I Built This (Step-by-Step)
1️⃣ Prompt Engineering: Used ChatGPT/Gemini/DeepSeek to generate the complete HTML, CSS, and JavaScript code for the chatbot.
2️⃣ Online Code Editor: Copied the generated code and tested it in CodePen.io.
3️⃣ RapidAPI Setup:

Created an account on RapidAPI.
Searched for Llama 3.3 70B API and subscribed.
Tested the API by hitting the chat completion endpoint.
4️⃣ API Integration:
Retrieved the API key and plugged it into the JavaScript file.
Connected the chatbot UI with the API for real-time responses.
5️⃣ Local Testing: Saved the chatbot files (index.html, style.css, script.js) on my system and tested the functionality in a browser.
6️⃣ GitHub Repository: Created a GitHub repository, uploaded all files, and pushed the project.
7️⃣ Deployment on Netlify:
Linked the GitHub repository to Netlify.
Clicked Deploy Website – and it was LIVE!
🔹 Tech Stack
Frontend: AI-generated HTML, CSS, JavaScript
API: Llama 3.3 70B API (via RapidAPI)
No-Code Tools: ChatGPT/Gemini/DeepSeek for code generation
Online Editor: CodePen for testing
Version Control: GitHub
Hosting: Netlify
🔹 API Integration (JavaScript)
js
Copy
Edit
const data = JSON.stringify({
    messages: [{ role: 'user', content: 'Hello, AI!' }],
    temperature: 1,
    top_p: 1
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open('POST', 'https://llama-3-3-70b.p.rapidapi.com/chat_completions');
xhr.setRequestHeader('x-rapidapi-key', 'YOUR_RAPIDAPI_KEY');
xhr.setRequestHeader('x-rapidapi-host', 'llama-3-3-70b.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);
🔹 Live Demo
🌍 https://starxai.netlify.app/
