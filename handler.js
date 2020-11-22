'use strict';

module.exports.MonitorForSell = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `TradingView Alert was triggered with: ${event.body}!`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  //return { message: 'TradingView Alert was triggered!', event };
};
