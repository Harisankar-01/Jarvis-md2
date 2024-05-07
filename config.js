const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  AUDIO_DATA: process.env.AUDIO_DATA || '🍃⃞𝛨𝛥𝑅𝛪❤️҉️;ᴊᴀʀᴠɪꜱ;https://i.imgur.com/NehCBoQ.jpeg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  LOGS: toBool(process.env.LOGS) || true,
  KOYEB_API: process.env.KOYEB_API || '',
  SERVERURL: process.env.SERVERURL || '',
  SERVER: process.env.SERVER || 'defeat',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_1282_83c2_3fd3_ac62_44dc_6484_01fb_355e',
  LANG: process.env.LANG || 'EN',
  AUTO_REACTION: process.env.AUTO_REACTION || 'false',
  HANDLERS: process.env.HANDLER  || 'null',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: 'main',
  PORT: toBool(process.env.PORT) || 8000,
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '𝙸𝚃𝙰𝙲𝙷𝙸;ᴡᴀʙᴏᴛ',
  AUTO_STATUS_VIEWS: toBool(process.env.AUTO_STATUS_VIEWS || 'false'),
  WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
  GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
  AUTHOR: process.env.AUTHOR || 'ʟᴏᴋɪ-xᴇʀ',
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;🍃⃞𝙸𝚃𝙰𝙲𝙷𝙸-𝚄𝙲𝙷𝙸𝙷𝙰❤️҉️;https://i.imgur.com/PDorjJD.jpeg',
  SUDO: process.env.SUDO || '917510727828,',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '🍃⃞𝙸𝚃𝙰𝙲𝙷𝙸-𝚄𝙲𝙷𝙸𝙷𝙰❤️҉️;𝐻𝑎𝑟𝑖𝑠𝑎𝑛𝑘𝑎𝑟🍃;https://i.imgur.com/i9Vtv0W.mp4',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
