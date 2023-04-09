import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import { DetailTabProps } from '.';
import { styles } from './styles';
import { useAtomValue } from 'jotai';
import { userAtom } from '../../../../utils/atoms';
import { formatCurrencySignless } from '../../../../utils/currencyFormatter';
import { HistoryButton } from '../../../../components/HistoryButton';
import { AmountInput } from '../../../../components/AmountInput';
import { getUserAssetBalance } from '../../../../utils/helpers';


export function DetailTabBuy(props: DetailTabProps) {
    const { exchange } = props;
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const user = useAtomValue(userAtom);
    const returnKeyLabel = t('common-ok');

    const baseCurrency = exchange.market.split('/')[1];
    const currencyInTransaction = exchange.market.split('/')[0];
    const userBuyingBalance = getUserAssetBalance(user.assets, baseCurrency.toLocaleLowerCase());

    const formattedUserBalance = formatCurrencySignless(Number(userBuyingBalance), baseCurrency);
    const approximateCurrencyToBuy = Number(value) / Number(exchange.value);


    const onBuyPress = () => {
        if (error) { return; }
        else if (value === '') {
            setError(t('secure-amount-input-error-empty') as string);
            return;
        }
        setError('');
        console.log('Buy Pressed');
    };

    const onChangeAmount = (text: string) => {
        const minCurrencyToBuy = 0.001;
        const minimumBuyingPrice = minCurrencyToBuy * Number(exchange.value);
        const maxCurrenyToBuy = Number(userBuyingBalance) / Number(exchange.value);
        const _approximateCurrencyToBuy = Number(text) / Number(exchange.value);

        if (text === '') {
            setError('');
        }
        else if (Number(userBuyingBalance) < minimumBuyingPrice) {
            setError(t('secure-amount-input-insufficient-amount') as string);
        }
        else if (_approximateCurrencyToBuy < minCurrencyToBuy) {
            setError(t('secure-amount-input-error-min-buy', { min: minCurrencyToBuy, currency: exchange.currency }) as string);
        }
        else if (parseFloat(text) > Number(userBuyingBalance)) {
            setError(t('secure-amount-input-error-max-buy', { max: maxCurrenyToBuy, currency: exchange.currency }) as string);
        }
        else {
            setError('');
        }
        setValue(text);
    };

    const onPlusPress = () => {
        setValue(String(userBuyingBalance));
    };



    return (
        <KeyboardAvoidingView style={styles.pageView} contentContainerStyle={styles.pageViewContentContainer} behavior="padding" keyboardVerticalOffset={230}>
            <View style={{}}>
                <Text style={styles.howMuchQuestion}>{t('secure-how-much-currency-to-buy', { usingCurrency: baseCurrency, buyingCurrency: currencyInTransaction })}</Text>
                <AmountInput
                    keyboardType="numeric"
                    returnKeyType="done"
                    returnKeyLabel={returnKeyLabel}
                    onChangeText={onChangeAmount}
                    value={value}
                    onPlusPress={onPlusPress}
                    balance={formattedUserBalance}
                    error={error}
                />
            </View>
            <View style={styles.bottomContentContainer}>
                {value !== '' && <>
                    <Text style={styles.amountToBuyText}>{t('secure-approximate-buying-amount')}</Text>
                    <Text style={styles.amountToBuyValue}>{approximateCurrencyToBuy}</Text></>}
                <View style={styles.historyAndBuyButtonContainer}>
                    <HistoryButton onPress={() => console.log('History button pressed')} />
                    <Button title={t('secure-buy-crypto', { currency: exchange.currency })} onPress={onBuyPress} />
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
