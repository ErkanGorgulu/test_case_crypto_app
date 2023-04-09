import { StyleSheet } from 'react-native';
import { Colors } from '../../../../utils/colors';

export const styles = StyleSheet.create({
    marketsText: {
        color: Colors.citron,
        fontSize: 28,
        fontFamily: 'Campton-Medium',
        fontWeight: '400',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 16,
    },
    headerIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    indicatorContainerStyle: {
        zIndex: 1,
    },
    tabLabelStyle: {
        fontFamily: 'Campton-Medium',
        fontSize: 16,
        fontWeight: '300',
    },
    tabListContainer: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 16,
        gap: 32,
        paddingVertical: 32,
    },
});
