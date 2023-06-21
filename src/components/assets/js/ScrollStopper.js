import { useEffect } from 'react';

const ScrollStopper = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            const maxScrollY = 1220; // Set the maximum scroll Y value after which scrolling should be stopped

            if (scrollY > maxScrollY) {
                window.scrollTo(0, maxScrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return null;
};

export default ScrollStopper;
