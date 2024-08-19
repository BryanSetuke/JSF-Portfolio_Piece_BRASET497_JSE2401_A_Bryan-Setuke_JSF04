export function formatDate(dateString, locale = "en-US", options = {}) {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    });
}
