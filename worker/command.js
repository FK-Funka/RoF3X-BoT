process.on('uncaughtException', console.error) 

require("../connect/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const yogipw = require("tod-api")
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const maker = require('mumaker')

// Read Database
global.db = JSON.parse(fs.readFileSync('./worker/src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []


    module.exports = sock = async (sock, m, chatUpdate, store) => {
       try {
       var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
       var budy = (typeof m.text == 'string' ? m.text : '')
       var prefix = prefa ? /^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi.test(body) ? body.match(/^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi)[0] : "" : prefa ?? global.prefix
       const isCmd = body.startsWith(prefix)
       const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
       const args = body.trim().split(/ +/).slice(1)
       const pushname = m.pushName || "No Name"
       const botNumber = await sock.decodeJid(sock.user.id)
       const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
       const itsMe = m.sender == botNumber ? true : false
       const text = args.join(" ")
       const q = args.join(" ")
       const from = m.chat
       const quoted = m.quoted ? m.quoted : m
       const mime = (quoted.msg || quoted).mimetype || ''
       const isMedia = /image|video|sticker|audio/.test(mime)
       const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
       const groupName = m.isGroup ? groupMetadata.subject : ''
       const participants = m.isGroup ? await groupMetadata.participants : ''
       const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
       const groupOwner = m.isGroup ? groupMetadata.owner : ''
       const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
       const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
       const isBan = banUser.includes(m.sender)
       const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
       const AntiLink = m.isGroup ? ntilink.includes(from) : false
       const welcm = m.isGroup ? wlcm.includes(from) : false
       const GcRvk = m.isGroup ? gcrevoke.includes(from) : false

       // Quoted
       const content = JSON.stringify(m.message)
       const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
       const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
       const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
       const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
   	   const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
   	   const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
       const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
       const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
       const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
       const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
       const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
       const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

       const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if(time2 < "23:59:00"){
       var ucapanWaktu = 'Selamat Malam'
                                        }
    if(time2 < "19:00:00"){
       var ucapanWaktu = 'Selamat Petang'
                                         }
    if(time2 < "18:00:00"){
       var ucapanWaktu = 'Selamat Sore'
                                         }
    if(time2 < "15:00:00"){
       var ucapanWaktu = 'Selamat Siang'
                                         }
    if(time2 < "11:00:00"){
       var ucapanWaktu = 'Selamat Pagi'
                                         }
    if(time2 < "05:00:00"){
       var ucapanWaktu = 'Selamat Malam'
                                         }

       buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
       myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
       tgel = new Date();
       hri = tgel.getDate();
       bulnh = tgel.getMonth();
       thisHari = tgel.getDay(),
       thisDaye = myHari[thisHari];
       yye = tgel.getYear();
       syear = (yye < 1000) ? yye + 1900 : yye;
       const jangwak = (hri + '' + buln[bulnh] + '' + syear)
       const janghar = (thisDaye)

    if (m.message) {
       console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
       }
    if (command) {
       await sock.sendPresenceUpdate('composing', m.chat)
       }

    try {
       let isNumber = x => typeof x === 'number' && !isNaN(x)
       let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
       let user = global.db.users[m.sender]
    if (typeof user !== 'object') global.db.users[m.sender] = {}
    if (user) {
    if (!isNumber(user.afkTime)) user.afkTime = -1
    if (!('afkReason' in user)) user.afkReason = ''
    if (!isNumber(user.limit)) user.limit = limitUser
    } else global.db.users[m.sender] = {
       afkTime: -1,
       afkReason: '',
       limit: limitUser,
       }
    } catch (err) {
       console.error(err)
    }

    const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
    const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
       "orderMessage": {
       "orderId": orid, // Ganti Idnya
       "thumbnail": img, // Ganti Imagenya
       "itemCount": itcount, // Ganti Item Countnya
       "status": "INQUIRY", // Jangan Diganti
       "surface": "CATALOG", // Jangan Diganti
       "orderTitle": title, // Ganti Titlenya
       "message": text, // Ganti Messagenya
       "sellerJid": sellers, // Ganti sellernya
       "token": tokens, // Ganti tokenya
       "totalAmount1000": ammount, // Ganti Total Amountnya
       "totalCurrencyCode": "IDR", // Terserah
       }
    }), { userJid: jid })
    sock.relayMessage(jid, order.message, { messageId: order.key.id})
    }

    // Rakyat
    if (!isRakyat) {
       rkyt.push(m.sender.split("@")[0])
    }

    // AFK
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
    let user = global.db.users[jid]
    if (!user) continue
    let afkTime = user.afkTime
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
    }

    if (db.users[m.sender].afkTime > -1) {
    let user = global.db.users[m.sender]
    m.reply(`Kamu berhenti AFK ${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`.trim())
    user.afkTime = -1
    user.afkReason = ''
    }

    // Detect Group Invite
    if (m.mtype === 'groupInviteMessage') {
    teks = `Ketik join untuk bergabung ke group whatsapp anda`
    sendOrder(m.chat, teks, "391028153034238", thumb, 2022, "RoF3X-BoT", "6283815956151@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
    }

    // AntiLink
    if (AntiLink) {
    if (!isBotAdmins) return
    linkgce = await sock.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    m.reply(`\`\`\`??? Detect Link ???\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`??? Detect Link ???\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
    if (isAdmins) return m.reply(bvl)
    if (m.key.fromMe) return m.reply(bvl)
    if (isCreator) return m.reply(bvl)
    kice = m.sender
    await sock.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    sock.sendMessage(from, {text:`\`\`\`??? Detect Link ???\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }

    // Public & Self
    if (!sock.public) {
    if (!m.key.fromMe) return
    }

    // write database every 1 minute
    setInterval(() => {
    fs.writeFileSync('./worker/src/database.json', JSON.stringify(global.db, null, 2))
    }, 60 * 1000)

    // reset limit every 12 hours
    let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Asia/Jakarta"
    })


    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = tebaklagu[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `???? Tebak Lagu ????\n\nJawaban Benar ????\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete tebaklagu[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = tebakgambar[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `???? Tebak Gambar ????\n\nJawaban Benar ????\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete tebakgambar[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = tebakkata[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `???? Tebak Kata ????\n\nJawaban Benar ????\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete tebakkata[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = caklontong[m.sender.split('@')[0]]
       deskripsi = caklontong_desk[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `???? Cak Lontong ????\n\nJawaban Benar ????\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete caklontong[m.sender.split('@')[0]]
       delete caklontong_desk[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = tebakkalimat[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `???? Tebak Kalimat ????\n\nJawaban Benar ????\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete tebakkalimat[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = tebaklirik[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `???? Tebak Lirik ????\n\nJawaban Benar ????\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete tebaklirik[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = tebaktebakan[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await sock.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `???? Tebak Tebakan ????\n\nJawaban Benar ????\n\nIngin bermain lagi? tekan button dibawah`, "?? FxSx", m)
       delete tebaktebakan[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    if (('family100'+m.chat in _family100) && isCmd) {
       kuis = true
       let room = _family100['family100'+m.chat]
       let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
       let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
    if (!isSurender) {
       let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
    if (room.terjawab[index]) return !0
       room.terjawab[index] = m.sender
    }
       let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
       let caption = `
       Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
       ${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
       ${Array.from(room.jawaban, (jawaban, index) => {
       return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
       }).filter(v => v).join('\n')}
       ${isSurender ? '' : `Perfect Player`}`.trim()
       sock.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
    if (isWin || isSurender) delete _family100['family100'+m.chat]
    }

    //Suit PvP
       this.suit = this.suit ? this.suit : {}
       let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
    if (roof) {
       let win = ''
       let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
       sock.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
       delete this.suit[roof.id]
    return !0
    }
    roof.status = 'play'
    roof.asal = m.chat
    clearTimeout(roof.waktu)
    sock.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
    if (!roof.pilih) sock.sendText(roof.p, `Silahkan pilih \n\nBatu????\nKertas????\nGunting??????`, m)
    if (!roof.pilih2) sock.sendText(roof.p2, `Silahkan pilih \n\nBatu????\nKertas????\nGunting??????`, m)
    roof.waktu_milih = setTimeout(() => {
    if (!roof.pilih && !roof.pilih2) sock.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
    else if (!roof.pilih || !roof.pilih2) {
       win = !roof.pilih ? roof.p2 : roof.p
       sock.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
    }
    delete this.suit[roof.id]
    return !0
    }, roof.timeout)
    }
       let jwb = m.sender == roof.p
       let jwb2 = m.sender == roof.p2
       let g = /gunting/i
       let b = /batu/i
       let k = /kertas/i
       let reg = /^(gunting|batu|kertas)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
       roof.pilih = reg.exec(m.text.toLowerCase())[0]
       roof.text = m.text
       m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
    if (!roof.pilih2) sock.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
       roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
       roof.text2 = m.text
       m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
    if (!roof.pilih) sock.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
    }
       let stage = roof.pilih
       let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih)
    if (b.test(stage) && g.test(stage2)) win = roof.p
    else if (b.test(stage) && k.test(stage2)) win = roof.p2
    else if (g.test(stage) && k.test(stage2)) win = roof.p
    else if (g.test(stage) && b.test(stage2)) win = roof.p2
    else if (k.test(stage) && b.test(stage2)) win = roof.p
    else if (k.test(stage) && g.test(stage2)) win = roof.p2
    else if (stage == stage2) tie = true
       sock.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}`.trim(), m, { mentions: [roof.p, roof.p2] })
       delete this.suit[roof.id]
    }
    }

    // Math
    if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
       kuis = true
       jawaban = kuismath[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
       await m.reply(`???? Kuis Matematika  ????\n\nJawaban Benar ????\n\nIngin bermain lagi? kirim ${prefix}math mode`)
       delete kuismath[m.sender.split('@')[0]]
       } else m.reply('*Jawaban Salah!*')
    }

    //TicTacToe
       this.game = this.game ? this.game : {}
       let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
       let ok
       let isWin = !1
       let isTie = !1
       let isSurrender = !1
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
       isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) {
    if (!isSurrender) return !0
    }
       if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
       m.reply({'-3': 'Game telah berakhir','-2': 'Invalid','-1': 'Posisi Invalid',0: 'Posisi Invalid',}[ok])
    return !0
    }
    if (m.sender === room.game.winner) isWin = true
    else if (room.game.board === 511) isTie = true
       let arr = room.game.render().map(v => {
    return {
    X: '???',
    O: '???',
    1: '1??????',
    2: '2??????',
    3: '3??????',
    4: '4??????',
    5: '5??????',
    6: '6??????',
    7: '7??????',
    8: '8??????',
    9: '9??????',
    }[v]
    })
    if (isSurrender) {
       room.game._currentTurn = m.sender === room.game.playerX
       isWin = true
    }
       let winner = isSurrender ? room.game.currentTurn : room.game.winner
       let str = `     ??? Tictactoe Game ???
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['???', '???'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
???: @${room.game.playerX.split('@')[0]}
???: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
       room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
    if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
       await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
    if (isTie || isWin) {
       delete this.game[room.id]
    }
    }

    // Respon Cmd with media
    if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
       let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
       let { text, mentionedJid } = hash
       let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
       userJid: sock.user.id,
       quoted: m.quoted && m.quoted.fakeObj
    })
       messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id)
       messages.key.id = m.key.id
       messages.pushName = m.pushName
    if (m.isGroup) messages.participant = m.sender
       let msg = {
       ...chatUpdate,
       messages: [proto.WebMessageInfo.fromObject(messages)],
       type: 'append'
       }
    sock.ev.emit('messages.upsert', msg)
    }
    
    rfx = ['application/pdf','application/docx','application/pptx','application/xlsx']
    rfile = rfx[Math.floor(Math.random() * rfx.length)]
    
    const listmn = `?????? *Info Bot* ???
??? Name : RoF3X-Bot
??? Owner : ${owner.length}
??? User : ${rkyt.length}
??? Library : Baileys-MD
??? Language : JavaScript
??? Platform : Termux

?????? *Info Group* ???
??? Antilink : ${AntiLink? "on" : "off"}
??? Autorevoke : ${GcRvk? "on" : "off"}
??? Welcome : ${welcm? "on" : "off"}

?????? *Downloader* ???
??? ${prefix}instagram
??? ${prefix}tiktok
??? ${prefix}twitter
??? ${prefix}facebook
??? ${prefix}youtube
??? ${prefix}igstory
??? ${prefix}jpeg
??? ${prefix}mp4

?????? *Searching* ???
??? ${prefix}gimage
??? ${prefix}ytsearch
??? ${prefix}searchgc
??? ${prefix}play
??? ${prefix}happymod
??? ${prefix}servermc
??? ${prefix}mcpedl
??? ${prefix}google
??? ${prefix}pinterest

?????? *Converter* ???
??? ${prefix}sticker
??? ${prefix}smeme
??? ${prefix}stickerwm
??? ${prefix}emoji
??? ${prefix}emojimix
??? ${prefix}tomp3
??? ${prefix}tovn
??? ${prefix}toaudio
??? ${prefix}togif
??? ${prefix}tourl
??? ${prefix}tomp4
??? ${prefix}toimage

?????? *Tools* ???
??? ${prefix}inspect
??? ${prefix}getname
??? ${prefix}getpic
??? ${prefix}nulis
??? ${prefix}kalkulator
??? ${prefix}quoted
??? ${prefix}join
??? ${prefix}fliptext
??? ${prefix}tohuruf
??? ${prefix}volume
??? ${prefix}bass
??? ${prefix}blown
??? ${prefix}deep
??? ${prefix}earrape
??? ${prefix}fast
??? ${prefix}fat
??? ${prefix}nightcore
??? ${prefix}reverse
??? ${prefix}robot
??? ${prefix}slow
??? ${prefix}tupai
??? ${prefix}translate

?????? *Funny* ???
??? ${prefix}halah
??? ${prefix}hilih
??? ${prefix}huluh
??? ${prefix}heleh
??? ${prefix}holoh
??? ${prefix}math
??? ${prefix}tictactoe
??? ${prefix}delttt
??? ${prefix}tebak
??? ${prefix}family100
??? ${prefix}suitpvp

?????? *Maker* ???
??? ${prefix}3dbox
??? ${prefix}drapwater
??? ${prefix}lion2
??? ${prefix}papercut
??? ${prefix}transformer
??? ${prefix}herryp
??? ${prefix}neondevil
??? ${prefix}3dstone
??? ${prefix}3davengers
??? ${prefix}thunder
??? ${prefix}window
??? ${prefix}graffiti
??? ${prefix}pornhub
??? ${prefix}glitch
??? ${prefix}blackping
??? ${prefix}glitch3
??? ${prefix}glitch2
??? ${prefix}3dspace
??? ${prefix}lion
??? ${prefix}3dneon
??? ${prefix}neon
??? ${prefix}greenneon
??? ${prefix}bokeh
??? ${prefix}hollographic
??? ${prefix}bear
??? ${prefix}wolf
??? ${prefix}joker
??? ${prefix}dropwater
??? ${prefix}neonlight
??? ${prefix}thewall
??? ${prefix}natural
??? ${prefix}carbon
??? ${prefix}pencil
??? ${prefix}blackpink
??? ${prefix}neon
??? ${prefix}greenneon
??? ${prefix}advanceglow
??? ${prefix}futureneon
??? ${prefix}sandwriting
??? ${prefix}sandsummer
??? ${prefix}sandengraved
??? ${prefix}metaldark
??? ${prefix}neonlight
??? ${prefix}holographic
??? ${prefix}text1917
??? ${prefix}minion
??? ${prefix}deluxesilver
??? ${prefix}newyearcard
??? ${prefix}bloodfrosted
??? ${prefix}halloween
??? ${prefix}jokerlogo
??? ${prefix}fireworksparkle
??? ${prefix}natureleaves
??? ${prefix}bokeh
??? ${prefix}toxic
??? ${prefix}strawberry
??? ${prefix}box3d
??? ${prefix}roadwarning
??? ${prefix}breakwall
??? ${prefix}icecold
??? ${prefix}luxury
??? ${prefix}cloud
??? ${prefix}summersand
??? ${prefix}horrorblood
??? ${prefix}thunder
??? ${prefix}pornhub
??? ${prefix}glitch
??? ${prefix}avenger
??? ${prefix}space
??? ${prefix}ninjalogo
??? ${prefix}marvelstudio
??? ${prefix}lionlogo
??? ${prefix}wolflogo
??? ${prefix}steel3d
??? ${prefix}wallgravity

?????? *Other* ???
??? ${prefix}owner
??? ${prefix}listpc
??? ${prefix}listgc
??? ${prefix}mcserver
??? ${prefix}ping
??? ${prefix}afk
??? ${prefix}getscmd
??? ${prefix}delete
??? ${prefix}infochat
??? ${prefix}request
??? ${prefix}report
??? ${prefix}listonline

?????? *Group* ???
??? ${prefix}antilink <on/off>
??? ${prefix}welcome <on/off>
??? ${prefix}autorevoke <on/off>
??? ${prefix}group <open/close>
??? ${prefix}editinfo <open/close>
??? ${prefix}linkgroup
??? ${prefix}setppgc
??? ${prefix}setname
??? ${prefix}setdesc
??? ${prefix}ephemeral
??? ${prefix}hidetag
??? ${prefix}tagall
??? ${prefix}promote
??? ${prefix}demote
??? ${prefix}vote
??? ${prefix}devote
??? ${prefix}upvote
??? ${prefix}cekvote
??? ${prefix}hapusvote
??? ${prefix}add
??? ${prefix}kick
??? ${prefix}revoke

?????? *Storage* ???
??? ${prefix}setcmd
??? ${prefix}listcmd
??? ${prefix}delcmd
??? ${prefix}lockcmd
??? ${prefix}addmsg
??? ${prefix}listmsg
??? ${prefix}getmsg
??? ${prefix}delmsg

?????? *Owner* ???
??? ${prefix}self
??? ${prefix}public
??? ${prefix}bcall
??? ${prefix}bcgroup
??? ${prefix}chat
??? ${prefix}antitag
??? ${prefix}ban <add/del>
??? ${prefix}cowner <add/del>

?????? *Thanks To* ???
??? Allah SWT
??? Ortu
??? Fajri
??? Fadli
??? Fatih
??? Dika Ardnt
??? Nathan
??? XD-T
`

    switch(command) {
    case 'menu': case 'help': {
       if (isBan) return m.reply(mess.ban)
       const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
       templateMessage: {
       hydratedTemplate: {
       hydratedContentText: listmn.trim(),
       locationMessage: {
       jpegThumbnail: thumb },
       hydratedFooterText: '?? FxSx',
       hydratedButtons: [{
       urlButton: {
       displayText: 'Number Owner',
       url: '6283815956151'
       }
       }, {
       quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
       }
       }, {
       quickReplyButton: {
       displayText: 'Whatsapp Owner',
       id: 'owner'
       }  
       }]
       }
       }
       }), { userJid: m.chat, quoted: m })
       sock.relayMessage(m.chat, template.message, { messageId: template.key.id })
       }
    break
    case 'glitch3':
       if(!q) return reply(`Contoh : ${prefix + command} teks|teks`)
	     reply(mess.wait)
	     teks1 = q.split("|")[0]
	     teks2 = q.split("|")[1]
	     maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case '3dbox':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'drapwater':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'lion2':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
       `${q}`,])
       .then((data) => sendFileFromUrl(data, image, {quoted: m, caption: `*Sukses...*`}))
       .catch((err) => console.log(err));
    break
    case 'papercut':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'transformer':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'herryp':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks|teks`)
	     m.reply (mess.wait)
	     teks1 = q.split("|")[0]
	     teks2 = q.split("|")[1]
	     maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sendFileFromUrl(data, image, {quoted: m, caption: `*Sukses...*`}))
       .catch((err) => console.log(err));
    break
    case 'neondevil':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case '3dstone':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case '3davengers':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'thunder':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'window':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'graffiti':
    case 'grafiti':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks|teks`)
	     m.reply (mess.wait)
	     teks1 = q.split("|")[0]
	     teks2 = q.split("|")[1]
	     maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sendFileFromUrl(data, image, {quoted: m, caption: `*Sukses...*`}))
       .catch((err) => console.log(err));
    break
    case 'pornhub':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     teks1 = q.split("|")[0]
	     teks2 = q.split("|")[1]
	     maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sendFileFromUrl(data, image, {quoted: m, caption: `*Sukses...*`}))
       .catch((err) => console.log(err));
    break
    case 'blackping':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'glitch':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
	     m.reply (mess.wait)
	     maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'glitch2':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks|teks`)
	     m.reply (mess.wait)
	     teks1 = q.split("|")[0]
	     teks2 = q.split("|")[1]
	     maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'glitch3':
	     if(!q) return m.reply(`Contoh : ${prefix + command} teks|teks`)
	     m.reply (mess.wait)
	     teks1 = q.split("|")[0]
	     teks2 = q.split("|")[1]
	     maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case '3dspace':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks|teks`)
       m.reply (mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'lion':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks|teks`)
       m.reply (mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case '3dneon':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'neon':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'greenneon':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'bokeh':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'hollographic':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'bear':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'wolf':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
       `${teks1}`,`${teks2}`])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'joker':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'dropwater':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'neonlight':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'thewall':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'natural':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'carbon':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'pencil':
       if(!q) return m.reply(`Contoh : ${prefix + command} teks`)
       m.reply (mess.wait)
       textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
       `${q}`,])
       .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `*Sukses...*` }, { quoted: m }))
       .catch((err) => console.log(err));
    break
    case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
    case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
    case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
    case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
    case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
    case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
    case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
    case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
    case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
    case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
       if (!q) return m.reply(`Contoh : ${prefix + command} teks`) 
       m.reply(mess.wait)
       let link
       if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
       if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
       if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
       if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
       if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
       if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
       if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
       if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
       if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
       if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
       if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
       if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
       if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
       if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
       if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
       if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
       if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
       if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
       if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
       if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
       if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
       if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
       if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
       if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
       if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
       if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
       if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
       if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
       if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
       if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
       if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
       if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
       if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
       if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
       if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
       if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
       if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
       if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
       if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
       if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
       if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
       if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
       if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
       if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
       if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
       if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
       if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
       if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
       if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
       if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
       if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
       if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
       if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
       if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
       if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
       if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
       if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
       let anu = await maker.textpro(link, q)
       sock.sendMessage(m.chat, { image: { url: anu }, caption: `*Sukses...*` }, { quoted: m })
       }
    break
    case 'emojimix': {
       if (!q) throw `Contoh : ${prefix + command} ????+????`
       let [emoji1, emoji2] = q.split`+`
       let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
       for (let res of kuntuh.results) {
       let encmedia = await sock.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
       await fs.unlinkSync(encmedia)
       }
       }
    break
    case 'getcase':
       if (m.isGroup) throw mess.private
       if (!isCreator) return reply(mess.owner)
       const getCase = (cases) => {
       return "case"+`'${cases}'`+fs.readFileSync("worker/command.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
       }
       m.reply(`${getCase(q)}`)
    break
    case 'textmaker': {
       if (isBan) return m.reply(mess.ban)
       if (args.length < 1) return m.reply(`Contoh : ${prefix + command} Teks`)
       if (args[0] === 'glitch') {
       if (args.length < 2) return m.reply(`Contoh : ${prefix + command + ' ' + args[0]} Teks`)
       let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
       sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
       } else if (args[0] === 'glow') {
       if (args.length < 2) return m.reply(`Contoh : ${prefix + command + ' ' + args[0]} Teks`)
       let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
       sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
       } else {
       m.reply(`*List Text Maker :*\n???> glitch\n???> glow`)
       }
       }
    break
    case 'emoji': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply('emojinya?')
       emoji.get(args.join(" ")).then(async(emoji) => {
       let mese = await sock.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
       await sock.sendMessage(from, {text:"s"}, {quoted:mese})
       })
       }
    break
    case 'suitpvp': case 'suit': {
       if (isBan) return m.reply(mess.ban)
       this.suit = this.suit ? this.suit : {}
       let poin = 10
       let poin_lose = 10
       let timeout = 60000
       if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
       if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
       if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
       if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
       let id = 'suit_' + new Date() * 1
       let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
       this.suit[id] = {
       chat: await sock.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
       id: id,
       p: m.sender,
       p2: m.mentionedJid[0],
       status: 'wait',
       waktu: setTimeout(() => {
       if (this.suit[id]) sock.sendText(m.chat, `_Waktu suit habis_`, m)
       delete this.suit[id]
       }, 60000), poin, poin_lose, timeout
       }
       }
    break
    case 'family100': {
       if (isBan) return m.reply(mess.ban)
       if ('family100'+m.chat in _family100) {
       m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
       throw false
       }
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
       let random = anu[Math.floor(Math.random() * anu.length)]
       let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
       _family100['family100'+m.chat] = {
       id: 'family100'+m.chat,
       pesan: await sock.sendText(m.chat, hasil, m),
       ...random,
       terjawab: Array.from(random.jawaban, () => false),
       hadiah: 6,
       }
       }
    break
    case 'tebak': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
       if (args[0] === "lagu") {
       if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
       let result = anu[Math.floor(Math.random() * anu.length)]
       let msg = await sock.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
       sock.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
       tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
       })
       await sleep(60000)
       if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       sock.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "?? FxSx", m)
       delete tebaklagu[m.sender.split('@')[0]]
       }
       } else if (args[0] === 'gambar') {
       if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
       let result = anu[Math.floor(Math.random() * anu.length)]
       sock.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
       tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
       })
       await sleep(60000)
       if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       sock.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,"?? FxSx", m)
       delete tebakgambar[m.sender.split('@')[0]]
       }
       } else if (args[0] === 'kata') {
       if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
       let result = anu[Math.floor(Math.random() * anu.length)]
       sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
       tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
       })
       await sleep(60000)
       if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       sock.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "?? FxSx", m)
       delete tebakkata[m.sender.split('@')[0]]
       }
       } else if (args[0] === 'kalimat') {
       if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
       let result = anu[Math.floor(Math.random() * anu.length)]
       sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
       tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
       })
       await sleep(60000)
       if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       sock.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "?? FxSx", m)
       delete tebakkalimat[m.sender.split('@')[0]]
       }
       } else if (args[0] === 'lirik') {
       if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
       let result = anu[Math.floor(Math.random() * anu.length)]
       sock.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
       tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
       })
       await sleep(60000)
       if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       sock.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "?? FxSx", m)
       delete tebaklirik[m.sender.split('@')[0]]
       }
       } else if (args[0] === 'lontong') {
       if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
       let result = anu[Math.floor(Math.random() * anu.length)]
       sock.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
       caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
       caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
       })
       await sleep(60000)
       if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       sock.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "?? FxSx", m)
       delete caklontong[m.sender.split('@')[0]]
       delete caklontong_desk[m.sender.split('@')[0]]
       }
       }
       }
    break
    case 'ttc': case 'ttt': case 'tictactoe': {
       if (isBan) return m.reply(mess.ban)
       let TicTacToe = require("./lib/tictactoe")
       this.game = this.game ? this.game : {}
       if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
       let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
       if (room) {
       m.reply('Partner ditemukan!')
       room.o = m.chat
       room.game.playerO = m.sender
       room.state = 'PLAYING'
       let arr = room.game.render().map(v => {
       return {
       X: '???',
       O: '???',
       1: '1??????',
       2: '2??????',
       3: '3??????',
       4: '4??????',
       5: '5??????',
       6: '6??????',
       7: '7??????',
       8: '8??????',
       9: '9??????',
       }[v]
       })
       let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
       if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
       await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
       } else {
       room = {
       id: 'tictactoe-' + (+new Date),
       x: m.chat,
       o: '',
       game: new TicTacToe(m.sender, 'o'),
       state: 'WAITING'
       }
       if (args.join(" ")) room.name = args.join(" ")
       m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
       this.game[room.id] = room
       }
       }
    break
    case 'delttc': case 'delttt': {
       if (isBan) return m.reply(mess.ban)
       this.game = this.game ? this.game : {}
       try {
       if (this.game) {
       delete this.game
       sock.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
       } else if (!this.game) {
       m.reply(`Session TicTacToe???? tidak ada`)
       } else throw '?'
       } catch (e) {
       m.reply('rusak')
       }
       }
    break
    case 'kuismath': case 'math': {
       if (isBan) return m.reply(mess.ban)
       if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
       let { genMath, modes } = require('./worker/src/math')
       if (!args.join(" ")) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh : ${prefix}math medium`)
       let result = await genMath(text.toLowerCase())
       sock.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
       kuismath[m.sender.split('@')[0]] = result.jawaban
       })
       await sleep(result.waktu)
       if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
       console.log("Jawaban: " + result.jawaban)
       m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
       delete kuismath[m.sender.split('@')[0]]
       }
       }
    break
    case 'delete': case 'del': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return
       let { chat, fromMe, id, isBaileys } = m.quoted
       if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
       sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
       }
    break
    case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted && !args.join(" ")) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
       ter = command[1].toLowerCase()
       tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
       m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
       }
    break
    case 'vote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
       if (!args.join(" ")) return m.reply(`Masukkan Alasan Melakukan Vote, Contoh : *${prefix + command} Teks*`)
       m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
       vote[m.chat] = [args.join(" "), [], []]
       await sleep(1000)
       upvote = vote[m.chat][1]
       devote = vote[m.chat][2]
       teks_vote = `*??? VOTE ???*

*Alasan:* ${vote[m.chat][0]}

?????? UPVOTE ???
??? 
??? Total: ${vote[m.chat][1].length}
???
??? 
???????????????

?????? DEVOTE ???
??? 
??? Total: ${vote[m.chat][2].length}
???
??? 
???????????????

*${prefix}hapusvote* - untuk menghapus vote`
       let buttonsVote = [
       {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
       {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
       ]

       let buttonMessageVote = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: teks_vote,
       footer: "?? FxSx",
       buttons: buttonsVote,
       headerType: 1
       }
       sock.sendMessage(m.chat, buttonMessageVote)
       }
    break
    case 'upvote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
       isVote = vote[m.chat][1].concat(vote[m.chat][2])
       wasVote = isVote.includes(m.sender)
       if (wasVote) return m.reply('Kamu Sudah Vote')
       vote[m.chat][1].push(m.sender)
       menvote = vote[m.chat][1].concat(vote[m.chat][2])
       teks_vote = `*??? VOTE ???*

*Alasan:* ${vote[m.chat][0]}

?????? UPVOTE ???
??? 
??? Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `??? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

?????? DEVOTE ???
??? 
??? Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `??? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

*${prefix}hapusvote* - untuk menghapus vote`
       let buttonsUpvote = [
       {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
       {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
       ]

       let buttonMessageUpvote = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: teks_vote,
       footer: "?? FxSx",
       buttons: buttonsUpvote,
       headerType: 1,
       mentions: menvote
       }
       sock.sendMessage(m.chat, buttonMessageUpvote)
       }
    break
    case 'devote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
       isVote = vote[m.chat][1].concat(vote[m.chat][2])
       wasVote = isVote.includes(m.sender)
       if (wasVote) return m.reply('Kamu Sudah Vote')
       vote[m.chat][2].push(m.sender)
       menvote = vote[m.chat][1].concat(vote[m.chat][2])
       teks_vote = `*??? VOTE ???*

*Alasan:* ${vote[m.chat][0]}

?????? UPVOTE ???
??? 
??? Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `??? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

?????? DEVOTE ???
??? 
??? Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `??? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

*${prefix}hapusvote* - untuk menghapus vote`
       let buttonsDevote = [
       {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
       {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
       ]

       let buttonMessageDevote = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: teks_vote,
       footer: "?? FxSx",
       buttons: buttonsDevote,
       headerType: 1,
       mentions: menvote
       }
       sock.sendMessage(m.chat, buttonMessageDevote)
       }
    break
    case 'cekvote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
       teks_vote = `*??? VOTE ???*

*Alasan:* ${vote[m.chat][0]}

?????? UPVOTE ???
??? 
??? Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `??? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

?????? DEVOTE ???
??? 
??? Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `??? ${i + 1}. @${v.split`@`[0]}`).join('\n')}
??? 
???????????????

*${prefix}hapusvote* - untuk menghapus vote


??${sock.user.id}
`
       sock.sendTextWithMentions(m.chat, teks_vote, m)
       }
    break
    case 'deletevote': case'delvote': case 'hapusvote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
       delete vote[m.chat]
       m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
       }
    break
    case 'listpc': {
       if (isBan) return m.reply(mess.ban)
       let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
       let teks = `     ??? List Personal Chat ???\n\nThere are ${anu.length} users using bot in personal chat`
       for (let i of anu) {
       teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
       }
       sock.sendTextWithMentions(m.chat, teks, m)
       }
    break
    case 'listgc': {
       if (isBan) return m.reply(mess.ban)
       let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
       let teks = `     ??? List Group Chat ???\n\nThere are ${anu.length} users using bot in group chat`
       for (let i of anu) {
       let metadata = await sock.groupMetadata(i)
       if (metadata.owner === "undefined") {
       loldd = false
       } else {
       loldd = metadata.owner
       }
       teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
       }
       sock.sendTextWithMentions(m.chat, teks, m)
       }
    break
    case 'afk': {
       if (isBan) return m.reply(mess.ban)
       let user = global.db.users[m.sender]
       user.afkTime = + new Date
       user.afkReason = args.join(" ")
       m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
       }
    break
    case 'setcmd': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return m.reply('Reply Pesan!')
       if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
       if (!args.join(" ")) return m.reply(`Untuk Command Apa?`)
       let hash = m.quoted.fileSha256.toString('base64')
       if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
       global.db.sticker[hash] = {
       text,
       mentionedJid: m.mentionedJid,
       creator: m.sender,
       at: + new Date,
       locked: false,
       }
       m.reply(`Done!`)
       }
    break
    case 'delcmd': {
       if (isBan) return m.reply(mess.ban)
       let hash = m.quoted.fileSha256.toString('base64')
       if (!hash) return m.reply(`Tidak ada hash`)
       if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to delete this sticker command')
       delete global.db.sticker[hash]
       m.reply(`Done!`)
       }
    break
    case 'listcmd': {
       if (isBan) return m.reply(mess.ban)
       let teks = `*List Hash*\nInfo: *bold* hash is Locked\n${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
       sock.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
       }
    break
    case 'lockcmd': case 'setcmd': case 'scmd': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       if (!m.quoted) return m.reply('Reply Pesan!')
       if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
       let hash = m.quoted.fileSha256.toString('base64')
       if (!(hash in global.db.sticker)) return m.reply('Hash not found in database')
       global.db.sticker[hash].locked = !/^un/i.test(command)
       m.reply('Done!')
       }
    break
    case 'addmsg': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} nama file`)
       let msgs = global.db.database
       if (text.toLowerCase() in msgs) return m.reply(`'${args.join(" ")}' telah terdaftar di list pesan`)
       msgs[text.toLowerCase()] = quoted.fakeObj
       m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'\nAkses dengan ${prefix}getmsg ${args.join(" ")}\nLihat list Pesan Dengan ${prefix}listmsg`)
       }
    break
    case 'getmsg': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
       let msgs = global.db.database
       if (!(text.toLowerCase() in msgs)) return m.reply(`'${args.join(" ")}' tidak terdaftar di list pesan`)
       sock.copyNForward(m.chat, msgs[text.toLowerCase()], true)
       }
    break
    case 'listmsg': {
       if (isBan) return m.reply(mess.ban)
       let msgs = JSON.parse(fs.readFileSync('./worker/src/database.json'))
       let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
       let teks = '?????? *List Message* ???\n'
       for (let i of seplit) {
       teks += `??? Name : ${i.nama}\n??? Type : ${getContentType(i.message).replace(/Message/i, '')}\n???????????????????????????????????????\n\n`
       }
       m.reply(teks)
       }
    break
    case 'fliptext': {
       if (isBan) return m.reply(mess.ban)
       if (args.length < 1) return m.reply(`Contoh :\n${prefix}fliptext RoF3X`)
       quere = args.join(" ")
       flipe = quere.split('').reverse().join('')
       m.reply(`?????? *Flip Text* ???\n??? Normal : ${quere}\n??? Flip : ${flipe}`)
       }
    break
    case 'tohuruf': {
       if (isBan) return m.reply(mess.ban)
       if (!Number(args[0])) return m.reply(`Contoh : ${prefix}tohuruf 456`)
       try {
       quere = args.join(" ")
       convertes = await toHur(quere)
       m.reply(`?????? *Alphabet* ???\n??? Number : ${quere}\n??? Alphabet : ${convertes}`)
       } catch {
       m.reply(mess.error)
       }
       }
    break
    case 'welcome': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (args.length < 1) return m.reply(`Contoh : ${prefix + command} on/off`)
       if (args[0] === "on") {
       if (welcm) return m.reply('Sudah On')
       wlcm.push(from)
       m.reply(mess.sukses)
       } else if (args[0] === "off") {
       if (!welcm) return m.reply('Sudah Off')
       let off = wlcm.indexOf(from)
       wlcm.splice(off, 1)
       m.reply(mess.sukses)
       } else {
       m.reply(`Contoh : ${prefix + command} on/off`)
       }
       }
    break
    case 'autorevoke': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (args.length < 1) return m.reply(`Contoh : ${prefix + command} on/off`)
       if (args[0] === "on") {
       if (GcRvk) return m.reply('Sudah On')
       gcrevoke.push(from)
       m.reply(mess.sukses)
       } else if (args[0] === "off") {
       if (!GcRvk) return m.reply('Sudah Off')
       let off = wlcm.indexOf(from)
       gcrevoke.splice(off, 1)
       m.reply(mess.sukses)
       } else {
       m.reply(`Contoh : ${prefix + command} on/off`)
       }
       }
    break
    case 'antilink': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (args.length < 1) return m.reply(`Contoh : ${prefix + command} on/off`)
       if (args[0] === "on") {
       if (AntiLink) return m.reply('Sudah On')
       ntilink.push(from)
       m.reply(mess.sukses)
       var groupe = await sock.groupMetadata(from)
       var members = groupe['participants']
       var mems = []
       members.map(async adm => {
       mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
       })
       sock.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
       } else if (args[0] === "off") {
       if (!AntiLink) return m.reply('Sudah Off')
       let off = ntilink.indexOf(from)
       ntilink.splice(off, 1)
       m.reply(mess.sukses)
       } else {
       m.reply(`Contoh : ${prefix + command} on/off`)
       }
       }
    break
    case 'listonline': case 'listaktif': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
       let online = [...Object.keys(store.presences[id]), botNumber]
       let liston = 1
       sock.sendText(m.chat, '??? List Online ???\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
       }
    break
    case 'chat': {
       if (!isCreator) return m.reply(mess.owner)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} 62838xxxx|P`)
       const cpes = args.join(" ")
       const nony = cpes.split("|")[0];
       const pesny = cpes.split("|")[1];
       lolh = `?????? *Fitur Chat* ???\nNomor : @${m.sender.split("@")[0]}\nPesan : ${pesny}`
       sock.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
       }
       await m.reply(mess.sukses)
    break
    case 'cowner': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} add/del`)
       if (args[1]) {
       orgnye = args[1]
       } else if (m.quoted) {
       orgnye = m.quoted.sender.split("@")[0]
       }
       const isCwner = owner.includes(orgnye)
       if (args[0] === "add") {
       if (isCwner) return m.reply('User sudah menjadi owner')
       owner.push(orgnye)
       m.reply(mess.sukses)
       } else if (args[0] === "del") {
       if (!isCwner) return m.reply('User bukan owner')
       let delcwner = owner.indexOf(orgnye)
       owner.splice(delcwner, 1)
       m.reply(mess.sukses)
       } else {
       m.reply(mess.error)
       }
       }
    break
    case 'ban': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} add/del`)
       if (args[1]) {
       orgnye = args[1] + "@s.whatsapp.net"
       } else if (m.quoted) {
       orgnye = m.quoted.sender
       }
       const isBane = banUser.includes(orgnye)
       if (args[0] === "add") {
       if (isBane) return m.reply('User sudah dibanned')
       banUser.push(orgnye)
       m.reply(`Succes ban`)
       } else if (args[0] === "del") {
       if (!isBane) return m.reply('User tidak dibanned')
       let delbans = banUser.indexOf(orgnye)
       banUser.splice(delbans, 1)
       m.reply(`Succes delban`)
       } else {
       m.reply(mess.error)
       }
       }
    break
    case 'request': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Tambahin Fitur Wibu Dong`)
       teks = `?????? *Request Fitur* ???\n`
       teks1 = `??? Nomor : @${m.sender.split("@")[0]}\n??? Request : ${args.join(" ")}\n`
       teks2 = `??? Succes send to owner`
       for (let i of owner) {
       sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
       }
       sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
       }
    break
    case 'report': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Fitur IG Error`)
       teks = `?????? *Report Fitur* ???\n`
       teks1 = `??? Nomor : @${m.sender.split("@")[0]}\n??? Report : ${args.join(" ")}\n`
       teks2 = `??? Succes send to owner`
       for (let i of owner) {
       sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
       }
       sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
       }
    break
    case 'mcserver': case 'mcquery': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} ip|port`)
       const Query = require("minecraft-query");
       const qury = args.join(" ")
       const iphost = qury.split("|")[0];
       const portnya = qury.split("|")[1];
       if (!iphost) return m.reply("ipnya mana kak?")
       if (!portnya) return m.reply("portnya mana kak?")
       const q = new Query({host: iphost, port: portnya, timeout: 7500});
       q.fullStat()
       .then(sukses => {
       m.reply(jsonformat(sukses));
       return q.basicStat()
       })
       .then(sukses => {
       m.reply(jsonformat(sukses));
       q.close();
       })
       }
    break
    case 'mcpedl': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} shader`)
       yogipw.mcpedl(args.join(" ")).then(async(res) => {
       teks = `?????? *Search McPedl* ???\n`
       for (let i of res) {
       teks += `??? Name : ${i.name}\n??? Category : ${i.category}\n??? Date : ${i.date}\n??? Desc : ${i.desc}\n??? Link : ${i.link}`
       }
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: teks,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       })
       }
    break
    case 'happymod': case 'heppymod': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} mobile legend`)
       yogipw.happymod(args.join(" ")).then(async(res) => {
       teks = '?????? *Happy Mod* ???\n'
       for (let i of res) {
       teks += `??? Nama : ${i.name}\n??? Link : ${i.link}`
       }
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       image: {url:res[0].icon},
       jpegThumbnail: thumb,
       caption: teks,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       })
       }
    break
    case 'searchgc': case 'carigc': {
       if (isBan) return m.reply(mess.ban)
       if (args.length < 1) return m.reply(`Contoh : ${prefix}searchgc Tehyung Plastik`)
       nae = args.join(" ")
       hx.linkwa(nae).then(res => {
       teks = '?????? *Search Group* ???\n'
       for (let i of res) {
       teks += `??? Nama : ${i.nama}\n??? Link : ${i.link}`
       }
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: teks,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       })
       }
    break
    case 'servermc': {
       if (isBan) return m.reply(mess.ban)
       yogipw.servermc().then(async(res) => {
       let teks = '?????? *Server Mc Indonesia* ???\n'
       let no = 1
       for (let i of res) {
       teks += `??? Server Ke ${no++}\n??? Ip : ${i.ip}\n??? Port : ${i.port}\n??? Versi : ${i.versi}\n??? Player : ${i.player}`
       }
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: teks,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       })
       }
    break
    case 'antitag': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return
       if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
       if (args[0] === 'on') {
       if (antitags === true) return
       global.antitags = true
       m.reply(mess.sukses)
       } else if (args[0] === 'off') {
       if (antitags === false) return
       global.antitags = false
       m.reply(mess.sukses)
       } else {
       m.reply('Pilih on atau off')
       }
       }
    break
    case 'yts': case 'ytsearch': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} dj 30 detik`)
       let yts = require("yt-search")
       let search = await yts(args.join(" "))
       let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
       let no = 1
       for (let i of search.all) {
       teks += `??? No : ${no++}\n??? Type : ${i.type}\n??? Video ID : ${i.videoId}\n??? Title : ${i.title}\n??? Views : ${i.views}\n??? Duration : ${i.timestamp}\n??? Upload At : ${i.ago}\n??? Author : ${i.author.name}\n??? Url : ${i.url}\n\n???????????????????????????????????????????????????\n\n`
       }
       sock.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
       }
    break
    case 'infochat': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) m.reply('Reply Pesan')
       let msg = await m.getQuotedObj()
       if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
       let teks = ''
       for (let i of msg.userReceipt) {
       let read = i.readTimestamp
       let unread = i.receiptTimestamp
       let waktu = read ? read : unread
       teks += `??? @${i.userJid.split('@')[0]}\n`
       teks += ` ????????? *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ??? *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
       }
       sock.sendTextWithMentions(m.chat, teks, m)
       }
    break
    case 'setname': case 'setsubject': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (!text) return m.reply('Text ?')
       await sock.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
       }
    break
    case 'setdesc': case 'setdesk': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (!text) return m.reply('Text ?')
       await sock.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
       }
    break
    case 'setppbot': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
       if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
       if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
       m.reply(mess.sukses)
       }
    break
    case 'setppgroup': case 'setppgrup': case 'setppgc': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
       if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
       if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       await sock.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
       m.reply(mess.sukses)
       }
    break
    case 'tagall': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       let teks = `?????? *Tagall Member* ???\n??? *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n`
       for (let mem of participants) {
       teks += `??? @${mem.id.split('@')[0]}\n`
       }
       sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
       }
    break
    case 'hidetag': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       sock.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
       }
    break
    case 'linkgroup': case 'linkgc': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       let response = await sock.groupInviteCode(m.chat)
       sock.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
       mimetype: "image/jpeg",
       text: "RoF3X-BoT",
       "forwardingScore": 1000000000,
       isForwarded: true,
       sendEphemeral: true,
       "externalAdReply": {
       "title": `RoF3X-BoT`,
       "body": `?? FxSx`,
       "previewType": "PHOTO",
       "thumbnailUrl": thumb,
       "thumbnail": thumb,
       "sourceUrl": "https://youtu.be/TmX43Io_v8s"
       }}}, { quoted: m, detectLink: true })
       }
    break
    case 'revoke': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       sock.groupRevokeInvite(m.chat)
       }
    break
    case 'ephemeral': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (!args[0]) return m.reply('Masukkan value enable/disable')
       if (args[0] === 'enable') {
       await sock.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       } else if (args[0] === 'disable') {
       await sock.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       }
       }
    break
    case 'editinfo': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (args[0] === 'open'){
       await sock.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
       } else if (args[0] === 'close'){
       await sock.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
       } else {
       let buttons = [
       { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
       { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
       ]
       let buttonMessage = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: `*Edit Info Open or Close*`,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
       }
    break
    case 'group': case 'grup': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       if (args[0] === 'close'){
       await sock.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
       } else if (args[0] === 'open'){
       await sock.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
       } else {
       let buttons = [
       { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
       { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
       ]
       let buttonMessage = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: `*Groups Setting Open or Close*`,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
       }
    break
    case 'promote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
       await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       }
    break
       case 'demote': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
       await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       }
    break
    case 'kick': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
       await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       }
    break
    case 'add': {
       if (isBan) return m.reply(mess.ban)
       if (!m.isGroup) return m.reply(mess.group)
       if (!isBotAdmins) return m.reply(mess.botAdmin)
       if (!isAdmins && !isCreator) return m.reply(mess.admin)
       let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
       await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       }
    break
    case 'bcgc': case 'bcgroup': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Teks`)
       let getGroups = await sock.groupFetchAllParticipating()
       let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
       let anu = groups.map(v => v.id)
       m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
       for (let i of anu) {
       await sleep(1500)
       let btn = [{
       urlButton: {
       displayText: 'Number Owner',
       url: '6283815956151'
       }
       }, {
       quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
       }
       }, {
       quickReplyButton: {
       displayText: 'Contact Owner',
       id: 'owner'
       }  
       }]
       let txt = `?????? *Broadcast* ???\n??? ${text}`
       sock.send5ButImg(i, txt, "?? FxSx", thumb, btn, thumb)
       }
       m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
       }
    break
    case 'bc': case 'broadcast': case 'bcall': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Teks`)
       let anu = await store.chats.all().map(v => v.id)
       m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
       for (let yoi of anu) {
       await sleep(1500)
       let btn = [{
       urlButton: {
       displayText: 'Number Owner',
       url: '6283815956151'
       }
       }, {
       quickReplyButton: {
       displayText: 'Status Bot',
       id: 'ping'
       }
       }, {
       quickReplyButton: {
       displayText: 'Contact Owner',
       id: 'owner'
       }  
       }]
       let txt = `?????? *Broadcast* ???\n??? ${text}`
       sock.send5ButImg(yoi, txt, "?? FxSx", thumb, btn, thumb)
       }
       m.reply(mess.sukses)
       }
    break
    case 'rof3x': {
       tekss = `?????? *Info Bot* ???\n??? Name : RoF3X-BoT [MD]\n??? Author : FxSx\n??? Library : Baileys [MD]\n??? Language : JavaScript
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       document: thumb,
       fileName: 'RoF3X-BoT',
       mimetype: rfile,
       fileLength: 99999999,
       jpegThumbnail: thumb,
       caption: tekss,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       contextInfo:{externalAdReply:{
       title: "RoF3X-BoT",
       body: "?? FxSx", 
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: linkgc,
       sourceUrl: linkgc
       }}
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
    break
    case 'inspect': {
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} Link Grup`)
       let linkRegex = args.join(" ")
       let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
       if (!coded) return m.reply("Link Invalid")
       sock.query({
       tag: "iq",
       attrs: {
       type: "get",
       xmlns: "w:g2",
       to: "@g.us"
       },
       content: [{ tag: "invite", attrs: { code: coded } }]
       }).then(async(res) => { 
       tekse = `?????? *Group Link Inspector* ???\n??? ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}\n??? Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}\n??? Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}\n??? Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}\n??? Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}\n??? Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}\n??? Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members\n??? Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}\n??? Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}\n??? Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}\n??? Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}`
       try {
       pp = await sock.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
       } catch {
       pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
       }
       sock.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await sock.parseMention(tekse) })
       })
       }
    break
    case 'join': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply("Linknya mana kak?")
       vdd = args[0]
       let vcc = vdd.split("https://chat.whatsapp.com/")[1]
       if (!vcc) return m.reply("Link invalid!")
       if (isCreator) {
       await sock.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
       m.reply("Succes")
       } else {
       sock.query({
       tag: "iq",
       attrs: {
       type: "get",
       xmlns: "w:g2",
       to: "@g.us"
       },
       content: [{ tag: "invite", attrs: { code: vcc } }]
       }).then(async(res) => {
       sizny = res.content[0].attrs.size
       if (sizny < 50) {
       teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
       sendOrder(m.chat, teks, "667140254502463", thumb, 2022, "RoF3X-BoT", "6283815956151@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
       } else if (sizny > 50) {
       await sock.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
       m.reply("Succes")
       } else {
       m.reply(mess.error)
       }
       }).catch(_ => _)
       }
       }
    break
    case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
       try {
       let set
       if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
       if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
       if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
       if (/earrape/.test(command)) set = '-af volume=12'
       if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
       if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
       if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
       if (/reverse/.test(command)) set = '-filter_complex "areverse"'
       if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
       if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
       if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
       if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
       if (/audio/.test(mime)) {
       m.reply(mess.wait)
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       let ran = getRandom('.mp3')
       exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
       fs.unlinkSync(media)
       if (err) return m.reply(err)
       let buff = fs.readFileSync(ran)
       sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
       fs.unlinkSync(ran)
       })
       } else m.reply(`Contoh : Reply Audio/Vn Dengan Caption ${prefix + command}`)
       } catch (e) {
       m.reply(e)
       }
    break
    case 'nulis': {
       if (isBan) return m.reply(mess.ban)
       if (args.length < 1) return m.reply(`Contoh : ${prefix}nulis Nama|Kelas|Warna Teks Pake (#)|Teks`)
       const nls = args.join(" ")
       const nams = "Nama : " + nls.split("|")[0];
       const kels = "Kelas : " + nls.split("|")[1];
       const menlise = nls.split("|")[3];
       const codewarn = nls.split("|")[2];
       await m.reply(mess.wait)
       const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
       const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
       const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
       const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
       if (kels.length > 12) return m.reply("Jumlah teks kelas maximal 4")
       if (nams.length > 34) return m.reply("Jumlah teks nama maximal 27")
       if (codewarn.length > 7) return m.reply("Jumlah teks warna maximal 7")
       console.log('Menulis Diproses')
       spawn('convert', [
       './media/image/magernulis.jpg',
       '-fill',
       codewarn,
       '-font',
       './media/font/nulis.ttf',
       '-size',
       '1024x784',
       '-pointsize',
       '20',
       '-interline-spacing',
       '1',
       '-annotate',
       '+806+78',
       janghar,
       '-size',
       '1024x784',
       '-pointsize',
       '18',
       '-interline-spacing',
       '1',
       '-annotate',
       '+806+102',
       jangwak,
       '-size',
       '1024x784',
       '-pointsize',
       '21',
       '-interline-spacing',
       '1',
       '-annotate',
       '+285+90',
       jangnam,
       '-size',
       '1024x784',
       '-pointsize',
       '21',
       '-interline-spacing',
       '1',
       '-annotate',
       '+285+110',
       jangkel,
       '-size',
       '1024x784',
       '-pointsize',
       '20',
       '-interline-spacing',
       '-7.5',
       '-annotate',
       '+344+146',
       jangbare,
       './storage/hasilnulis.jpg'
       ])
       .on('error', () => m.reply(mess.error))
       .on('exit', () => {
       sock.sendMessage(from, {image:fs.readFileSync('./worker/storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => m.reply(mess.error))
       })
       exec(`npm i marker`)
       }
    break
    case 'kalkulator': case 'kal': {
       if (isBan) return m.reply(mess.ban)
       if (args.length < 1) return m.reply(`Contoh : ${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\nKali : *\nBagi : /\nTambah : +\nKurang : -`)
       let qsd = args.join(" ")
       if (typeof mathjs.evaluate(qsd) !== 'number') {
       m.reply('Error!')
       } else {
       m.reply(`?????? *Kalkulator* ???\n??? Hitung : ${qsd}\n??? Hasil : ${mathjs.evaluate(qsd.replace(/??/g, "*").replace(/x/g, "*").replace(/??/g, "/"))}`)
       }
       }
    break
    case 'public': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       sock.public = true
       m.reply('Public : Aktif')
       sock.setStatus(`Mode : Public`)
       }
    break
    case 'self': {
       if (isBan) return m.reply(mess.ban)
       if (!isCreator) return m.reply(mess.owner)
       sock.public = false
       m.reply('Self : Aktif')
       sock.setStatus(`Mode : Self`)
       }
    break
    case 'ping': case 'botstatus': case 'statusbot': {
       if (isBan) return m.reply(mess.ban)
       const used = process.memoryUsage()
       const cpus = os.cpus().map(cpu => {
       cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
       return cpu
       })
       const cpu = cpus.reduce((last, cpu, _, { length }) => {
       last.total += cpu.total
       last.speed += cpu.speed / length
       last.times.user += cpu.times.user
       last.times.nice += cpu.times.nice
       last.times.sys += cpu.times.sys
       last.times.idle += cpu.times.idle
       last.times.irq += cpu.times.irq
       return last
       }, {
       speed: 0,
       total: 0,
       times: {
       user: 0,
       nice: 0,
       sys: 0,
       idle: 0,
       irq: 0
       }
       })
       let timestamp = speed()
       let latensi = speed() - timestamp
       neww = performance.now()
       oldd = performance.now()
       respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

???? Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
       m.reply(respon)
       }
    break
    case 'toimage': case 'toimg': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return m.reply('Reply Sticker')
       if (!/webp/.test(mime)) return m.reply(`Contoh : Reply Sticker Dengan Caption ${prefix + command}`)
       m.reply(mess.wait)
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       let ran = await getRandom('.png')
       exec(`ffmpeg -i ${media} ${ran}`, (err) => {
       fs.unlinkSync(media)
       if (err) throw err
       let buffer = fs.readFileSync(ran)
       sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
       fs.unlinkSync(ran)
       })
       }
    break
    case 'tomp4': case 'tovideo': case 'tovid': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return m.reply('Reply Sticker Gif')
       if (!/webp/.test(mime)) return m.reply(`Contoh : Reply Sticker Gif Dengan Caption ${prefix + command}`)
       m.reply(mess.wait)
       let { webp2mp4File } = require('./lib/uploader')
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       let webpToMp4 = await webp2mp4File(media)
       await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
       await fs.unlinkSync(media)
       }
    break
    case 'toaud': case 'toaudio': {
       if (isBan) return m.reply(mess.ban)
       if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Contoh : Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
       if (!m.quoted) return m.reply(`Contoh : Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
       m.reply(mess.wait)
       let media = await quoted.download()
       let { toAudio } = require('./lib/converter')
       let audio = await toAudio(media, 'mp4')
       sock.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
       }
    break
    case 'tomp3': {
       if (isBan) return m.reply(mess.ban)
       if (/document/.test(mime)) return m.reply(`Contoh : Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
       if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Contoh : Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
       if (!m.quoted) return m.reply(`Contoh : Kirim/Reply Video/Audio Dengan Caption ${prefix + command}`)
       m.reply(mess.wait)
       let media = await quoted.download()
       let { toAudio } = require('./lib/converter')
       let audio = await toAudio(media, 'mp4')
       sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name} (${m.id}).mp3`}, { quoted : m })
       }
    break
    case 'tovn': case 'toptt': {
       if (isBan) return m.reply(mess.ban)
       if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Contoh : Reply Video/Audio Dengan Caption ${prefix + command}`)
       if (!m.quoted) return m.reply(`Contoh : Reply Video/Audio Dengan Caption ${prefix + command}`)
       m.reply(mess.wait)
       let media = await quoted.download()
       let { toPTT } = require('./lib/converter')
       let audio = await toPTT(media, 'mp4')
       sock.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
       }
    break
    case 'togif': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return m.reply('Reply Stiker Gif')
       if (!/webp/.test(mime)) return m.reply(`Contoh : Reply Sticker Gif Dengan Caption ${prefix + command}`)
       m.reply(mess.wait)
       let { webp2mp4File } = require('./lib/uploader')
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       let webpToMp4 = await webp2mp4File(media)
       await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Sticker Gif Ke Video' }, gifPlayback: true }, { quoted: m })
       await fs.unlinkSync(media)
       }
    break
    case 'tourl': {
       if (isBan) return m.reply(mess.ban)
       m.reply(mess.wait)
       let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
       let media = await sock.downloadAndSaveMediaMessage(quoted)
       if (/image/.test(mime)) {
       let anu = await TelegraPh(media)
       m.reply(util.format(anu))
       } else if (!/image/.test(mime)) {
       let anu = await UploadFileUgu(media)
       m.reply(util.format(anu))
       }
       await fs.unlinkSync(media)
       }
    break
    case 'q': case 'quoted': {
       if (isBan) return m.reply(mess.ban)
       if (!m.quoted) return m.reply('Reply Pesannya!!')
       let wokwol = await sock.serializeM(await m.getQuotedObj())
       if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
       await wokwol.quoted.copyNForward(m.chat, true)
       }
    break
    case 'getname': {
       if (isBan) return m.reply(mess.ban)
       if (qtod === "true") {
       namenye = await sock.getName(m.quoted.sender)
       m.reply(namenye)
       } else if (qtod === "false") {
       sock.sendMessage(from, {text: "Reply orangnya"}, {quoted:m})
       }
       }
    break
    case 'getpic': {
       if (isBan) return m.reply(mess.ban)
       if (qtod === "true") {
       try {
       pporg = await sock.profilePictureUrl(m.quoted.sender, 'image')
       } catch {
       pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
       }
       sock.sendMessage(m.chat, { image : { url : pporg }, caption: `Done` }, { quoted : m })
       } else if (qtod === "false") {
       try {
       pporgs = await sock.profilePictureUrl(from, 'image')
       } catch {
       pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
       }
       sock.sendMessage(m.chat, { image : { url : pporgs }, caption: `Done` }, { quoted : m })
       }
       }
    break
    case 'owner': case 'creator': {
       sock.sendContact(m.chat, global.owner, m)
       }
    break
    case 'translate': case 'terjemahan': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Teks`)
       tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
       Infoo = tes.info
       Detek = tes.translate
       m.reply(`?????? *Google Translate* ???\n??? Translate : ${Detek}\n??? Hasil : ${Infoo}`)
       }
    break
    case 'gimage': case 'gig': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} Teks`)
       let gis = require('g-i-s')
       gis(args.join(" "), async (error, result) => {
       n = result
       images = n[Math.floor(Math.random() * n.length)].url
       let buttons = [
       {buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
       ]
       let buttonMessage = {
       image: { url: images },
       caption: `?????? *Google Image* ???\n??? Query : ${text}\n??? Media Url : ${images}`,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title:"RoF3X-BoT",
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: linkgc,
       sourceUrl: linkgc
       }}
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       })
       }
    break
    case 'google': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(`Contoh: ${prefix + command} Teks`)
       let google = require('google-it')
       google({'query': args.join(" ")}).then(res => {
       let teks = `??? Google Search From : ${text}\n`
       for (let g of res) {
       teks += `??? Title : ${g.title}\n`
       teks += `??? Description : ${g.snippet}\n`
       teks += `??? Link : ${g.link}\n?????????????????????????????????????????????\n`
       } 
       m.reply(teks)
       })
       }
    break
    case 'pinterest': case 'image': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Teks`)
       try {
       hx.pinterest(args.join(" ")).then(async(res) => {
       imgnyee = res[Math.floor(Math.random() * res.length)]
       let buttons = [
       {buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
       ]
       let buttonMessage = {
       image: { url: imgnyee },
       caption:  '?????? *Pinterest* ???\n??? Title : ' + args.join(" ") + '\n??? Media Url : '+imgnyee,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title: "RoF3X-BoT",
       body: "?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: linkgc,
       sourceUrl: linkgc
       }}
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       }).catch(_ => _)
       } catch {
       m.reply(mess.error)
       }
       }
    break
    case 'igstory': case 'instagramstory': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} Teks`)
       try {
       hx.igstory(args[0]).then(async(resed) => {
       ini_anu = []
       anu_list = []
       textbv = `?????? *Instagram Story* ???\n??? Username : ${resed.user.username ? resed.user.name : "undefined"}\n??? Followers : ${resed.user.followers}`
       urut = 1
       for (let i = 0; i < resed.medias.length; i++) {
       ini_anu.push({
       "type": resed.medias[i].fileType,
       "url": resed.medias[i].url
       })
       }
       ilod = 1
       for (let i of ini_anu) {
       anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
       }
       let buttons = anu_list
       let buttonMessage = {
       image: thumb,
       jpegThumbnail: thumb,
       caption: textbv,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       })
       } catch (err) {
       m.reply(String(err))
       }
       }
    break
    case 'igdl': case 'instagram': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} Url`)
       try {
       hx.igdl(args[0]).then(async(resed) => {
       ini_anu = []
       anu_list = []
       textbv = `?????? *Instagram Downloader* ???\n??? Username : ${resed.user.username ? resed.user.name : "undefined"}\n??? Followers : ${resed.user.followers}`
       urut = 1
       for (let i = 0; i < resed.medias.length; i++) {
       ini_anu.push({
       "type": resed.medias[i].fileType,
       "url": resed.medias[i].url
       })
       }
       ilod = 1
       for (let i of ini_anu) {
       anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
       }
       let buttons = anu_list
       let buttonMessage = {
       image: thumb,
       jpegThumbnail:thumb,
       caption: textbv,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       })
       } catch (err) {
       m.reply(String(err))
       }
       }
    break
    case 'ig': {
       if (args[0] === "mp4") {
       sock.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
       } else if (args[0] === "jpg") {
       sock.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
       } else {
       m.reply("Error!")
       }
       }
    break
    case 'mp4' : {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply("Linknya mana kak?")
       try {
       sock.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
       title:"RoF3X-BoT",
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}}, {quoted:m})
       } catch {
       m.reply("Linknya Error!")
       }
       }
    break
    case 'jpeg': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply("Linknya mana kak?")
       try {
       sock.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
       title: "RoF3X-BoT",
       body: "?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}}, {quoted:m})
       } catch {
       m.reply("Linknya Error!")
       }
       }
    break
    case 'twitter': case 'twdl': case 'twmp4': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} Url`)
       try {
       let lotwit = await aiovideodl(args[0])
       teks = `?????? *Twitter Downloader* ???\n??? Caption : ${lotwit.title ? lotwit.title : "undefined"}\n??? Type : ${lotwit.medias[1].extension}\n??? Size : ${lotwit.medias[1].formattedSize}\n??? Link : ${lotwit.medias[1].url}`
       let buttons = [
       {buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
       {buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
       ]
       let buttonMessage = {
       video: {url:lotwit.medias[1].url},
       caption: teks,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title: lotwit.title ? lotwit.title : "Twitter Downloader",
       body: "?? FxSx",
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       } catch {
       m.reply("Linknya Error!")
       }
       }
    break
    case 'twddl': {
       if (isBan) return m.reply(mess.ban)
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       video: {url:args[0]},
       caption: "Done!",
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title: "Twitter Downloader",
       body: "?? FxSx,
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       }
    break
    case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(`Contoh : ${prefix + command} Url`)
       try {
       let resd = await aiovideodl(args[0])
       teks = `?????? *Facebook Downloader* ???\n??? Type : video/${resd.medias[0].extension}\n??? Quality : ${resd.medias[0].quality}\n??? Size : ${resd.medias[0].formattedSize}`
       let buttons = [
       {buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'Quality HD'}, type: 1}
       ]
       let buttonMessage = {
       video: {url:resd.medias[0].url},
       caption: teks,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title:"Facebook Downloader",
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       } catch {
       m.reply("Link invalid!")
       }
       }
    break
    case 'fbddl': {
       if (isBan) return m.reply(mess.ban)
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       video: {url:args[0]},
       caption: "Done!",
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title:"Facebook Downloader",
       body: "?? FxSx",
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       }
    break
    case 'ttdl': case 'tiktok': case 'ttmp4': case 'ttmp3': case 'tiktoknowm': {
       if (isBan) return m.reply(mess.ban)
       if (!isUrl(args[0])) return m.reply(`Contoh : ${prefix + command} Url`)
       let res = await aiovideodl(args[0])
       if (isUrl(args[0])) {
       texttk = `?????? *Tiktok Downloader* ???\n??? Caption : ${res.title}\n??? Size : ${res.medias[1].formattedSize}\n??? Type : ${res.medias[1].extension ? "video/" + res.medias[1].extension : "undefined"}`
       let buttons = [
       {buttonId: `ttvd ${args[0]}}`, buttonText: {displayText: 'Watermak'}, type: 1},
       {buttonId: `ttad ${args[0]}`, buttonText: {displayText: 'Audio'}, type: 1}
       ]
       let buttonMessage = {
       video: {url:res.medias[1].url},
       caption: texttk,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title:res.title,
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       } else {
       m.reply("Linknya Error!")
       }
       }
    break
    case 'ttad': {
       if (isBan) return m.reply(mess.ban)
       let res = await aiovideodl(args[0])
       sock.sendMessage(from, {audio:{url:res.medias[2].url}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
       title:res.title,
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}}, {quoted:m})
       }
    break
    case 'ttvd': {
       if (isBan) return m.reply(mess.ban)
       let res = await aiovideodl(args[0])
       texttk = `?????? *Tiktok Downloader* ???\n??? Caption : ${res.title}\n??? Size : ${res.medias[0].formattedSize}\n??? Type : ${res.medias[0].extension ? "video/" + res.medias[0].extension : "undefined"}`
       let buttons = [
       {buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
       ]
       let buttonMessage = {
       video: {url:res.medias[0].url},
       caption: texttk,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title:res.title,
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:1,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       }
    break
    case 'play': case 'ytplay': {
       if (isBan) return m.reply(mess.ban)
       let yts = require("yt-search")
       let search = await yts(text)
       let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
       let ytvc = await hx.youtube(anu.url)
       let buttons = [
       {buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: 'Video'}, type: 1},
       {buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: 'Audio'}, type: 1}
       ]
       let buttonMessage = {
       image: { url: anu.thumbnail },
       caption: `?????? *YouTube Play* ???\n??? Title : ${anu.title}\n??? Ext : Search\n??? ID : ${anu.videoId}\n??? Duration : ${anu.timestamp}\n??? Viewers : ${anu.views}\n??? Upload At : ${anu.ago}\n??? Author : ${anu.author.name}\n??? Channel : ${anu.author.url}\n??? Url : ${anu.url}\n??? Description : ${anu.description}`,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title: anu.title,
       body: "?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: anu.url,
       sourceUrl: anu.url
       }}
       }
       sock.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
    break
    case 'ytdl': case 'yt': case 'youtube': case 'ytmp4': case 'ytmp3': {
       if (isBan) return m.reply(mess.ban)
       if (!args[0]) return m.reply(mess.linkm)
       try {
       hx.youtube(args[0]).then(async(res) => {
       textyt = `?????? *YouTube Downloader* ???\n??? Title : ${res.title}\n??? Size : ${res.size}\n??? Quality : ${res.quality}`
       let buttons = [
       {buttonId: `ytvd ${res.link}`, buttonText: {displayText: 'Video'}, type: 1},
       {buttonId: `ytad ${res.mp3}`, buttonText: {displayText: 'Audio'}, type: 1}
       ]
       let buttonMessage = {
       image: {url:res.thumb},
       caption: textyt,
       footer: "?? FxSx",
       buttons: buttons,
       headerType: 4,
       contextInfo:{externalAdReply:{
       title: res.title,
       body: "?? FxSx",
       thumbnail: {url:res.thumb},
       mediaType:2,
       mediaUrl: args[0],
       sourceUrl: args[0]
       }}
       }
       sock.sendMessage(from, buttonMessage, {quoted:m})
       }).catch(_ => _)
       } catch {
       m.reply("Linknya Error!")
       }
       }
    break
    case 'ytvd': {
       if (isBan) return m.reply(mess.ban)
       sock.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption: "Sukses...", contextInfo:{externalAdReply:{
       title:"RoF3X-MD",
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: linkgc,
       sourceUrl: linkgc
       }}}, {quoted:m})
       }
    break
    case 'ytad': {
       if (isBan) return m.reply(mess.ban)
       sock.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
       title:"RoF3X-MD",
       body:"?? FxSx",
       thumbnail: thumb,
       mediaType:2,
       mediaUrl: linkgc,
       sourceUrl: linkgc
       }}}, {quoted:m})
       }
    break
    case 'swm': case 'stickerwm': case 'stickwm': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh :\n${prefix + command} RoF3X-Bot | By FxSx`)
       const swn = args.join(" ")
       const pcknm = swn.split("|")[0];
       const atnm = swn.split("|")[1];
       if (m.quoted.isAnimated === true) {
       sock.downloadAndSaveMediaMessage(quoted, "gifee")
       sock.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
       } else if (/image/.test(mime)) {
       let media = await quoted.download()
       let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
       await fs.unlinkSync(encmedia)
       } else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
       let media = await quoted.download()
       let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
       await fs.unlinkSync(encmedia)
       } else {
       m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
       }
       }
    break
    case 'smeme': case 'smm': {
       if (isBan) return m.reply(mess.ban)
       if (!args.join(" ")) return m.reply(`Contoh : ${prefix + command} Mending Hees)
       if (/image/.test(mime)) {
       var media = await sock.downloadAndSaveMediaMessage(quoted, "smeme")
       imgbbUploader('b9a90f1e63f41bac31532712c87e4c25', media)
       .then(async (data) => {
       var bgsd = args.join(" ")
       var urls = data.display_url
       let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
       sock.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname2 })
       })
       .catch(err => {
       throw err
       })
       } else {
       m.reply("Kirim foto dengan caption smeme")
       }
       }
    break
    case 'sticker': case 's': case 'stick': case 'stickgif': case 'stickergif': case 'sgif': {
       if (isBan) return m.reply(mess.ban)
       if (/image/.test(mime)) {
       let media = await quoted.download()
       let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
       await fs.unlinkSync(encmedia)
       } else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
       let media = await quoted.download()
       let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
       await fs.unlinkSync(encmedia)
       } else {
       m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
       }
       }
    break
// Eval Ada Disini
    default:
       if (budy.startsWith('=>')) {
       if (!isCreator) return m.reply(mess.owner)
       function Return(sul) {
       sat = JSON.stringify(sul, null, 2)
       bang = util.format(sat)
       if (sat == undefined) {
       bang = util.format(sul)
       }
       return m.reply(bang)
       }
       try {
       m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
       } catch (e) {
       m.reply(String(e))
       }
       }
       if (budy.startsWith('>')) {
       if (!isCreator) return m.reply(mess.owner)
       try {
       let evaled = await eval(budy.slice(2))
       if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
       await m.reply(evaled)
       } catch (err) {
       m.reply(String(err))
       }
       }

       if (budy.startsWith('$')) {
       if (!isCreator) return m.reply(mess.owner)
       exec(budy.slice(2), (err, stdout) => {
       if(err) return sock.sendMessage(from, {image: thumb, caption:String(err)}, {quoted:m})
       if (stdout) return m.reply(stdout)
       })
       }
// Anti Tag
    const listTag = ["6283815956151@s.whatsapp.net"]
    const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via m.reply 
       if (listTag.includes(partiNum)) {
       if (antitags === false) return
       if (!m.isGroup) return
       if (m.key.fromMe) return
       sendNye = fs.readFileSync('worker/media/sticker/jantag.webp')
       sock.sendReadReceipt(m.chat, m.sender, [m.key.id])
       sock.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
       }
// Antitag Via Tag 
       if (budy.includes("@6283815956151")) {
       if (antitags === false) return
       if (!m.isGroup) return
       if (m.key.fromMe) return
       sendNye = fs.readFileSync('worker/media/sticker/jantag.webp')
       sock.sendReadReceipt(m.chat, m.sender, [m.key.id])
       sock.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
       }
       if (isCmd && budy.toLowerCase() != undefined) {
       if (m.chat.endsWith('broadcast')) return
       if (m.isBaileys) return
       let msgs = global.db.database
       if (!(budy.toLowerCase() in msgs)) return
       sock.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
       }
}
} catch (err) {
sock.sendMessage("6283815956151@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})