import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PriceChange } from '../PriceChange';
import { CurrencyExchangeProps } from '.';
import { domain } from '../../utils/constants';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../utils/screenNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';




export function CurrencyExchange(props: CurrencyExchangeProps) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const { exchange } = props;
    const currencyImageUrl = exchange?.icon?.light ? `${domain}/${exchange.icon?.light}` : undefined;

    const onExchangePress = () => {
        navigation.navigate(ScreenNames.CryptoDetailScreen, { exchange });
    };
    return <TouchableOpacity style={styles.container} onPress={onExchangePress}>
        <View style={styles.imageAndMarketContainer}>
            <Image source={{ uri: currencyImageUrl }} style={styles.image} />
            <View style={styles.marketAndCurrencyContainer}>
                <Text style={styles.market}>{exchange?.market}</Text>
                <Text style={styles.currency}>{exchange?.currency}</Text>
            </View>
        </View>
        <View style={styles.chartContainer} />
        <View style={styles.valueAndChangeContainer}>
            <Text style={styles.value}>{exchange?.value}</Text>
            <PriceChange value={exchange.change} />
        </View>
    </TouchableOpacity>;
}
