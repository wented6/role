const Discord = require('discord.js');
const client = new Discord.Client();


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","اسم الرتبه"));
    });


client.login(process.env.WE);
