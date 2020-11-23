const midware = require('../../midware');
const alpacaAccount = require('../../alpaca/account');

describe('alpacaAccount', () => {
  it('should get the account with API creds in env', async () => {
    const [error, account] = await midware(alpacaAccount.getAccount());
    expect(account).toBeDefined();
  })

  it('should get the daily gain or loss', async () => {
    const [error, balanceChange] = await midware(alpacaAccount.dailyLossOrGain());
    expect(typeof balanceChange).toBe('number');
  })
})
