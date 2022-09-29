export const mapTo2D = (point, rows, columns) => {
    const row = Math.floor((point - 1) / columns);
    const column = (point-1) % columns;
    return [row, column];
}

