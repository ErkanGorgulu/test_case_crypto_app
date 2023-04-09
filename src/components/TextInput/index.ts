import { TextInputProps as RNTextInputProps, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from './TextInput';


export type TextInputProps = RNTextInputProps & {
    onPlusPress?: (value: string | undefined) => void;
    error?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

export { TextInput };
