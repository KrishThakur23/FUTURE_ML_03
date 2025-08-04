# 🤖 Telegram + Dialogflow Chatbot

A simple, intelligent Telegram bot powered by Dialogflow, built with Node.js. This bot can hold conversations, understand natural language, and reply to users automatically using Google's Dialogflow NLU.

---

## 🚀 Features

- Built using [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- Integrates with [Google Dialogflow](https://dialogflow.cloud.google.com/)
- Hosted on [Railway](https://railway.app/) for continuous uptime
- Supports environment variables for secure credential management
- Can be shared with anyone via Telegram

---

## 🛠️ Technologies Used

- Node.js
- Telegram Bot API
- Google Dialogflow
- Railway (for hosting)
- GitHub Codespaces (development)

---

## 🧪 Live Bot

Try the live bot here:  
👉 [https://t.me/dialogflowcustomersupportbot]

---

## 📦 How to Use

### ✅ Option 1: Use the Bot Directly (No Setup Required)

If you're just here to *use the chatbot*, you're all set!

1. Click this link: [https://t.me/YOUR_BOT_USERNAME](https://t.me/YOUR_BOT_USERNAME)
2. Start chatting.
3. The bot replies based on Dialogflow intelligence.

---

### 🧑‍💻 Option 2: Run This Project in Your Own Repository

If you want to clone this project and make your own version of the bot:

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

#### 2. Create a Dialogflow Agent

1.Go to Dialogflow Console
2.Create a new agent
3.Go to IAM & Admin → Service Accounts, generate a key, and copy the JSON contents

#### 3. Set Environment Variables
In GitHub → Settings → Secrets and Variables → Codespaces or Railway project → Variables, add:

TELEGRAM_TOKEN ->	Your Telegram bot token from BotFather
DIALOGFLOW_PROJECT_ID ->	Your Dialogflow project ID
GOOGLE_APPLICATION_CREDENTIALS_JSON -> Paste the full JSON content of your Dialogflow service account key

You do not need to upload .env or the JSON file. It's created at runtime from these variables.

#### 4. Deploy on Railway (Recommended)

1.Go to railway.app
2.Create a new project and connect this GitHub repo
3.Set the same environment variables in Railway's dashboard
4.Railway auto-builds and deploys your bot

---

## 🧠 How it works

- Listens to messages on Telegram via polling
- Sends text input to Dialogflow
- Gets structured intent and reply from Dialogflow
- Sends that reply back to the user on Telegram

---
