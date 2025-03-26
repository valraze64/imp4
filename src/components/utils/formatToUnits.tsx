export const formatToUnits = (number: number, precision = 1) => {
    const abbrev = ['', 'k', 'M', 'B', 'T'];
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1))
    const suffix = abbrev[order];
    return Math.abs(number / Math.pow(10, order * 3)).toFixed(precision) + suffix;
};

export const formatCurrencyValues = (value: string, precision = 1) => {
    const charPart = value.replace(/[^a-zA-Z$%€£-â‚¬Â£¹/±à¸¿«¥-]/g, ''); 
    const numPart = value.replace(/[^0-9.]/g, '');
    const formattedValue = formatToUnits(Number(numPart),1);
    return `${charPart}${formattedValue}`
}