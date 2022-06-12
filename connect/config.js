const fs = require("fs")
const chalk = require("chalk")

// Other
global.thumb = fs.readFileSync("./worker/media/image/rof3x.jpg")
global.owner = ['6283815956151']
global.rkyt = []
global.banUser = []
global.ntilink = []
global.wlcm = []
global.gcrevoke = []
global.packname = "RoF3X-Bot"
global.packname2 = "By FxSx"
global.author = "© F3X"
global.linkgc = "https://chat.whatsapp.com/IPOBkFdNTWTFYZTbXhLniV"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','#','/','.','-']
global.mess = {
    sukses: 'Sukses...',
    admin: '*Fitur Khusus Admin Group*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Khusus Group*',
    private: '*Fitur Khusus Private Chat*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Diproses...*',
    linkm: '*Linknya Mana Kak?*',
    ban: '*Kamu Sudah Dibanned Oleh Owner Ku!*',
    error: 'Bot Error...!'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})