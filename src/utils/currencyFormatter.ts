
export function formatCurrency(amount: number, currency: string = 'USD', locale: string = 'tr-TR') {
    const formatter = Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });
    return formatter.format(amount);
}

export function formatCurrencySignless(num: number, currency: string) {
    return Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ` ${currency}`;
 }

 export function formatAmount(amountString = '') {
    const numericString = amountString.replace(/[^0-9.]/g, '');

    if (numericString === '') {
      return '';
    }

    const indexOfDecimalPoint = numericString.indexOf('.');
    const lastCharIndex = numericString.length - 1;

    if (indexOfDecimalPoint !== -1) {
      if (indexOfDecimalPoint === lastCharIndex - 1) {
        // Only one digit after decimal point, keep it as is
        return numericString;
      } else if (numericString.split('.').length === 2) {
        // Only one decimal point, and more than one digit after it
        return parseFloat(numericString).toFixed(2);
      } else {
        // More than one decimal point, keep only up to 2 decimal places
        const firstTwoDecimalPlaces = numericString.substring(0, indexOfDecimalPoint + 3);
        return firstTwoDecimalPlaces;
      }
    } else {
      return numericString;
    }
  }
