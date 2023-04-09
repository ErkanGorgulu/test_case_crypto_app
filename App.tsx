import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import SecureNavigation from './src/navigation/secure/SecureNavigation';
import NonSecureNavigation from './src/navigation/nonsecure/NonSecureNavigation';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/locale/en.json';
import tr from './src/locale/tr.json';
import { DEFAULT_LANGUAGE } from './src/utils/constants';
import 'intl-pluralrules';
import { useAtom } from 'jotai';
import { userAtom } from './src/utils/atoms';
import { urls } from './src/services/urls';


const resources = {
  en,
  tr,
};

i18n.use(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  resources,
  fallbackLng: DEFAULT_LANGUAGE,
});

function App(): JSX.Element {

  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    fetch(urls.user, {
      method: 'GET',
    }).then((response) => response.json()).then((responseData) => {
      setUser(responseData);
    }).catch((error) => {
      console.error(error);
    }
    );
  }, [setUser]);
  const isLoggedIn = user.id.length > 0;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <SecureNavigation />
        ) :
          <NonSecureNavigation />
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
