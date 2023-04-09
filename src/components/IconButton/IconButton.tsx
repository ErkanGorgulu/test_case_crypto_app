import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../Icon/Icon';
import { IconButtonProps } from '.';



export default function IconButton(props: IconButtonProps) {
    const { width, height, onPress, name, containerStyle, color } = props;
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Icon name={name} width={width} height={height} color={color} />
        </TouchableOpacity>
    );
}
