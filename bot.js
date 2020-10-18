const { Telegraf, Telegram } = require('telegraf')

const bot = new Telegraf('1340213198:AAFLWTEzkYOCuMmrX-m5TLK7ipw0ii1qzts')



bot.start((ctx) => {
    var nama_pengguna = ctx.from.first_name+" "+ctx.from.last_name;
    var username_pengguna = ctx.from.username;
    var IDchat = ctx.from.id;

    ctx.reply("Selamat datang "+nama_pengguna+"\n\nGunakan bot ini sebaik mungkin ya :)");
    console.log(ctx.chat);
    ctx.telegram.sendMessage(1395813819, 'Bot anda sedang digunakan oleh :\n\n'+ 'Nama  : '+nama_pengguna+'\nUsername  : '+username_pengguna+'\nChat ID : '+IDchat);
})


bot.hears(['Hai', 'hai' ], (ctx) => {
    ctx.reply("Haloo")
})

bot.hears(['Halo', 'halo'], (ctx) => {
    ctx.reply("Hai")
})



bot.launch()
