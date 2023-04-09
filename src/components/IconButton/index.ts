import { StyleProp, ViewStyle } from 'react-native/types';
import { IconTypes } from '../Icon';

export type IconButtonProps = {
    name: IconTypes
    onPress: () => void;
    width?: number;
    height?: number;
    containerStyle?: StyleProp<ViewStyle>;
    color: string;
}
