export function saveTolS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


export function getFromLS(key) {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch {
        return data;
    }
}