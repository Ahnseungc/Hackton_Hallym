export function formatNumber(num) {
    if (Number.isInteger(num)) {
        return num.toLocaleString();
    } else {
        const integerPart = Math.floor(num);
        return integerPart.toLocaleString();
    }
}
