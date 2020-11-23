const Alpaca = require('@alpacahq/alpaca-trade-api')

describe('Alpaca', () => {
  it('should throw with missing API cred', () => {
    process.env.APCA_API_SECRET_KEY = '';
    
    expect(() => {
      const alpaca = new Alpaca();
    }).toThrow();
  });
})
