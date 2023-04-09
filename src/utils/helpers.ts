export function getUserAssetBalance(assets: Record<string, unknown>, currency: string) {
    return assets[currency] || 0;
}


export function findBaseCurrency(currency: string) {
    if (['USDT', 'USD', 'USDC'].includes(currency)) {
      return 'USD';
    }
    else if (['TRY', 'TL'].includes(currency)) {
        return 'TRY';
    }
    else {
      return currency;
    }
  }
