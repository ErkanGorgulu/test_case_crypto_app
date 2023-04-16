import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/nonsecure/Login/Login';
import { ScreenNames } from '../../utils/screenNames';

const Stack = createNativeStackNavigator();

function NonSecureNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default NonSecureNavigation;
