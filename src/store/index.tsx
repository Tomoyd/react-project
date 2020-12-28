import * as React from 'react';

export interface PageContextProps {
    children: React.ReactNode;
}
export interface pageAction {
    type: string;
    value: object;
}
const pageReducer = (state, action: pageAction) => {
    switch (action.type) {
    }
    return { ...state };
};
const storeContext = React.createContext({});
const PageContext: React.FC<PageContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(pageReducer, initialState);
    return <storeContext.Provider value={{}}>{children}</storeContext.Provider>;
};

export default PageContext;
