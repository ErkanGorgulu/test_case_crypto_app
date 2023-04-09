import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from '../Icon/Icon';
import { Colors } from '../../utils/colors';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { HistoryButtonProps } from '.';


export function HistoryButton(props: HistoryButtonProps) {
    const { onPress } = props;
    const { t } = useTranslation();
    return <TouchableOpacity style={styles.historyButton} onPress={onPress}>
        <Icon name="Recycle" width={24} height={24} color={Colors.gunmetal} />
        <Text style={styles.historyText}>{t('common-history')}</Text>
    </TouchableOpacity>;
}
