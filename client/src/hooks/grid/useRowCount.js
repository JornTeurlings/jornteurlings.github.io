import { useState, useEffect } from 'react';

function useRowCount({ height }) {
    const [rowCount, setRowCount] = useState(null);

    useEffect(() => {
        setRowCount()
    }, [height]);
}