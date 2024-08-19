export const validators = {
    isEmail(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    },
    isNotEmpty(value) {
        return value !== null && value !== undefined && value.trim() !== "";
    },
    isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    },
    minLength(value, length) {
        return value.length >= length;
    },
    maxLength(value, length) {
        return value.length <= length;
    },
};
