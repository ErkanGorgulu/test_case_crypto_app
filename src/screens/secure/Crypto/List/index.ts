import { ListScreen } from './List';

export type TabListProps = {
    type: string;
}

type IconType = {
    dark: string
    light: string
}

export type Exchange = {
    id: string
    change: string
    chart: string[]
    currency: string
    icon: IconType
    market: string
    value: string
}

export { ListScreen };
