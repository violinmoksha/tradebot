const Alpaca = require('@alpacahq/alpaca-trade-api')
const alpaca = new Alpaca()

module.exports.getAllAssets = (marketFilter) => {
  return new Promise((resolve, reject) => {
    // Get a list of all active assets in our account.
    alpaca.getAssets({
      status: 'active'
    }).then(activeAssets => {
      if (marketFilter) {
        // Filter the assets based on a particular market, i.e. 'NASDAQ' || 'NYSE'
        resolve(activeAssets.filter(asset => asset.exchange == marketFilter));
      }
      resolve(activeAssets);
    }, e => {
      reject(e);
    })
  })
}

module.exports.isAssetTradable = (assetTicker) => {
  return new Promise((resolve, reject) => {
    // Check if an assetTicker is tradable on the Alpaca platform.
    alpaca.getAsset(assetTicker).then(asset => {
      if (asset.tradable) {
        resolve(true);
      }
      resolve(false);
    }, e => {
      reject(e);
    })
  })
}
