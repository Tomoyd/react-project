import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
interface StateType {
    [key: string]: any;
}
interface myAction {
    type: ActionType;
    value: any;
    key: any;
}
enum ActionType {
    DELETE,
    ADD,
}
const reducer = (state: StateType = {}, action: myAction) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ActionType.ADD:
            return { newState, ...action.value };
        case ActionType.DELETE:
            return Reflect.deleteProperty(newState, action.key);
        default:
            return state;
    }
};

const store = createStore(reducer);
const setStoreData = (key: string, value?: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    dispatch({
        type: value === undefined ? ActionType.DELETE : ActionType.ADD,
        value: { key: value },
        key: key,
    });
};
const useStoreData = (key: string) => {
    const storeState = useSelector<StateType, any>((state) => state[key]);
    const dispatch = useDispatch();
    const [state, setState] = useState(storeState);
    console.log('state', state);

    function handleDispatch(value: any, actionType: ActionType) {
        dispatch({
            type: actionType,
            value: { key: value },
            key: key,
        });
    }

    function setData(value: any) {
        const actionType: ActionType =
            value === undefined ? ActionType.DELETE : ActionType.ADD;
        handleDispatch(value, actionType);
        if (actionType === ActionType.ADD) {
            setState(value);
        }
    }
    function deleteData() {
        handleDispatch('', ActionType.DELETE);
        setState(undefined);
    }
    return [state, setData, deleteData];
};

export { useStoreData, setStoreData };

export default store;
