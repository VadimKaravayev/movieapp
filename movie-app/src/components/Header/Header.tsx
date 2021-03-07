import React from 'react';

export const Header: React.FC<React.ReactNode> = ({children}) =>
    (
        <div className="banner">
            {children}
        </div>
    );
