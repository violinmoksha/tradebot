const midware = require('../../midware');
const alpacaAssets = require('../../alpaca/assets');

describe('alpacaAssets', () => {
  it("should get a list of all the NASDAQ assets", async () => {
    const [error, assets] = await midware(alpacaAssets.getAllAssets('NASDAQ'));
    expect(typeof assets).toBe('object');
  })

  it("should find an asset we do not own to not be tradeable", async () => {
    const [error, isTradeable] = await midware(alpacaAssets.isAssetTradable('aapl'));
    expect(error).toBeDefined();
  })
})
