import { useState, useEffect } from 'react';

const useFixedHeader = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header && document.documentElement.scrollTop > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return isFixed;
}

export default useFixedHeader;