/*
MIT License

Copyright (c) 2023 Sam K Thampan <github@devsk18> <https://devsk18.github.io/samkthampan>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

interface TypifyOptions {
    text: string[];
    delay?: number;
    stringDelay?: number;
    loop?: boolean;
    cursor?: boolean;
    onComplete?: () => void;
}

export class Typify {
    private element: HTMLElement | null;
    private options: Required<Omit<TypifyOptions, 'onComplete'>> & { onComplete?: () => void };
    private isCursorVisible: boolean = true;
    private animationId: number | null = null;
    private currentText: string = "";

    constructor(element: HTMLElement, options: TypifyOptions) {
        this.element = element;
        
        this.options = {
            delay: 100,
            stringDelay: 1000,
            loop: true,
            cursor: false,
            ...options
        };

        if (this.element) {
            this.element.textContent = "";
            
            if (this.options.text.length > 0) {
                this.startAnimation();
            }
        }
    }

    private async typeText(text: string): Promise<void> {
        if (!this.element) return;
        
        this.clearCursor();
        this.currentText = "";
        
        for (let char of text) {
            this.currentText += char;
            this.element.textContent = this.currentText;
            await this.delay(this.options.delay);
        }
    }

    private async eraseText(): Promise<void> {
        if (!this.element) return;
        
        this.clearCursor();
        while (this.currentText.length > 0) {
            this.currentText = this.currentText.slice(0, -1);
            this.element.textContent = this.currentText;
            await this.delay(this.options.delay);
        }
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private updateCursor(): void {
        if (!this.element || !this.options.cursor) return;
        
        this.isCursorVisible = !this.isCursorVisible;
        this.element.textContent = this.currentText + (this.isCursorVisible ? "|" : " ");
    }

    private clearCursor(): void {
        if (!this.element) return;
        this.element.textContent = this.currentText;
    }

    private async startAnimation(): Promise<void> {
        if (!this.element) return;

        const animate = async () => {
            for (let text of this.options.text) {
                await this.typeText(text);
                await this.delay(this.options.stringDelay);
                if (this.options.loop) {
                    await this.eraseText();
                }
            }
            if (!this.options.loop) {
                this.options.onComplete?.();
                return;
            }
            this.animationId = requestAnimationFrame(() => animate());
        };

        animate();
    }

    public stop(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.element) {
            this.element.textContent = this.currentText;
        }
    }
}

export default Typify; 