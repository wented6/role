const Discord = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member=> {
    console.log("oNNN1");
    member.addRole(member.guild.roles.find("name","Uni."));
    });


client.login(process.env.WE);
