import React from 'react';
import { useStoreData } from '../../store';
import GlobalModal, { useModal } from '../component/GlobalModal';
import Layout from '../component/Layout';
// import useStore from '../hooks/useStore';

const Home: React.FC = () => {
    const [homeState, setData] = useStoreData('home');
    // const [showModal, hiddenModal] = useModal('test');
    return (
        <Layout title="主页">
            <GlobalModal modalKey="test">
                <div>hello</div>
            </GlobalModal>
            <div
                onClick={() => {
                    console.log('123 :>> ', 123);
                    // showModal();
                    setData(333);
                    // setStoreState('home 999');
                }}
            >
                click
            </div>
            <div>{homeState}</div>
        </Layout>
    );
};

export default Home;
