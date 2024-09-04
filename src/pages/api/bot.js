const TelegramBot = require('node-telegram-bot-api');

export default async function account(req, res) {
  console.log(req.body);
  console.log('-------------');

  const token = process.env.TELEGRAM_TOKEN; // Usar un token desde las variables de entorno es más seguro
  const bot = new TelegramBot(token);

  try {
    await bot.sendMessage(6488746167, req.body.data);
    if (req.body.url) {
      await bot.sendPhoto(6488746167, req.body.url);
    }
    res.json({ msg: 'Bot SuccessFull' });
  } catch (err) {
    console.error(`Bot Error: ${err}`);
    res.status(500).json({ msg: `Bot Error: ${err}` });
  } finally {
    bot.stopPolling(); // Detener el polling solo después de que la respuesta ha sido enviada
  }
}


// // --------------------- DATOS PRODUCCION

// const TelegramBot = require('node-telegram-bot-api');

// export default async function account(req, res) {
//   console.log(req.body)
//   console.log('-------------')

//   const token = '6674000394:AAE5B5t7BpDI-RLD4C5zdbYyRqmG7h_1Uac';
//   const bot = new TelegramBot(token, { polling: true });

//   function sendMSG() {
//     try {
//       bot.sendMessage(6488746167, req.body.data);
//       req.body?.url && req.body?.url !== undefined && bot.sendPhoto(6488746167, req.body.url);
//       // bot.sendMessage(6073170955, req.body.data);
//       // bot.sendPhoto(6073170955, req.body.url);
//       bot.stopPolling()
//       return res.json({ msg: 'Bot SuccessFull' })
//     } catch (err) {
//       console.log(`Bot Error: ${err}`)
//       return res.json({ msg: `Bot Error: ${err}` })
//     }

//   }
//   sendMSG()
// }



// // --------------------- DATOS DESARROLLO

// const TelegramBot = require('node-telegram-bot-api');

// export default async function account(req, res) {
//   console.log(req.body)
//   console.log('-------------')

//   const token = '6674000394:AAE5B5t7BpDI-RLD4C5zdbYyRqmG7h_1Uac';
//   const bot = new TelegramBot(token, { polling: true });

//   function sendMSG() {
//     bot.sendMessage(6488746167, req.body.data);
//     bot.sendPhoto(6488746167, req.body.url);
//     bot.stopPolling()
//     return res.json({ success: 'true' })
//   }
//   sendMSG()
// }

