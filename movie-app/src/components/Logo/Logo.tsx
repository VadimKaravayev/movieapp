import React from 'react';

interface LogoProps {
    text: string;
}

export const Logo: React.FC<LogoProps> = ({text}) => {

    const [first, last] = text.split(' ');

    return (
        <div className="logo">
            <strong>{first}</strong>{last}
        </div>
    );
};
