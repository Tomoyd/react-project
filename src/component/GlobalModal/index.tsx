import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StateObject } from '../../store';
import styles from './index.module.css';
const modalStore = {} as StateObject;

export interface GlobalModalProps {
    children: React.ReactNode;
    modalKey: string;
}

const GlobalModal: React.FC<GlobalModalProps> = ({ children, modalKey }) => {
    modalStore[modalKey] = children;
    return null;
};

const removeModal = (e: Event) => {
    const container = document.getElementById('modal') as HTMLElement;
    if (container) {
        container.removeEventListener('animationend', removeModal);
        document.body.removeChild(container);
        document.body.style.overflow = 'unset';
    }
};

const useModal = (modalKey: string) => {
    const showModal = (val?: any) => {
        document.body.style.overflow = 'hidden';
        let container = document.getElementById('modal');
        if (!container) {
            container = document.createElement('div');
            container.id = 'modal';
            document.body.appendChild(container);
        }
        let children = modalStore[modalKey];
        if (typeof children === 'function') {
            children = children(val);
        }
        ReactDOM.render(
            <div
                className={`${styles.modal}  ${styles.fadeInDown}`}
                onClick={hiddenModal}
            >
                <div className={styles.modalContainer} onClick={(e) => {}}>
                    {children}
                </div>
            </div>,
            container
        );
    };
    const hiddenModal = () => {
        const container = document.getElementById('modal') as HTMLElement;
        if (container) {
            container.firstElementChild?.classList.toggle(styles.fadeLogIn);
            container.addEventListener('animationend', removeModal);
        }
    };

    useEffect(() => {
        return () => {
            hiddenModal();
            delete modalStore[modalKey];
        };
    }, []);

    return [showModal, hiddenModal];
};
export { useModal };

export default GlobalModal;
