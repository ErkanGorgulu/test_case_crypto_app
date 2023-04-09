import icons from '../../../assets/icons/icons';

export type IconTypes = keyof typeof icons

export type IconProps = {
    name: IconTypes;
    color: string;
    width?: number;
    height?: number;
    strokeWidth?: number;
}
