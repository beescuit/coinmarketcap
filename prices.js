var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();
var colors = require('colors');
coinmarketcap.multi(coins => {
  coins.getTop(10).forEach(function (coin) {
    var color;
    switch (coin.symbol) {
      case "BTC":
        color = "yellow";
        break;
      case "ETH":
        color = "grey"
        break;
      case "BCH":
        color = "green"
        break;
      case "XRP":
        color = "cyan"
        break;
      case "LTC":
        color = "bold"
        break;
      case "ADA":
        color = "blue"
        break;
      case "MIOTA":
        color = "bold"
        break;
      case "DASH":
        color = "blue"
        break;
      case "XEM":
        color = "cyan"
        break;
      case "XMR":
        color = "red"
        break;
      default:
        color = "yellow";
    }
    var sym = coin.symbol;
    if (coin.symbol.length < 5) {
      for (var i = 0; i < 5-coin.symbol.length; i++) {
        sym = sym + " ";
      }
    }
    var h1 = coin.percent_change_1h.includes("-")?`▼ ${coin.percent_change_1h}%`.red : `▲ ${coin.percent_change_1h}%`.green;
    var h24 = coin.percent_change_24h.includes("-")?`▼ ${coin.percent_change_24h}%`.red : `▲ ${coin.percent_change_24h}%`.green;
    var d7 = coin.percent_change_7d.includes("-")?`▼ ${coin.percent_change_7d}%`.red : `▲ ${coin.percent_change_7d}%`.green;
    console.log(`${sym[color].bold} | ${`$${parseFloat(coin.price_usd).toFixed(2)} USD`.cyan} | 1h: ${h1} | 24h: ${h24} | 7d: ${d7}`);
  })
});
