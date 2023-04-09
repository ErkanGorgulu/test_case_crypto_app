
import React from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import { styles } from './styles';
import { TextInputProps } from '.';
import { Colors } from '../../utils/colors';
import IconButton from '../IconButton/IconButton';



export function TextInput(props: TextInputProps) {
    const { onPlusPress, style, containerStyle, ...inputProps } = props;
    return <>
        <View style={[styles.textInputContainer, containerStyle]}>
            <RNTextInput
                style={[styles.textInput, style]}
                {...inputProps}
            />
            {onPlusPress && <IconButton name="SquaredPlus" color={Colors.citron} width={24} height={24} onPress={() => onPlusPress(inputProps.value)} containerStyle={styles.textInputPlusButton} />}
        </View>
    </>;
}
