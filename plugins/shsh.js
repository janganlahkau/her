let fetch = require('node-fetch')
let fs = require('fs')
let { Presence } = require('@adiwajshing/baileys')
module.exports = {
    async all(m) {
 
try {

   if (m.isBaileys && m.fromMe) return false
        
        let groups = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
    const type = Object.keys(m.message)[0]
    const isMedia = m.text	
let dbcot = JSON.parse(fs.readFileSync('./plugins/bacot.json'))

                        const kata = dbcot[Math.floor(Math.random()*dbcot.length)];
         
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    if (isMedia) 
{

 let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(isMedia), lc: "id" }, ''))
  let json = await res.json()
  if (!json.success) throw json
  let result = json.success.replace(/simi/gim,  'gw').replace(/pantek/gi,  kata).replace(/simsimi/gi,  'gw')
   if (/aku tidak mengerti/gi.test(result)) return m.reply(kata)
   await sleep(7000)
    conn.reply(m.chat,result + ' 🗿',m)
conn.updatePresence(m.chat, Presence.composing)
conn.chatRead(m.chat).catch(() => { })
            }
     } catch (e) {
     	}

  
}
          }
