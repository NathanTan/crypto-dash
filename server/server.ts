import express from 'express';
// import { postMessages, putMessage } from './routes/messages';
// import { getUser } from './routes/users';



// Terra Ecosystem
import { LCDClient, Coin, MnemonicKey,  Extension, Wallet } from '@terra-money/terra.js';


const app = express();
const port = process.env.PORT || 5000;



// connect to bombay testnet
const terra = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
});

// To use LocalTerra
// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// });

// get the current swap rate from 1 TerraUSD to TerraKRW
const offerCoin = new Coin('uusd', '1000000');
terra.market.swapRate(offerCoin, 'ukrw').then(c => {
  console.log(`${offerCoin.toString()} can be swapped for ${c.toString()}`);
});

console.log("mmain")
// async main() {
    let marketParams = null
    terra.market.parameters().then((wut) => {
        console.log("yeet "+ JSON.stringify(wut))
        marketParams = wut

    });
    let exchangeRates = null
    terra.oracle.exchangeRates().then(wut => {
        console.log(wut)
        exchangeRates = wut
    });
    if (marketParams)
    console.log(marketParams.base_pool);
    if (exchangeRates)
    console.log(exchangeRates.get('uusd'));
//   }


let wallet: Wallet;
console.log("wallet")
console.log(wallet)
const extension = new Extension();
extension.connect();
extension.on("connect", (w: Wallet) => {
    console.log("wallet")
    console.log(wallet)
  w = wallet;
});
  

// user
// app.get('/api/users/:id', getUser);

// // messages
// app.post('/api/messages', postMessages);
// app.put('/api/messages/:id', putMessage);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
