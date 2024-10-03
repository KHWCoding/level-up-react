'use client';

import React, { useEffect } from "react";

export function useAtBottom(offset = 0) {
    const [isAtBottom, setIsAtBottom] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtBottom(
                window.innerHeight + window.scrollY >= document.body.offsetHeight - offset
            );
        }
        
        window.addEventListener('scorll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [offset]);

    return isAtBottom;
}