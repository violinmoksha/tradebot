const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca();

module.exports.getAccount = () => {
  return new Promise((resolve, reject) => {
    // Get our account information.
    alpaca.getAccount().then((account) => {
      // Check if our account is restricted from trading.
      if (account.trading_blocked) {
        reject('Account is currently restricted from trading.');
      }

      resolve(account);

      // Check how much money we can use to open new positions.
      //console.log(`$${account.buying_power} is available as buying power.`)
    }, e => {
      reject(e);
    })
  })
}

module.exports.dailyLossOrGain = () => {
  return new Promise((resolve, reject) => {
    // Get account information.
    alpaca.getAccount().then((account) => {
    	// Calculate the difference between current balance and balance at the last market close.
      const balanceChange = account.equity - account.last_equity;

      resolve(balanceChange);
      //console.log('Today\'s portfolio balance change:', balanceChange)
    }, e => {
      reject(e);
    })
  });
}
