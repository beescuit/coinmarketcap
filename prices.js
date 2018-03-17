const CoinMarketCap = require("node-coinmarketcap");
const coinmarketcap = new CoinMarketCap();
const colors = require('colors');
const coincfg = require('./coins.json');

coinmarketcap.multi(coins => {
  coins.getTop(10).forEach(function (coin) {
    var color;
    color = (coincfg[coin.symbol]) ? coincfg[coin.symbol] : coincfg.default
    var sym = coin.symbol;
    if (coin.symbol.length < 5) {
      for (var i = 0; i < 5-coin.symbol.length; i++) {
        sym = sym + " ";
      }
    }
    var h1 = coin.percent_change_1h.includes("-")?`▼ ${coin.percent_change_1h}%`.red : `▲ ${coin.percent_change_1h}%`.green;
    var h24 = coin.percent_change_24h.includes("-")?`▼ ${coin.percent_change_24h}%`.red : `▲ ${coin.percent_change_24h}%`.green;
    var d7 = coin.percent_change_7d.includes("-")?`▼ ${coin.percent_change_7d}%`.red : `▲ ${coin.percent_change_7d}%`.green;
    console.log(`${sym[color].bold}\t| ${`$${parseFloat(coin.price_usd).toFixed(2)} USD`.cyan}\t | 1h:${h1}\t| 24h:${h24}\t| 7d:${d7}`);
  })
});
