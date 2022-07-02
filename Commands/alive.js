/*  <\copiright by king bot team/>

*/


const KingBot = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('system_stats');

    KingBot.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*👋Hi I'm Online Now*\n*I'm King Bot*\n\n*◉Version :► 8.5.0 (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► King Bot Is a Powerfull Md Bot For Whatsapp.*\n*◯●Github Link :►input var...Type error\n\n*🐋Have a Nice Day*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\nᴾᴼᵂᴱᴿᴱᴰ ᴮʸ ᴷᴵᴺᴳ ᴮᴼᵀ ᴹᴰ' })
     }
    }));

    KingBot.addCommand({pattern: 'sysd', fromMe: am, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

 if (Config.WORKTYPE == 'public') {

    KingBot.addCommand({pattern: 'alive', fromMe: false, dontAddCommandList:true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*👋Hi I'm Online Now*\n*I'm King Bot*\n\n*◉Version :► 8.5.0 (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► King Bot Is a Powerfull Md Bot For Whatsapp.*\n*◯●Github Link :►input var...Type error\n\n*🐋Have a Nice Day*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\nᴾᴼᵂᴱᴿᴱᴰ ᴮʸ ᴷᴵᴺᴳ ᴮᴼᵀ ᴹᴰ' })
     }
    }));

    KingBot.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
