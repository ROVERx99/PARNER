const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 

//////////

}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


/////////////////

 client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`
); 
});
client.on("message" m => {
if(m.content === "Reklam") {
m.reply("Bnera bomn 🖤");
m.react("");
}
});


/////////////



 client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`
); 
});
client.on("message" m => {
if(m.content === "Bare farmu😪😂") {
m.reply("ROVER");
m.react("");
}
});

client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە: https://discord.gg/iam`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("948972860804857913").send(
`<@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ROVERx99☑️`) 
});




client.login("");//تۆکین لێرە دانێ
