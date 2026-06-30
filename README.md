# 🤖 AI ChatBot Collection

<p align="center">

یک مجموعه از رابط‌های کاربری مدرن برای ارتباط با مدل‌های هوش مصنوعی

**ساخته شده با HTML، CSS و JavaScript خالص (Vanilla JS)**

پشتیبانی از **APIهای ابری** و **مدل‌های محلی Ollama**
## 📸 Screenshots
## 📸 Screenshots

<table>
<tr>
<td align="center">
<img src="assets/Screenshot 2026-06-30 140429.png" width="450">
<br>
<b>API ChatBot</b>
</td>

<td align="center">
<img src="assets/Screenshot 2026-06-30 140637.png" width="450">
<br>
<b>Local ChatBot</b>
</td>
</tr>
</table>

</p>

---

## ✨ معرفی پروژه

این پروژه شامل دو ChatBot مستقل است که هر دو با رابط کاربری مدرن و بدون استفاده از Framework توسعه داده شده‌اند.

هدف پروژه، فراهم کردن یک رابط کاربری سبک، سریع و قابل توسعه برای کار با مدل‌های زبانی (LLMs) است.

این پروژه مناسب است برای:

* توسعه‌دهندگان Front-End
* علاقه‌مندان به هوش مصنوعی
* یادگیری نحوه ارتباط با LLMها
* پروژه‌های شخصی
* نمونه‌کار (Portfolio)
* توسعه ChatBotهای اختصاصی

---

# 📦 بخش‌های پروژه

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

# 🚀 نسخه اول — API ChatBot

این نسخه برای اتصال به سرویس‌های هوش مصنوعی طراحی شده است.

از هر API که از ساختار Chat Completion پشتیبانی کند می‌توان استفاده کرد.

نمونه‌ها:

* OpenAI
* OpenRouter
* DeepSeek
* Groq
* Together AI
* Azure OpenAI
* هر API سازگار دیگر

---

## امکانات

* رابط کاربری مدرن
* طراحی Responsive
* نمایش پیام‌ها به صورت Chat
* نمایش زمان ارسال پیام
* نمایش وضعیت تایپ (Typing Indicator)
* نگهداری تاریخچه گفتگو
* ارسال Context به مدل
* مدیریت درخواست‌ها
* جلوگیری از ارسال همزمان چند پیام
* نمایش Code Block
* دکمه Copy برای کدها
* تشخیص خودکار کدها
* پاسخ آفلاین هنگام عدم دسترسی به API
* پشتیبانی کامل از زبان فارسی (RTL)

---

# 💻 نسخه دوم — Local ChatBot

این نسخه مستقیماً به Ollama متصل می‌شود و مدل را روی سیستم خودتان اجرا می‌کند.

بدون نیاز به اینترنت

بدون نیاز به API Key

بدون ارسال اطلاعات به سرورهای خارجی

---

## امکانات

* اتصال مستقیم به Ollama
* بررسی وضعیت اتصال
* تشخیص وجود مدل
* نگهداری تاریخچه گفتگو
* ذخیره خودکار در LocalStorage
* بازیابی گفتگوها
* پاک کردن تاریخچه
* نمایش وضعیت پردازش
* نمایش خطاهای ارتباطی
* مدیریت Context گفتگو

---

# 🎯 ویژگی‌های کلیدی

| قابلیت           | API ChatBot | Local ChatBot |
| ---------------- | :---------: | :-----------: |
| رابط کاربری مدرن |      ✅      |       ✅       |
| Responsive       |      ✅      |       ✅       |
| نمایش زمان پیام  |      ✅      |       ✅       |
| Typing Indicator |      ✅      |       ✅       |
| نگهداری Context  |      ✅      |       ✅       |
| ذخیره تاریخچه    |      ❌      |       ✅       |
| نمایش Code Block |      ✅      |       ❌       |
| Copy Code        |      ✅      |       ❌       |
| اجرای آفلاین     |      ⚠️     |       ✅       |
| اتصال به Ollama  |      ❌      |       ✅       |
| اتصال به API     |      ✅      |       ❌       |

---

# 🛠 تکنولوژی‌های استفاده شده

* HTML5
* CSS3
* Vanilla JavaScript (ES6)
* Fetch API
* Clipboard API
* LocalStorage
* Ollama API
* REST API

---

# ⚙️ راه‌اندازی

## API ChatBot

ابتدا فایل زیر را باز کنید:

```
apichatbot.js
```

اطلاعات API را وارد کنید:

```javascript
const API_URL = "";
const API_KEY = "";
const API_MODEL = "";
```

سپس فایل HTML را اجرا کنید.

---

## Local ChatBot

### 1- نصب Ollama

### 2- دانلود مدل

```bash
ollama pull ministral
```

یا هر مدل دلخواه دیگر.

---

### 3- اجرای Ollama

```bash
ollama serve
```

---

### 4- تنظیم نام مدل

در فایل

```javascript
localchatbot.js
```

مقدار زیر را تغییر دهید:

```javascript
const MODEL_NAME = "ministral-3:8b";
```

---

### 5- اجرای پروژه

فایل

```
localchatbots.html
```

را در مرورگر باز کنید.

---

# 🧠 معماری پروژه

```
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

# 📸 قابلیت‌های رابط کاربری

* طراحی مدرن
* رنگ‌بندی حرفه‌ای
* انیمیشن‌ها
* اسکرول خودکار
* نمایش وضعیت آنلاین
* نمایش وضعیت تایپ
* پیام‌های حبابی
* مدیریت خطا
* دکمه کپی کد
* پشتیبانی از RTL

---

# 🔒 مدیریت خطا

پروژه خطاهای زیر را مدیریت می‌کند:

* قطع اینترنت
* عدم پاسخ API
* Timeout
* خطاهای HTTP
* نبود مدل در Ollama
* اجرا نبودن Ollama
* پاسخ خالی مدل

---

# 📈 مناسب برای

* پروژه‌های شخصی
* آموزش
* نمونه‌کار
* یادگیری ارتباط با LLM
* توسعه ChatBot
* توسعه رابط کاربری هوش مصنوعی

---

# 🔮 پیشنهاد برای توسعه

قابلیت‌هایی که می‌توان در نسخه‌های آینده اضافه کرد:

* Streaming Response
* Markdown کامل
* Syntax Highlighting
* File Upload
* Image Upload
* Voice Input
* Voice Output
* Multiple Conversations
* Chat Search
* Export Chat
* Import Chat
* Theme Manager
* Plugin System
* Model Selector
* Prompt Templates
* Token Counter
* Dark / Light Mode
* PWA Support

---

# 🤝 مشارکت

اگر پیشنهادی برای بهبود پروژه دارید:

1. پروژه را Fork کنید.
2. تغییرات خود را اعمال کنید.
3. Commit بگیرید.
4. Pull Request ارسال کنید.

تمام پیشنهادها و مشارکت‌ها باعث خوشحالی خواهد بود.

---
## 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project under the terms of the MIT License.

See the [LICENSE](LICENSE) file for more information.

---

# ⭐ حمایت از پروژه

اگر این پروژه برای شما مفید بود:

* ⭐ به مخزن GitHub ستاره بدهید.
* 🍴 پروژه را Fork کنید.
* 📢 آن را با دیگران به اشتراک بگذارید.

این حمایت باعث ادامه توسعه پروژه خواهد شد.

---

<p align="center">

**ساخته شده با ❤️ برای توسعه‌دهندگان هوش مصنوعی**

</p>
