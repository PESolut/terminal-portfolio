import React, { useEffect, useRef } from 'react';
import { AnimatedLineProps } from '../types/components';
import Typify from '../lib/typify';

declare global {
    interface Window {
        Typify: any;
    }
}

const AnimatedLineComponent: React.FC<AnimatedLineProps> = ({ text, limit, speed = 30, type = 'system', onAnimationComplete }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const typifyRef = useRef<Typify | null>(null);
    const callbackRef = useRef<(() => void) | undefined>(undefined);

    useEffect(() => {
        callbackRef.current = onAnimationComplete;
    }, [onAnimationComplete]);

    useEffect(() => {
        if (!textRef.current || !text) return;

        typifyRef.current = new Typify(textRef.current, {
            text: [text],
            delay: speed,
            loop: false,
            cursor: false,
            stringDelay: 0,
            onComplete: () => callbackRef.current?.()
        });

        return () => {
            typifyRef.current?.stop();
        };
    }, []);

    return (
        <div className="line">
            <span className="prompt">{type === "user" ? ">" : ""}</span>
            <div ref={textRef} style={{ display: 'inline' }}></div>
        </div>
    );
};

const AnimatedLine = React.memo(AnimatedLineComponent);

export default AnimatedLine; 