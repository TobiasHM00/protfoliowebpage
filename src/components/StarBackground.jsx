import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration


export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animatioDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map(star => (
            <div
                key={star.id}
                className="star animate-pulse-sublte"
                style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animatioDuration}s`,
                }}
            />
        ))}
        <style>
            {`
                @keyframes twinkle {
                    0%, 100% { opacity: ${stars[0]?.opacity || 1}; }
                    50% { opacity: 0; }
                }
            `}
        </style>
    </div>;
};