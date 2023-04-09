import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageAndMarketContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4,
    },
    image: {
        width: 40,
        height: 40,
    },
    marketAndCurrencyContainer: {
        marginLeft: 8,
    },
    market: {
        fontFamily: 'Campton-Medium',
        fontWeight: '300',
        fontSize: 16,
        color: Colors.gunmetal,
    },
    currency: {
        fontFamily: 'Campton-Medium',
        fontWeight: '300',
        marginTop: 4,
        color: Colors.mountainMist,
    },
    chartContainer: {
        overflow: 'hidden',
        width: 66,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    valueAndChangeContainer: {
        flex: 3,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    value: {
        fontFamily: 'Campton-Medium',
        fontWeight: '300',
        fontSize: 16,
        color: Colors.gunmetal,
    },
});
