import { StyleSheet } from 'react-native';
import { Colors } from '../../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    indicatorContainerStyle: {
        zIndex: 1,
    },
    tabLabelStyle: {
        fontFamily: 'Campton-Medium',
        fontSize: 16,
        fontWeight: '300',
    },
    contentContainer: {
        paddingHorizontal: 16,
        gap: 32,
        paddingVertical: 32,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    headerTitle: {
        fontFamily: 'Campton-Medium',
        fontSize: 20,
        fontWeight: '300',
    },
    currencyValue: {
        fontFamily: 'Campton-Medium', fontSize: 34, color: Colors.gunmetal, fontWeight: '400', textAlign: 'center', marginTop: 20,
    },
    divider: {
        height: 1, width: '100%', backgroundColor: Colors.cloud, marginTop: 14,
    },
    tabViewContainer: {
        marginTop: 32,
    },
    pageView: {
        flex: 1, paddingTop: 40, paddingHorizontal: 16,
    },
    pageViewContentContainer: {
        flex: 1,
    },
    howMuchQuestion: {
        fontFamily: 'Campton-Medium', fontSize: 18, fontWeight: '300', color: Colors.gunmetal,
    },
    balance: {
        fontFamily: 'Campton-Medium', fontWeight: '400', marginTop: 12,
        textAlign: 'right', color: Colors.cloud,
    },
    bottomContentContainer: {
        flex: 1, justifyContent: 'flex-end',
    },
    amountToBuyText: {
        fontFamily: 'Campton-Medium',
        fontWeight: '400',
        textAlign: 'center', color: Colors.cloud,
    },
    amountToBuyValue: {
        fontFamily: 'Campton-Medium', fontSize: 16, fontWeight: '300', marginTop: 8, textAlign: 'center', color: Colors.gunmetal,
    },
    historyAndBuyButtonContainer: {
        marginTop: 18, flexDirection: 'row', justifyContent: 'space-between',
    },
});
