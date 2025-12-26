import { useEffect, useState } from "react";

interface UseAnimatedNumberOptions {
    duration?: number;
    startOnMount?: boolean;
}

export const useAnimatedNumber = (
    targetValue: string,
    options: UseAnimatedNumberOptions = {}
) => {
    const { duration = 2000, startOnMount = true } = options;
    const [displayValue, setDisplayValue] = useState<string>(startOnMount ? "0" : targetValue);

    useEffect(() => {
        if (!startOnMount) return;

        // Extract numeric value and suffix from strings like "100%", "100+", etc.
        const match = targetValue.match(/^(\d+)(.*)$/);
        if (!match) {
            setDisplayValue(targetValue);
            return;
        }

        const targetNum = parseInt(match[1], 10);
        const suffix = match[2] || "";

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentNum = Math.floor(easeOutQuart * targetNum);

            setDisplayValue(`${currentNum}${suffix}`);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setDisplayValue(targetValue);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [targetValue, duration, startOnMount]);

    return displayValue;
};

