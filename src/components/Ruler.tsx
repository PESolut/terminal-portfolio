import React, {useRef, useEffect} from "react";

export type RulerProps = {
    onMeasure: (charLimit: number) => void;
};


const Ruler: React.FC<RulerProps> = ({onMeasure}) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    let charCount = 1000

    useEffect(() => {
        if (!spanRef.current) return
        const width = spanRef.current.offsetWidth;
        const charWidth = width / charCount;
        const containerWidth = window.innerWidth
        const charLimit = Math.floor(containerWidth / charWidth)
        console.log(`Span Width: ${spanRef.current.offsetWidth}px, Char Width: ${(spanRef.current.offsetWidth / charCount).toFixed(2)}px, Container Width: ${window.innerWidth}px, Char Limit: ${Math.floor(window.innerWidth / (spanRef.current.offsetWidth / charCount))}`);
        onMeasure(charLimit)
    }, [])
  return (
    <div className="ruler" style={{ visibility: 'hidden'}}>
        <span ref={spanRef}>{'M'.repeat(charCount)}</span>
    </div>
  );
};

export default Ruler;

