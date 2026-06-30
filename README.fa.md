# 🤖 AI ChatBot Collection

<p align="center">

A collection of modern AI chatbot interfaces built with **HTML, CSS, and Vanilla JavaScript**.

Supports both **Cloud AI APIs** and **Local LLMs powered by Ollama**.

</p>

---

## 📸 Screenshots

<table align="center">
<tr>
<td align="center">
<img src="assets/Screenshot 2026-06-30 140429.png" width="450">
<br>
<b>API ChatBot</b>
</td>

<td align="center">
<img src="assets/Screenshot 2026-06-30 140637.pn" width="450">
<br>
<b>Local ChatBot</b>
</td>
</tr>
</table>

---

## ✨ Overview

AI ChatBot Collection is a lightweight and modern chatbot interface built entirely with **Vanilla JavaScript**, requiring no frontend frameworks.

The project includes two independent chatbot implementations:

* 🌐 **API ChatBot** — Connects to cloud-based AI providers through OpenAI-compatible APIs.
* 💻 **Local ChatBot** — Runs local language models using Ollama without requiring an internet connection.

Whether you're learning how to integrate Large Language Models (LLMs), building your own chatbot, or looking for a clean starting point for AI projects, this repository provides a simple yet powerful foundation.

---

# 📦 Project Structure

```text
AI-ChatBot/
│
├── 📁 API ChatBot
│   ├── apichatbot.html
│   ├── apichatbot.css
│   └── apichatbot.js
│
└── 📁 Local ChatBot
    ├── localchatbots.html
    ├── localchatbots.css
    └── localchatbot.js
```

---

# 🚀 API ChatBot

The API ChatBot communicates with cloud-based AI services using the Chat Completion API format.

Compatible with providers such as:

* OpenAI
* OpenRouter
* DeepSeek
* Groq
* Together AI
* Azure OpenAI
* Any OpenAI-compatible API

---

## Features

* Modern and responsive chat interface
* Conversation history management
* Typing indicator animation
* Automatic message timestamps
* Code block detection and rendering
* One-click code copy button
* Automatic code recognition
* Offline fallback responses
* Prevents duplicate requests
* Right-to-left (RTL) language support
* Clean and lightweight UI

---

# 💻 Local ChatBot

The Local ChatBot is designed to work directly with **Ollama**, allowing you to run AI models entirely on your own computer.

No internet connection required.

No API key required.

No cloud services involved.

---

## Features

* Direct connection to Ollama
* Local AI model execution
* Automatic connection status detection
* Conversation context management
* Chat history persistence using LocalStorage
* Clear conversation history
* Processing status indicator
* Connection error handling
* Fast local inference

---

# 🎯 Feature Comparison

| Feature                  | API ChatBot | Local ChatBot |
| ------------------------ | :---------: | :-----------: |
| Modern UI                |      ✅      |       ✅       |
| Responsive Design        |      ✅      |       ✅       |
| Message Timestamps       |      ✅      |       ✅       |
| Typing Indicator         |      ✅      |       ✅       |
| Conversation Context     |      ✅      |       ✅       |
| Chat History Persistence |      ❌      |       ✅       |
| Code Block Rendering     |      ✅      |       ❌       |
| Copy Code Button         |      ✅      |       ❌       |
| Offline Support          |      ⚠️     |       ✅       |
| Ollama Support           |      ❌      |       ✅       |
| Cloud API Support        |      ✅      |       ❌       |

---

# 🛠 Technologies

* HTML5
* CSS3
* Vanilla JavaScript (ES6)
* Fetch API
* Clipboard API
* LocalStorage
* REST API
* Ollama API

---

# ⚙️ Getting Started

## API ChatBot

Open:

```javascript
apichatbot.js
```

Configure your API credentials:

```javascript
const API_URL = "";
const API_KEY = "";
const API_MODEL = "";
```

Then simply open:

```text
apichatbot.html
```

inside your browser.

---

## Local ChatBot

### 1. Install Ollama

Download and install Ollama on your machine.

---

### 2. Download a model

```bash
ollama pull ministral
```

or any other model you prefer.

---

### 3. Start Ollama

```bash
ollama serve
```

---

### 4. Configure the model

Open:

```javascript
localchatbot.js
```

Set the model name:

```javascript
const MODEL_NAME = "ministral-3:8b";
```

---

### 5. Launch the application

Open:

```text
localchatbots.html
```

in your browser.

---

# 🧠 Architecture

```text
User

↓

Chat Interface

↓

Conversation Manager

↓

Request Builder

↓

AI Provider

↓

Response Processor

↓

UI Renderer
```

---

# 🎨 User Interface

The interface includes:

* Modern design
* Responsive layout
* Auto scrolling
* Typing animation
* Online status indicator
* Message timestamps
* Chat bubbles
* Error handling
* Code block rendering
* Copy-to-clipboard support
* RTL language compatibility

---

# 🔒 Error Handling

The project gracefully handles:

* Internet connection failures
* API request failures
* HTTP errors
* Empty AI responses
* Missing Ollama models
* Ollama connection failures
* Network errors

---

# 🎯 Perfect For

* Learning AI integration
* Frontend development practice
* Personal projects
* Portfolio projects
* LLM experimentation
* Building custom AI assistants

---

# 🔮 Future Improvements

Planned enhancements include:

* Streaming responses
* Full Markdown rendering
* Syntax highlighting
* File uploads
* Image support
* Voice input
* Voice output
* Multiple conversations
* Conversation search
* Export & Import chats
* Theme manager
* Plugin system
* Model selector
* Prompt templates
* Token usage counter
* Dark / Light themes
* Progressive Web App (PWA)

---

# 🤝 Contributing

Contributions are always welcome!

If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a Pull Request.

Every contribution is greatly appreciated.

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project under the terms of the MIT License.

See the [LICENSE](LICENSE) file for more information.

---

# ⭐ Support

If you find this project useful:

* ⭐ Star this repository
* 🍴 Fork the project
* 💬 Share it with others

Your support helps improve and maintain the project.

---

<p align="center">
</p>
