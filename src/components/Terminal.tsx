import React, { useState, useEffect, useRef, useCallback } from 'react';
import NavBar from "./NavBar";
import "./Terminal.css";
import Header from "./Header";
import Line from "./Line";
import Ruler from "./Ruler";
import { Line as LineType } from '../types/terminal';

interface TerminalProps {
    lines: LineType[];
    charLimit?: number;
}

const Terminal: React.FC<TerminalProps> = ({ lines = [], charLimit: initialCharLimit = 80 }) => {
    const [visibleLines, setVisibleLines] = useState<LineType[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [charLimit, setCharLimit] = useState(initialCharLimit);
    const animationCompleteRef = useRef<(() => void) | null>(null);
    const linesRef = useRef<LineType[]>(lines);
    
    useEffect(() => {
        linesRef.current = lines;
    }, [lines]);

    useEffect(() => {
        setVisibleLines([]);
        setCurrentIndex(0);
        setIsAnimating(false);
    }, [lines]);

    const handleAnimationComplete = useCallback(() => {
        setIsAnimating(false);
        setCurrentIndex(prev => prev + 1);
        animationCompleteRef.current = null;
    }, []);

    useEffect(() => {
        if (!linesRef.current || currentIndex >= linesRef.current.length || isAnimating) return;

        const currentLine = linesRef.current[currentIndex];
        if (!currentLine) return;

        setVisibleLines(prev => [...prev, currentLine]);

        if (currentLine.type === 'animated') {
            setIsAnimating(true);
            animationCompleteRef.current = handleAnimationComplete;
        } else {
            setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
            }, 0);
        }
    }, [currentIndex, isAnimating, handleAnimationComplete]);

    return (
        <div className="terminal">
            <Ruler onMeasure={setCharLimit}/>
            <NavBar/>
            <Header/>
            <div className="terminal-lines">
                {visibleLines.map((line, idx) => {
                    const isLastLine = idx === visibleLines.length - 1;
                    const callback = isLastLine && line.type === 'animated' && animationCompleteRef.current 
                        ? animationCompleteRef.current 
                        : undefined;
                    
                    return (
                        <Line
                            key={`line-${idx}`}
                            text={line.text}
                            type={line.type}
                            limit={charLimit}
                            onAnimationComplete={callback}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Terminal;
