import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 56,
        borderRadius: 5,
        backgroundColor: Colors.persianGreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Campton-Medium',
        fontSize: 18,
        fontWeight: '400',
        color: Colors.white,
    },
});
