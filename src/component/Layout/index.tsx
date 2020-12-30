import React, { useEffect } from 'react';

export interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, []);
    return <>{children}</>;
};

export default Layout;
