'use strict';

const alpacaAccount = require('./alpaca/account');
const alpacaAssets = require('./alpaca/assets');
const midware = require('./midware');

module.exports.MonitorForSell = async event => {
  // check for account market PDT or if asset not tradeable
  const [acctError, account] = await midware(alpacaAccount.getAccount());
  const [tradeableError, tradeable] = await midware(alpacaAssets.isAssetTradable(event.ticker));

  if (acctError || tradeableError || !tradeable) {
    return {
      statusCode: 403,
      body: JSON.stringify(
        {
          message: acctError || tradeableError || 'Alpaca asset is not tradeable!',
          input: event,
        },
        null,
        2
      ),
    }
  }

  // TODO: now test the selling of the asset on TradingView CrossingUp Alert
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `TradingView Alert was triggered with: ${JSON.stringify(event)} and the asset has been sold!`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  //return { message: 'TradingView Alert was triggered!', event };
};
