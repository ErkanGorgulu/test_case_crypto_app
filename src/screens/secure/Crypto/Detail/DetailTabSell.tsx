import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../../../../utils/colors';
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button/Button';
import { DetailTabProps } from '.';
import { styles } from './styles';
import { useAtomValue } from 'jotai';
import { userAtom } from '../../../../utils/atoms';
import { HistoryButton } from '../../../../components/HistoryButton';
import { AmountInput } from '../../../../components/AmountInput';
import { getUserAssetBalance } from '../../../../utils/helpers';




export function DetailTabSell(props: DetailTabProps) {
    const { exchange } = props;
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const user = useAtomValue(userAtom);
    const returnKeyLabel = t('common-ok');

    const baseCurrency = exchange.market.split('/')[1];
    const currencyInTransaction = exchange.market.split('/')[0];
    const approximateCurrencyToSell = Number(value) / Number(exchange.value);
    const currencyAssetToSell = getUserAssetBalance(user.assets, currencyInTransaction.toLocaleLowerCase());

    const onSellPress = () => {
        if (error) { return; }
        else if (value === '') {
            setError(t('secure-amount-input-error-empty') as string);
            return;
        }
        setError('');
        console.log('Sell Pressed');
    };

    const onChangeAmount = (text: string) => {
        const minCurrencyToSell = 0.001;
        const maxCurrenyToSell = Number(currencyAssetToSell);
        const _approximateCurrencyToSell = Number(text) / Number(exchange.value);
        if (text === '' || Number(text) === 0) {
            setError('');
        }
        else if (minCurrencyToSell > maxCurrenyToSell) {
            setError(t('secure-amount-input-insufficient-amount') as string);
        }
        else if (_approximateCurrencyToSell < minCurrencyToSell) {
            setError(t('secure-amount-input-error-min-sell', { min: minCurrencyToSell, currency: exchange.currency }) as string);
        }
        else if (_approximateCurrencyToSell > maxCurrenyToSell) {
            setError(t('secure-amount-input-error-max-sell', { max: maxCurrenyToSell, currency: exchange.currency }) as string);
        }
        else {
            setError('');
        } setValue(text);
    };



    return (
        <KeyboardAvoidingView style={styles.pageView} contentContainerStyle={styles.pageViewContentContainer} behavior="padding" keyboardVerticalOffset={230}>
            <View>
                <Text style={styles.howMuchQuestion}>{t('secure-how-much-currency-to-sell', { usingCurrency: baseCurrency, sellingCurrency: currencyInTransaction })}</Text>
                <AmountInput
                    keyboardType="numeric"
                    returnKeyType="done"
                    returnKeyLabel={returnKeyLabel}
                    onChangeText={onChangeAmount}
                    value={value}
                    error={error}
                />
            </View>
            <View style={styles.bottomContentContainer}>
                {value !== '' && <>
                    <Text style={styles.amountToBuyText}>{t('secure-approximate-selling-amount')}</Text>
                    <Text style={styles.amountToBuyValue}>{approximateCurrencyToSell}</Text></>}
                <View style={styles.historyAndBuyButtonContainer}>
                    <HistoryButton onPress={() => { console.log('History Button Pressed'); }} />
                    <Button title={t('secure-sell-crypto', { currency: exchange.currency })} containerStyle={{ backgroundColor: Colors.darkTerraCotta }} onPress={onSellPress} />
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
