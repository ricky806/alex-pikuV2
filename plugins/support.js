const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "help",
    fromMe: isPrivate,
    desc: "À𝖑è𝖝 𝕻ì𝖐ù support",
    type: "support"
}, async (message) => {
    const name = 'À𝖑è𝖝 𝕻ì𝖐ùː͢»🎈', title = "À𝖑è𝖝 𝕻ì𝖐ùː͢» 𝙎𝙐𝙋𝙋𝙊𝙍𝙏🦋", number = '918536881026', body = "À𝖑è𝖝 𝕻ì𝖐ùː͢»";
    const image = "https://i.imgur.com/V2DZbd7.jpeg", sourceUrl = 'https://chat.whatsapp.com/HBf3zvaGyRaEfMZlKgUSPV';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 À𝖑è𝖝 𝕻ì𝖐ùː͢»;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});
