import { useEffect, useState } from 'react';

export function useWindowSize() {
    const [isSmall, setSmall] = useState(false);

    const checkWindow = () => {
        if (window.innerWidth < 1000 || window.innerHeight < 800) {
            setSmall(true) ;
        } else {
            setSmall(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', checkWindow);
    });

    return isSmall;
}