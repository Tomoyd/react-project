import { useContext } from 'react';
import { ProviderValue, StateObject, storeContext } from './../store/index';

export type UseStoreReturn = [
    state: any,
    setStoreState: (newValue: any) => void
];

const useStore = (key: string): UseStoreReturn => {
    const { state, dispatch } = useContext(storeContext) as ProviderValue;

    const setStoreState = (newValue: any) => {
        const newState = {} as StateObject;
        newState[key] = newValue;
        console.log('newState', newState);
        dispatch({ type: 'set', value: { ...newState } });
    };
    return [state[key], setStoreState];
};

export default useStore;
