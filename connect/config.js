const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6283815956151']
global.rkyt = []
global.banUser = []
global.ntilink = []
global.wlcm = []
global.gcrevoke = []
global.packname = "RoF3X-Bot"
global.packname2 = "By FxSx"
global.author = "F3X"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','#','/','.','-']
global.mess = {
    success: 'Success',
    admin: '*Fitur Khusus Admin Group*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Diproses...*',
    linkm: '*Linknya Mana Kak?*',
    ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
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