import { StyleProp, ViewStyle } from 'react-native/types';

export type ButtonProps = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    activeOpacity?: number;
}
