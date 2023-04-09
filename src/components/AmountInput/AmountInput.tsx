import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from '../TextInput';
import { AmountInputProps } from '.';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { formatAmount } from '../../utils/currencyFormatter';


export function AmountInput(props: AmountInputProps) {
    const { balance, onChangeText, style, error, ...inputProps } = props;
    const { t } = useTranslation();
    return <>
        <TextInput {...inputProps}
            onChangeText={
                (text) => {
                    onChangeText(formatAmount(text));
                }
            }
            containerStyle={[error ? styles.inputError : {}, style]}
        />
        <View style={styles.errorAndBalanceContainer}>
            {<Text style={styles.errorText}>{error && error}</Text>}
            {<Text style={styles.balance}>{balance && t('secure-user-balance', { userBalance: balance })}</Text>}
        </View>
    </>;
}
