import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '../Icon/Icon';
import { Colors } from '../../utils/colors';
import { PriceChangeProps } from '.';
import { styles } from './styles';


export function PriceChange(props: PriceChangeProps) {
    const { value } = props;

    if (!value || parseFloat(value) === 0) { return <></>; }

    const parsedValue = parseFloat(value);
    const isUp = parsedValue > 0;

    return <View style={styles.container}>
        <Text style={[{ color: isUp ? Colors.persianGreen : Colors.darkTerraCotta }, styles.price]}>{parsedValue}</Text>
        <Icon name={isUp ? 'UpArrow' : 'DownArrow'} color={isUp ? Colors.persianGreen : Colors.darkTerraCotta} width={14} height={14} />
    </View>;
}

