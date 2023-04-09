import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen as CryptoListScreen } from '../../screens/secure/Crypto/List';
import { DetailScreen as CryptoDetailScreen } from '../../screens/secure/Crypto/Detail';
import { ScreenNames } from '../../utils/screenNames';
import { RootStackParamList } from '../navigationProp';


const Stack = createNativeStackNavigator<RootStackParamList>();

function SecureNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.CryptoListScreen} component={CryptoListScreen} />
            <Stack.Screen name={ScreenNames.CryptoDetailScreen} component={CryptoDetailScreen} />
        </Stack.Navigator>
    );
}

export default SecureNavigation;
