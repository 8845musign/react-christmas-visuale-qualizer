export function mapping(value, min, max, to) {
    if (value < min) value = min;
    return (value - min) / (max - min) * to;
}