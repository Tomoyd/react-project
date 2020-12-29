import React from 'react';
import useStore from '../hooks/useStore';

const Home: React.FC = () => {
    const [state, setStoreState] = useStore('home');

    return (
        <div
            onClick={() => {
                console.log('123 :>> ', 123);
                setStoreState('home 999');
            }}
        >
            {state}
        </div>
    );
};

export default Home;
