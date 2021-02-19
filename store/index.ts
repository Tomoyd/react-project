import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
interface StateType {
    [key: string]: any;
}
interface myAction {
    type: string;
    value: any;
}
const reducer = (state: StateType = {}, action: myAction) => {
    if (action.type) {
    }
    return state;
};

const store = createStore(reducer);
const setStoreData = (key: string, value: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    dispatch({ type: 'add', value: value });
    // return value;
};
const useStoreData = (key: string) => {
    const state = useSelector<StateType, any>((state) => state[key]);
    function setData(value: any) {
        setStoreData(key, value);
    }
    function deleteData() {
        setStoreData(key, null);
    }
    return [state, setData, deleteData];
};

export { useStoreData, setStoreData };

export default store;
