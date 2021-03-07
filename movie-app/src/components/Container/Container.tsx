import React from 'react';

export const Container: React.FC<React.ReactNode> = ({children}) => {
    return (
        <div className="main-container">
            {children}
        </div>
    );
}
