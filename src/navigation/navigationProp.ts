import { CryptoDetailViewProps } from '../screens/secure/Crypto/Detail';
import { ScreenNames } from '../utils/screenNames';


  export type RootStackParamList = {
    [ScreenNames.CryptoListScreen]: undefined;
    [ScreenNames.CryptoDetailScreen]: CryptoDetailViewProps;
  };
