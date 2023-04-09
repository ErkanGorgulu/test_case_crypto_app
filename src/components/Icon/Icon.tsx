import React from 'react';
import Icons from '../../../assets/icons/icons';
import { IconProps } from '.';



export function Icon(props: IconProps) {
    const { name, color, width, height, strokeWidth } = props;
    const IconComponent = Icons[name];

    return React.createElement(IconComponent, {
        fill: color,
        height,
        width,
        strokeWidth,
    });
}
