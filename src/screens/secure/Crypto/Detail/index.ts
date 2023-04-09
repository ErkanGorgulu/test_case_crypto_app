import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/navigationProp';
import { ScreenNames } from '../../../../utils/screenNames';
import { Exchange } from '../List';
import { DetailScreen } from './Detail';


export type CryptoDetailScreenProps = NativeStackScreenProps<RootStackParamList, ScreenNames.CryptoDetailScreen>;


export type CryptoDetailViewProps = {
    exchange: Exchange
}

export type DetailTabProps = CryptoDetailViewProps

export enum DetailTabEnum {
    Buy = 0,
    Sell = 1
}

export {DetailScreen};
