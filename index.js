const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("ODQwOTU3NDgxMzkxODgyMjYw.YJfwrw.VBc_XMiTPrZnY8GebYesz_0u_64")

bot.once('ready', () => {
    console.log('Guardando RP');
    bot.user.setActivity('Bot Guardando RP', { type: 'PLAYING'});

});


bot.on("message", (message) => {
    if (message.content == "!pacific") {
        message.channel.send("RAPINA PACIFIC @NDPD VELOCI https://pbs.twimg.com/profile_images/556896974054891521/wpMfZtZA.jpeg")
    }
});

bot.on("message", (message) => {
    if (message.content == "!erba") {
        message.channel.send("Stai raccogliendo 100grammi di marijuana")
    }
});

bot.on("message", (message) => {
    if (message.content == "!gioielleria") {
        message.channel.send("RAPINA ALLA GIOIELERIA @NDPD CORRETE https://lh3.googleusercontent.com/proxy/cvKW7PrgJ7T8QD_Uwqxbt-kl60IjgAkaAECk62ln2BqmgeyDT39id9lcwNa9bF5MDnMICjqTSyNk3PKS8OLm2GiadD7MQIBAtylS5IgzD7kvYtxSNb7pG9aQsy1EhP0nQL5HgpnqZXDkENoP2ouq0mCShRlZBgMWn6L--g1xtBo0Yg")
    }
});

bot.on("message", (message) => {
    if (message.content == "!market") {
        message.channel.send("RAPINA AL MINIMARKET")
    }
});

bot.on("message", (message) => {
    if (message.content == "!invito") {
        message.channel.send("Quest utente Deve Essere Invitato @everyone invitatelo")
    }
});

bot.on("message", (message) => {
    if (message.content == "!galera") {
        message.channel.send("Un utente è in galera maggiori info nell'messaggio qui sotto")
    }
});

bot.on("message", (message) => {
    if (message.content == "!ban") {
        message.channel.send("RAGAZZI L'UTENTE IN QUESTIONE DEVE ESSERE BANNATO VOTATRLO PER ESPELLERE @everyone")
    }
});