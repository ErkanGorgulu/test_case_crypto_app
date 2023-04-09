import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    textInputContainer: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.citron,
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textInput: {
        fontFamily: 'Campton-Medium',
        fontSize: 18,
        fontWeight: '300',
        flex: 1,
        marginHorizontal: 16,
        color: Colors.gunmetal,
    },
    textInputPlusButton: {
        marginRight: 16,
    },
});
