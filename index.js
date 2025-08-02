const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

const sessionClient = new dialogflow.SessionsClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  const sessionId = uuid.v4();
  const sessionPath = sessionClient.projectAgentSessionPath(
    process.env.DIALOGFLOW_PROJECT_ID,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userMessage,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    const reply = result.fulfillmentText || "I didn't understand that.";

    bot.sendMessage(chatId, reply);
  } catch (err) {
    console.error('Dialogflow error:', err);
    bot.sendMessage(chatId, 'Something went wrong. Please try again.');
  }
});
