/*

King Team Official

*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function KingBot() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2126, 14]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]')}${chalk.green.bold('Team')}
${chalk.white.italic('[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] String code recipient')}
${chalk.blue.bold('ℹ️  Connecting [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] QR Code: '),
      'KINGBOTMD;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'KINGBOTMD;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*▪️ [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] Scanned✅️*\n*▪️Thanks For Choosing [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 😈*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] Successfully Scanned✅️*\n*▪️Thanks For Choosing [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]😈*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "\n\n Nigalkku sandesham pakarthan \n kaliyunnillegil,whatsapp parishodikkuka \n nigalude numberillekku  code ayachinnu!\n\n\n\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

KingBot();
