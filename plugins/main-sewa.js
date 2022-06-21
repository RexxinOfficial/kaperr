let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Made by Rexxin",
        "description": `
┌「 *Sewa bot* 」
│     
├ 1 Minggu/5k (Via Pulsa +2k)
├ 1 Bulan/8k (Via Pulsa +2k)
├ Permanen/10k (Via Pulsa +2k)
│
├ Premium/2k (Via Pulsa +2k)
│
├ tertarik? hubungi: 
├ @6281317549796 (Rexxin)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "5370437279687043"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "5370437279687043",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6281317549796@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6281317549796\n\nowner number : wa.me/6281317549796"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler