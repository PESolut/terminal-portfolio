import React from "react";
import { LineProps } from '../types/components';
import AnimatedLine from './AnimatedLine';

const Line: React.FC<LineProps> = ({text = '', limit, type = 'user', onAnimationComplete}) => {
    if (type === 'animated') {
        return <AnimatedLine text={text} limit={limit} type="system" onAnimationComplete={onAnimationComplete} />;
    }

    const effectiveLimit = (limit ?? 80) - 3;
    const chunks = text.match(new RegExp(`.{1,${effectiveLimit}}`, 'g')) || [];

    return (
        <>
            {chunks.map((chunk, i) => (
                <div key={i} className="line">
                    <span className="prompt">{type === "user" ? ">" : ""}</span>
                    {chunk}
                </div>
            ))}
        </>
    );
};

export default Line;


// Future functionality:
//  the 'name' and 'username' will likely need to change in the future based on user input
//  via React's useState
