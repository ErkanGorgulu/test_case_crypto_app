import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: Colors.gunmetal,
    },
    input: {
      width: '80%',
      height: 50,
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Colors.citron,
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: Colors.citron,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
    },
  });
