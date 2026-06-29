
        const MODEL_NAME = 'ministral-3:8b';
        let conversationHistory = [
            { role: "system", content: "تو یک دستیار هوشمند، مفید و خونگرم به نام Ministral 3 هستی. همیشه به زبان فارسی پاسخ بده. مودب و دقیق باش." }
        ];


        const chatBox = document.getElementById('chatBox');
        const statusDiv = document.getElementById('status');
        const statusText = document.getElementById('statusText');
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');
        const clearBtn = document.getElementById('clearBtn');


        function getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
        }

        function addMessage(sender, text, saveToHistory = true) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'ai-message'}`;

            const bubbleClass = sender === 'user' ? 'user-bubble' : 'ai-bubble';
            const safeText = text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

            messageDiv.innerHTML = `
                <div class="bubble ${bubbleClass}">${safeText}</div>
                <div class="message-time">${getCurrentTime()}</div>
            `;

            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;

            if (saveToHistory) {
                const role = sender === 'user' ? 'user' : 'assistant';
                conversationHistory.push({ role: role, content: text });

                if (conversationHistory.length > 51) {
                    const systemMsg = conversationHistory[0];
                    conversationHistory = [systemMsg, ...conversationHistory.slice(-50)];
                }
            }
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.id = 'typingIndicator';
            typingDiv.className = 'message ai-message';
            typingDiv.innerHTML = `
                <div class="typing-indicator">
                    <div class="typing-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    <span>در حال نوشتن...</span>
                </div>
            `;
            chatBox.appendChild(typingDiv);

chatBox.scrollTop = chatBox.scrollHeight;
        }

        function removeTypingIndicator() {
            const indicator = document.getElementById('typingIndicator');
            if (indicator) indicator.remove();
        }

        function buildPromptFromHistory() {
            let promptText = "";
            for (let i = 1; i < conversationHistory.length; i++) { // از 1 شروع کن تا system حذف بشه
                const msg = conversationHistory[i];
                if (msg.role === "user") {
                    promptText += `User: ${msg.content}\n`;
                } else if (msg.role === "assistant") {
                    promptText += `Assistant: ${msg.content}\n`;
                }
            }
            promptText += `Assistant: `;
            return promptText;
        }

        function setStatus(connected, message) {
            if (connected) {
                statusDiv.className = 'status online';
                statusText.textContent = message || "";
            } else {
                statusDiv.className = 'status offline';
                statusText.textContent = message || '❌ قطع ارتباط';
            }
        }

        function clearChat() {
            if (confirm('آیا مطمئنی؟ تمام تاریخچه چت پاک میشه.')) {
                const systemMsg = conversationHistory[0];
                conversationHistory = [systemMsg];
                chatBox.innerHTML = '';
                const welcomeDiv = document.createElement('div');
                welcomeDiv.className = 'message ai-message';
                welcomeDiv.innerHTML = `
                    <div class="bubble ai-bubble">🧹 تاریخچه پاک شد! از نو شروع می‌کنیم. چطور می‌تونم کمکت کنم؟</div>
                    <div class="message-time">${getCurrentTime()}</div>
                `;
                chatBox.appendChild(welcomeDiv);

                conversationHistory.push({ role: "assistant", content: "تاریخچه پاک شد! از نو شروع می‌کنیم. چطور می‌تونم کمکت کنم؟" });

                setStatus(true, '✅ تاریخچه پاک شد');
                setTimeout(() => setStatus(true, ''), 2000);
            }
        }
        async function sendMessage() {
            const userMsg = messageInput.value.trim();
            if (!userMsg) return;

            sendBtn.disabled = true;
            messageInput.disabled = true;
            clearBtn.disabled = true;
            addMessage('user', userMsg);
            messageInput.value = '';
            setStatus(true, '⏳ در حال پردازش...');

            try {
                showTypingIndicator();

                const fullPrompt = buildPromptFromHistory();

                const response = await fetch('http://localhost:11434/api/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: MODEL_NAME,
                        prompt: fullPrompt,
                        stream: false,
                        options: {
                            temperature: 0.7,
                            num_predict: 512,
                            num_ctx: 4096
                        }
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data = await response.json();

                removeTypingIndicator();
                addMessage('ai', data.response || 'پاسخی دریافت نشد.');
                setStatus(true, '');

            } catch (error) {
                console.error('خطا:', error);
                removeTypingIndicator();

                let errorMsg = '❌ خطا! ';
                if (error.message.includes('Failed to fetch')) {
                    errorMsg = '❌ به Ollama متصل نیست! مطمئن شو "ollama serve" اجراست.';
                } else if (error.message.includes('HTTP')) {
                    errorMsg = `❌ مدل "${MODEL_NAME}" پیدا نشد! با "ollama list" اسم دقیق رو ببین.`;
                } else {
                    errorMsg = `❌ خطا: ${error.message}`;
                }

                addMessage('ai', errorMsg);
                setStatus(false, '⚠️ خطا در ارتباط');
            } finally {
                sendBtn.disabled = false;
                messageInput.disabled = false;
                clearBtn.disabled = false;
                messageInput.focus();
            }
        }
        async function checkConnection() {
            try {
                const response = await fetch('http://localhost:11434/api/tags');
                if (response.ok) {
                    const data = await response.json();
                    const models = data.models || [];
                    const modelExists = models.some(m => m.name.includes(MODEL_NAME.split(':')[0]));

                    if (modelExists) {
                        setStatus(true, '✅');
                    } else {
                        setStatus(false, `⚠️ مدل "${MODEL_NAME}" یافت نشد!`);
                    }
                } else {
                    setStatus(false, '❌');
                }
            } catch (error) {
                setStatus(false, '❌');
            }
        }

        document.getElementById('welcomeTime').textContent = getCurrentTime();
        checkConnection();
        messageInput.focus();
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !sendBtn.disabled) {
                sendMessage();
            }
        });
        function saveHistory() {
            localStorage.setItem('chatHistory', JSON.stringify(conversationHistory));
        }

        function loadHistory() {
            const saved = localStorage.getItem('chatHistory');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.length > 0 && parsed[0].role === 'system') {
                        conversationHistory = parsed;
                    }
                } catch(e) {}
            }
        }

        setInterval(saveHistory, 30000);
        window.addEventListener('beforeunload', saveHistory);