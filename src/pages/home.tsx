import React from 'react';
import GlobalModal, { useModal } from '../component/GlobalModal';
import Layout from '../component/Layout';
import useStore from '../hooks/useStore';

const Home: React.FC = () => {
    const [state, setStoreState] = useStore('home');
    const [showModal, hiddenModal] = useModal('test');
    return (
        <Layout title="主页">
            <GlobalModal modalKey="test">
                <div>hello</div>
                <div onClick={hiddenModal}>hidden modal</div>
            </GlobalModal>
            <div
                onClick={() => {
                    console.log('123 :>> ', 123);
                    showModal();
                    setStoreState('home 999');
                }}
            >
                {state}
            </div>
        </Layout>
    );
};

export default Home;
