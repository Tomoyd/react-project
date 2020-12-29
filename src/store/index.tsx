import React from 'react';
export interface PageContextProps {
    children: React.ReactNode;
}
export interface pageAction {
    type: string;
    value: StateObject;
}

export interface ProviderValue {
    state: StateObject;
    dispatch: React.Dispatch<pageAction>;
}

export interface StateObject {
    [strKey: string]: any;
    [numKey: number]: any;
}
const pageReducer = (state: StateObject, action: pageAction) => {
    switch (action.type) {
        case 'set':
            return { ...state, ...action.value };
        default:
            return { ...state };
    }
};
export const storeContext = React.createContext({});
const initState = { home: 'home' };
const PageContext: React.FC<PageContextProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer(pageReducer, initState);
    const valueContext: ProviderValue = { state, dispatch };
    return (
        <storeContext.Provider value={valueContext}>
            {children}
        </storeContext.Provider>
    );
};

export default PageContext;
