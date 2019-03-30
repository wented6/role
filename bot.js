const Discord = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member=> {
    console.log("oNNN1");
    member.addRole(member.guild.roles.find("name","You."));
    });


client.login(process.env.WE);
