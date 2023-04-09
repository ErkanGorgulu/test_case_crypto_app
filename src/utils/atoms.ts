import { atom } from 'jotai';

type User = {
    id: string,
    name: string,
    assets: Record<string, unknown>,
    balance: number
}

export const userAtom = atom<User>({
    id: '',
    name: '',
    assets: {},
    balance: 0,
});
