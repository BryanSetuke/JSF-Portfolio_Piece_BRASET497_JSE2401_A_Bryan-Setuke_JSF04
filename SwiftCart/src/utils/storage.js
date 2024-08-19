export const storage = {
    get(key) {
        const item = localStorage.getItem(key);
        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    },
    set(key, value) {
        const item = typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, item);
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    },
};
