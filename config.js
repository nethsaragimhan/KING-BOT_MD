/*

<\copiright by king bot team/>

*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
    VERSION: 'V 1.0.0 PUBLIC',
    MENU: process.env.MENU_CMD=== undefined ? 'king' : process.env.MENU_CMD,
    SESSION: process.env.KINGBOTMD_SESSION === undefined ? '' : process.env.KINGBOTMD_SESSION,
    BOT_NAME: process.env.BOT_NAME === undefined ? '[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] - ᎷᎠ' : process.env.BOT_NAME,
    SD: process.env.SONG_DOWNLOAD === undefined ? '🍃' : process.env.SONG_DOWNLOAD,
    SU: process.env.SONG_UPLOAD === undefined ? '🔥' : process.env.SONG_UPLOAD,
    VD: process.env.VIDEO_DOWNLOAD === undefined ? '🍃' : process.env.VIDEO_DOWNLOAD,
    VU: process.env.VIDEO_UPLOAD === undefined ? '🔥' : process.env.VIDEO_UPLOAD,
};