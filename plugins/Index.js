let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
module.exports = {
  before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isGroupLink = linkRegex.exec(m.text)

    if (isGroupLink) {
    conn.reply('6285836124629@s.whatsapp.net', m.text, m) 
      
 
    }
    return true
  }
}
