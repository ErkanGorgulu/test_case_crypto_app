import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ButtonProps } from '.';


export default function Button(props: ButtonProps) {
    const { title, onPress, containerStyle, titleStyle, disabled, activeOpacity } = props;

    return (
        <TouchableOpacity style={[styles.container, containerStyle]} disabled={disabled} onPress={onPress} activeOpacity={activeOpacity ?? 0.7}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );

}
