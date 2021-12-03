
fs = require('fs')
let fetch = require('node-fetch')
let { Presence } = require('@adiwajshing/baileys')
module.exports = {
    async all(m) {
 
try {
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
   if (m.isBaileys && m.fromMe) return false
        let groups = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
    const type = Object.keys(m.message)[0]
    const isMedia = m.text	
    if (isMedia) 
{
let dbcot = JSON.parse(fs.readFileSync('./plugins/bacot.json'))

                        const kata = dbcot[Math.floor(Math.random()*dbcot.length)];
         
                   
 let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(isMedia), lc: "id" }, ''))
  let json = await res.json()
  if (!json.success) throw json
  let result = json.success.replace(/simi/gim,  'gw').replace(/pantek/gi,  kata).replace(/simsimi/gi,  gw)
 const ran = [result,null]
     const dom = ran[Math.floor(Math.random()*ran.length)];
   if (result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.')

await sleep(10000)
     m.reply(dom)
conn.updatePresence(m.chat, Presence.composing)
conn.chatRead(m.chat).catch(() => { })
            }
     } catch (e) {
     	}

  
}
          }
