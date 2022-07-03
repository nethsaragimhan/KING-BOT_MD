
const KingBot = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const Language = require('../language');
const Lang = Language.getString('amazone');
const tk = Config.WORKTYPE == 'public' ? false : true

KingBot.addCommand({pattern: 'menu', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        

 *╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
 │
 ├─────────●●►
 *│🌼HEY,*  `+wish+`
 *│👤Name:* `+Config.BOT_NAME+`
 *│💎Developer:* Team King Bot
 *│Time⌚:* `+time+`
 *│📡Server:* Digital Ocean
 *│📦Frameworks:* Nodejs
 *│☬Working As*
 *│🛡️ `+Config.WORKTYPE+`*
 │ _©️🇰🇮🇳🇬-🇧🇴🇹-🇲D_
 ╰──────────●●►

 ╭──────────●●►
*│🟡BOT COMMANDS*
 │   ───────
 │ 
 │► .alive [Check bot status]
 │► .Admin [ for owner ]
 │► .version [check Version 
 │►.update [check Update]
 │►.update now [get update ]
 │►.restart [ restart bot ]
 ╰───────────●●►

 ╭───────────●●►
*│🟢STICKER COMMANDS*
 │      ───────
 │► .sticker
 │► .photo
 ╰────────────●●►

 ╭────────────●●►
 *│🧞‍♀️TEXT TO IMG*
 │   ───────
 │► .textimg 
 │► .ffpack [Free fire Logo pack]
 ╰────────────●●►

 ╭────────────●●►
 *│💰DOWNLOAD COMMANDS*
 │      ────────
 │►.video [ Yt Link]
 │►.song  [ song name ]
 │►.img [ name ]
 │►.fb  link ]
 ╰────────────●●►

 ╭────────────●●►
 *│🔍SEARCH COMMANDS*
 │     ──────────
 │► .yt [ topic ]
 │► .movie [ movie name ]
 │
 ╰────────────●●►

 ╭────────────●●►
 *│🛸GROUP COMMANDS*
 │  ─────────
 │► .rename [change Group name]
 │► .rules    [check rules]
 │► .tagadmin 
 │►.antispm
 │►.clear
 │► .report
 │► .add [ for owner ]
 │► .promote [ for owner ]
 │► .demote [ for owner ]
 │► .invite [ for owner ]
 │► .leave [ for owner ]
 │►.welcome 
 │►.goodbye
 ╰───────────●●►

 ╭───────────●●►
 *│🎨MEDIA TOOLS*
 │      ───────
 │►.mp3 [Video To mp3]
 │► .removebg
 │► .unvoice [mp3 to voice]
 ╰───────────●●►

 ╭───────────●●►
 *│⚡MORE COMMAND*
 │  ────────
 │►.gm
 │►.gn
 │► .wallpaper
 │► .anime
 │► .device
 │► .ss [link ]
 ╰────────────●●►

 ╭───────────●●►
 *│⚙️BOT SETTINGS*
 │    ───────
 │► .pp [set profilr pic]
 │►.whatsblock on [WA link Block]
 │►.inblock on /off 
 │►.work public /private
 │►.setrules
 │► .setvar
 │ ▷BOT_NAME: <bot name> [change NAME]
 │ ▷MENU_LOGO: <link> [change Logo]
 │ ▷CAPTION: <text> [change caption]
 │ ▷SUDO: <number> [add sudo]
 │    
 │    THANK FOR
 │     USING
 │ KING BOT ✉️
 │©️TEAM KING BOT
 ╰───────────●●►
 
`}) 

 }));
