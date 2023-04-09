import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    balance: {
        fontFamily: 'Campton-Medium', fontWeight: '400', color: Colors.cloud,
    },
    inputError: {
        borderColor: Colors.red,
    },
    errorAndBalanceContainer: {
        justifyContent: 'space-between', flexDirection: 'row', marginTop: 12, alignItems: 'center',
    },
    errorText: {
        color: Colors.red, flex: 1,
    },
});
