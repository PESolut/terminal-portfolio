export interface LineProps {
    text?: string;
    limit?: number | null;
    type?: 'user' | 'system' | 'animated';
    onAnimationComplete?: () => void;
}

export interface AnimatedLineProps extends LineProps {
    speed?: number;
} 