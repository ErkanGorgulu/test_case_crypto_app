import { TextInputProps } from '../TextInput';
import { AmountInput } from './AmountInput';

export type AmountInputProps = Omit<TextInputProps, 'onChangeText'> &  {
    balance?: string;
    onChangeText: (value: string) => void;
    error?: string;
}

export { AmountInput };
