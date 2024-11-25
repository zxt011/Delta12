const fs = require('fs')
const chalk = require('chalk')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
global.namaowner = "𝚀𝚎𝚗𝚗𝙾𝚏𝚏𝚌"
global.owner = "6282135574623"
global.namabot = "𝚇𝚣𝙱𝚘𝚝𝚣"
global.botname = "𝚇𝚣𝙱𝚘𝚝𝚣"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.sessionName = 'session' 

const mess = {
   wait: "𝙬𝙖𝙞𝙩 𝙖 𝙢𝙞𝙣𝙪𝙩𝙚",
   success: "𝙙𝙤𝙣𝙚",
   on: "𝙖𝙘𝙩𝙞𝙫𝙚", 
   off: "𝙙𝙚𝙖𝙘𝙩𝙞𝙫𝙚",
   query: {
       text: "𝙥𝙡𝙚𝙖𝙨𝙚 𝙩𝙮𝙥𝙚 𝙩𝙚𝙠𝙨",
       link: "𝙥𝙡𝙚𝙖𝙨𝙚 𝙚𝙣𝙩𝙚𝙧 𝙡𝙞𝙣𝙠",
   },
   error: {
       fitur: "𝙣𝙤𝙩𝙛𝙤𝙪𝙣𝙙",
   },
   only: {
       group: "𝙜𝙧𝙤𝙪𝙥 𝙤𝙣𝙡𝙮",
       private: "𝙥𝙧𝙞𝙫𝙖𝙩𝙚 𝙤𝙣𝙡𝙮",
       owner: "𝙤𝙬𝙣𝙚𝙧 𝙤𝙣𝙡𝙮",
       admin: "𝙖𝙙𝙢𝙞𝙣 𝙤𝙣𝙡𝙮",
       badmin: "𝙗𝙤𝙩 𝙣𝙤𝙩 𝙖𝙙𝙢𝙞𝙣",
       premium: "𝙪𝙨𝙚𝙧 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙤𝙣𝙡𝙮",
   }
}
global.mess = mess
global.limitawal = {
    premium: "Infinity",
    free: 100
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})